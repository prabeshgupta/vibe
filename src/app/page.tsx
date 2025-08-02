"use client"
import { Button } from "@/components/ui/button"
import { useTRPC } from "@/trpc/client"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

const page = () => {
  const trpc = useTRPC()
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background Job Started")
    }
  }))

  return (
    <div>
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({ text: "Prabesh" })}>Click</Button>
    </div>
  )
}

export default page