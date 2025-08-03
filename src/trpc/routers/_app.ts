import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({
    invoke: baseProcedure
        .input(
            z.object({
<<<<<<< HEAD
<<<<<<< HEAD
                value: z.string(),
=======
                text: z.string(),
>>>>>>> 007b10a (04: Background Job)
=======
                value: z.string(),
>>>>>>> f2bfb88 (05 AI Job)
            })
        )
        .mutation(async ({ input }) => {
            await inngest.send({
                name: "test/hello.world"
                ,
                data: {
<<<<<<< HEAD
<<<<<<< HEAD
                    value: input.value
=======
                    email: input.text
>>>>>>> 007b10a (04: Background Job)
=======
                    value: input.value
>>>>>>> f2bfb88 (05 AI Job)
                }
            })
            return { ok: "success" }
        }),
    createAI: baseProcedure
        .input(
            z.object({
                text: z.string(),
            }),
        )
        .query((opts) => {
            return {
                greeting: `hello ${opts.input.text}`,
            };
        }),
});
// export type definition of API
export type AppRouter = typeof appRouter;