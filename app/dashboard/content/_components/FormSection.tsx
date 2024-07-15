"use client";

import React, { useState } from "react";
import { Template } from "../../_components/ListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface Props {
  selectedTemplate?: Template;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: Props) {
  const [form, setForm] = useState<any>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(form);
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="p-5 shadow-md border rounded-md bg-white">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={50} height={50} />
      <h3 className="text-2xl font-semibold mb-2 text-primary">
        {selectedTemplate?.name}
      </h3>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-5" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="mb-7 mt-2 flex flex-col">
            <label htmlFor={item.field} className="text-sm text-gray-500">
              {item.label}
            </label>
            {item.field === "textarea" ? (
              <Textarea
                name={item.name}
                id={item.field}
                required={item.required}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
            ) : (
              <Input
                type={item.field}
                name={item.name}
                id={item.field}
                required={item.required}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
            )}
          </div>
        ))}
        <Button type="submit" className="w-full py-6" disabled={loading}>
          {
            loading ? <Loader2 className="animate-spin"/> : "Generate Content"
          }
          
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
