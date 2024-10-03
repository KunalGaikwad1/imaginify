import React from "react";
import { Template } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: Template) {
  return (
    <Link href={"/content/dashboard/content/" + item?.slug}>
      <div className="p-5 shadow-md rounded-md hover:scale-105 transition-all border bg-white flex flex-col gap-3 cursor-pointer">
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
