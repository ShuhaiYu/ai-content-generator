import React from "react";
import { Template } from "./ListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: Template) {
  return (
    <Link href={'/dashboard/content/'+item.slug}>
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
