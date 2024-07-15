"use client";

import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { Template } from "../../_components/ListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIoutput } from "@/utils/schema";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";

interface Props {
  params: {
    slug: string;
  };
}

function CreateNewContent(Props: Props) {
  const selectedTemplate: Template | undefined = Templates?.find(
    (item) => item.slug === Props.params.slug
  );

  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");
  const { user } = useUser();

  const GenerateAIContent = async (form: any) => {
    setLoading(true);
    console.log("Is Loading", loading);
    const prompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(form) + ", " + prompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);

    console.log(result.response.text());
    setOutput(result?.response.text());
    await SaveInDb(JSON.stringify(form), selectedTemplate?.slug, result.response.text());
    setLoading(false);
  };

  const SaveInDb = async (form: any, slug: any, aiResp: string) => {
    // Save the output in the database
    const result = await db
      .insert(AIoutput)
      .values({
        formData: form,
        aiResponse: aiResp,
        templateSlug: slug,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD/MM/YYYY"),
      })
      
      console.log(result);
  };

  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection output={output} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
