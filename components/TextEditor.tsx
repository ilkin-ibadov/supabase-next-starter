"use client";

import { useState, useEffect } from "react";
import { SimpleEditor } from "./tiptap-templates/simple/simple-editor";

export default function TextEditor() {
  const [blogBody, setBlogBody] = useState("")

  useEffect(() => {
    console.log(blogBody);
  }, [blogBody]);

  return (
   <div className="w-full max-w-[770px] h-[360px] border-[1px] border-zinc-300 rounded-[2px]">
     <SimpleEditor setBlogBody={setBlogBody}/>
   </div>
  )
}