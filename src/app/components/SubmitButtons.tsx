"use client"

import { useFormStatus } from "react-dom"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button";

export default function SubmitButtons() {
const { pending } = useFormStatus();
  return (
    <div>
      {pending ? 
        ( <Button disabled variant='outline'>
        <Loader2 className="size-4 mr-2 animate-spin"/> Submitting...</Button> ) : 
        ( <Button type="submit">Submit form</Button>
         
         )}
    </div>
  )
}
