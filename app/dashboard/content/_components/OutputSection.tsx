import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface Props {
  output: any;
}

function OutputSection({output}:Props) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    const editor = editorRef.current.getInstance();
    editor.setMarkdown(output || "Your result will be displayed here");
  }, [output]);

  return (
    <div className="bg-white shadow-lg border rounded-md">
      <div className="flex justify-between items-center p-5">
        <h2 className="text-2xl font-semibold p-5">Output</h2>
        <Button className="gap-2"
        onClick={()=> navigator.clipboard.writeText(output)}>
          <Copy className="w-4 h-4"/>
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will be displayed here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => {console.log(editorRef.current.getInstance().getMarkdown())}}
      />
    </div>
  );
}

export default OutputSection;
