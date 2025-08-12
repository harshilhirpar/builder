import {createTRPCRouter } from '../init';
import { messageRouter } from '@/modules/messages/server/procedures';
export const appRouter = createTRPCRouter({
  messages: messageRouter,
  // invoke: baseProcedure
  // .input(
  //   z.object({
  //     value: z.string(),
  //   })
  // )
  // .mutation(async ({input}) => {
  //   await inngest.send({
  //     name: "test/hello.world",
  //     data: {
  //       value: input.value
  //     }
  //   })
  //   return {ok: "Success"}
  // })
  // ,
  // hello: baseProcedure
  //   .input(
  //     z.object({
  //       text: z.string(),
  //     }),
  //   )
  //   .query((opts) => {
  //     return {
  //       greeting: `hello ${opts.input.text}`,
  //     };
  //   }),
});
// export type definition of API
export type AppRouter = typeof appRouter;