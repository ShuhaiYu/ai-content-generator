"use client"

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react'
import { AIoutput, UserSubscription } from '@/utils/schema';
import { sql } from 'drizzle-orm';
import { date } from 'drizzle-orm/mysql-core';
import { AIoutputData } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscription  as US } from '@/app/(context)/UserSubscription';

function UsageTrack() {
    const {user} = useUser();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
    const {userSubscription, setUserSubscription} = useContext(US);
    const [maxUsage, setMaxUsage] = useState<number>(10000);

    useEffect(() => {
        user&&GetData();
        user&&IsUserSubscribed();
    }, [user]);

    const GetData = async () => {
        // @ts-ignore
        const data:AIoutputData[] = await db
            .select()
            .from(AIoutput)
            .where(sql`${AIoutput.createdBy} = ${user?.primaryEmailAddress?.emailAddress}`);
        
        GetTotalUsage(data);
    }

    const IsUserSubscribed = async () => {
        // @ts-ignore
        const data = await db
            .select()
            .from(UserSubscription)
            .where(sql`${UserSubscription.email} = ${user?.primaryEmailAddress?.emailAddress}`);
        
        if(data.length > 0){
            setUserSubscription(true);
            setMaxUsage(100000);
        }else{
            setUserSubscription(false);
        }
    }

    const GetTotalUsage = (data : AIoutputData[]) => {
        let total:number = 0;
        data.forEach(element => {
            total= total+Number(element.aiResponse?.length);
        });
        setTotalUsage(total);
    }
  return (
    <div className='m-5'>
        <div className="bg-primary text-white p-3 rounded-md">
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full'
                style={{
                    width: (totalUsage/maxUsage*100)+'%'
                }}>

                </div>
            </div>
            <h2 className='font-medium mt-3'>{totalUsage}/{US?"100,000 ":"10,000"}credit used</h2>
        </div>
        <Button className='mt-5 w-full text-primary' variant={"secondary"} >Upgrade Plan</Button>
    </div>
  )
}

export default UsageTrack