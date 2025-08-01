import { getQueryClient, trpc } from "@/trpc/server"
import { Client } from "./client"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { Suspense } from "react"

const page = async () => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: "Prabesh Gupta" }))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  )
}

export default page
