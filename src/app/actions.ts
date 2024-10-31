"use server"

import { parseWithZod } from '@conform-to/zod';
import { redirect } from "next/navigation"
import { submissionSchema } from "./zodSchema"


export async function TalkToSalesActions(prevState: any,formData: FormData){
    const submission = parseWithZod(formData, 
        { schema: submissionSchema });

    
   if(submission.status !== "success"){
    return submission.reply()
   }


   
    const response = await fetch(process.env.TALK_TO_SALES_URL!, {
        method: 'POST',
        body: formData,
    })

    if(!response.ok){
        throw new Error("Something wrong")
    }
    
    return redirect("/success")
}

