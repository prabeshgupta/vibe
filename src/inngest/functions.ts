import { inngest } from "./client";
<<<<<<< HEAD
<<<<<<< HEAD
import { openai, createAgent } from "@inngest/agent-kit";
=======
>>>>>>> 007b10a (04: Background Job)
=======
import { openai, createAgent } from "@inngest/agent-kit";
>>>>>>> f2bfb88 (05 AI Job)

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f2bfb88 (05 AI Job)
    async ({ event }) => {
        const codeAgent = createAgent({
            name: "code-agent",
            system: "You are an expert next.js developer. You write optimized code. You write simple Next.js & React snippets.",
            model: openai({ model: "gpt-4o" }),
        });
<<<<<<< HEAD

        const { output } = await codeAgent.run(
            `Write the following snippet: ${event.data.value}`,
        );

        return { output };
=======
    async ({ event, step }) => {
        await step.sleep("wait-a-moment", "3s");
        await step.sleep("wait-a-moment", "2s");
        await step.sleep("wait-a-moment", "1s");

        return { message: `Hello ${event.data.email}!` };
>>>>>>> 007b10a (04: Background Job)
=======

        const { output } = await codeAgent.run(
            `Write the following snippet: ${event.data.value}`,
        );

        return { output };
>>>>>>> f2bfb88 (05 AI Job)
    },
);