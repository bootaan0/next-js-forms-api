"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { TalkToSalesActions } from "./actions";
import SubmitButtons from "./components/SubmitButtons";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { submissionSchema } from "./zodSchema";

export default function Home() {
  const [salesResult, salesAction] = useFormState(TalkToSalesActions, undefined);


 const [salesForm, salesFiels] = useForm({
  
    lastResult: salesResult,

    onValidate({formData}) {
      return parseWithZod(formData, {schema: submissionSchema});
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput'
  })

  return (
<section className="min-h-screen w-screen flex flex-col items-center justify-center px-5">
<h1 className="text-3xl font-bold mb-7">Contact us</h1>
<Card className="max-w-[500px] w-full">
<Tabs defaultValue="sales">
  <CardContent className="mt-5">
    <TabsList className="grid grid-cols-2">
      <TabsTrigger value="sales">Talk to sales</TabsTrigger>
      <TabsTrigger value="support">Support</TabsTrigger>
    </TabsList>

    <TabsContent value="sales">
      <p className="text-sm text-muted-foreground"
      >you want to integrate your product whit us? we can help you please contact us down below.</p>

      <form action={salesAction} 
      id={salesForm.id}
      onSubmit={salesForm.onSubmit}
      noValidate
      className="flex flex-col gap-y-4 mt-5">
      
      <div className="grid space-y-1">
      <Label>Name</Label>
      <Input 
      name={salesFiels.name.name} 
      defaultValue={salesFiels.name.initialValue}
      key={salesFiels.name.key}
      placeholder="Muxammed"/>
      <p className="text-red-500 text-sm">{salesFiels.name.errors}</p>
      </div>
      <div className="grid space-y-1">
      <Label>Email</Label>
      <Input 
      name={salesFiels.email.name} 
      defaultValue={salesFiels.email.initialValue}
      key={salesFiels.email.key}
      placeholder="Bootaan@gmail.com"/>
      <p className="text-red-500 text-sm">{salesFiels.email.errors}</p>
      </div>
      <div className="grid space-y-1">
      <Label>Question or Problem</Label>
      <Textarea
      name={salesFiels.message.name} 
      defaultValue={salesFiels.message.initialValue}
      key={salesFiels.message.key}
      className="h-32" placeholder="please share deatils about your needs..." />
      <p className="text-red-500 text-sm">{salesFiels.message.errors}</p>
      </div>
     <SubmitButtons />
      </form>
    </TabsContent>

    <TabsContent value="support">
    <p className="text-sm text-muted-foreground"
      >Trouble shoot technical or issue payment problem.</p>

<form className="flex flex-col gap-y-4 mt-5">
      <div className="grid space-y-1">
      <Label>Name</Label>
      <Input  placeholder="Cali Axmed"/>
      </div>
      <div className="grid space-y-1">
      <Label>Email</Label>
      <Input  placeholder="Anfac@gmail.com"/>
      </div>
      <div className="grid space-y-1">
      <Label>Question or Problem</Label>
      <Textarea className="h-22" placeholder="Whats is wrong..." />
      </div>
      <div className="grid space-y-1">
        <Label>Asset</Label>
      <Input type="file" />
      </div>
      <Button>Submit</Button>
      </form>
    </TabsContent>
  </CardContent>
</Tabs>
</Card>
</section>
  );
}
