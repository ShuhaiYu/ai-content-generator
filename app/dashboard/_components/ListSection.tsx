import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface Template {
    name: string,
    desc: string,
    category: string,
    icon: string,
    aiPrompt: string,
    slug: string,
    form?: FORM[]
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}


function ListSection(search:any) {
    const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([])

    useEffect(() => {
        if(search.search === '') {
            setFilteredTemplates(Templates)
        }
        else {
            const filtered = Templates.filter((item:Template) => item.name.toLowerCase().includes(search.search.toLowerCase()))
            setFilteredTemplates(filtered)
        }
    }, [search])
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 '>
        {
            filteredTemplates.map((item:Template, index:number) => (
                <TemplateCard key={index} {...item} />
            ))
        }
    </div>
  )
}

export default ListSection