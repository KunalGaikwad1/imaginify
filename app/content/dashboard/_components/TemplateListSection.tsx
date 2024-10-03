import React, { useEffect, useState } from "react";
import Templates from "../../(data)/Templates";
import TemplateCard from "./TemplateCard";

export interface Template {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}
function TemplateListSection({ userSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);
  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);
  return (
    <div className="grid p-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {templateList.map((item: Template, index: number) => (
        <div key={index}>
          <TemplateCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default TemplateListSection;
