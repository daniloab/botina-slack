import { debugConsole } from "./core/debugConsole";

export const conversationReplyGet = async (app, channel, ts) => {
  const result = await app.client.conversations.replies({
    token: "xoxb-3744551104532-3793906652642-7eqtTUIaeP5i2M1rjs0U9jiJ",
    channel,
    ts,
  });

  console.log("conversationReplyGet");
  debugConsole({ result });

  return result;
};
