import { apiWithLog } from "./core/apiWithLog";

require("isomorphic-fetch");
import { App } from "@slack/bolt";
import { debugConsole } from "./core/debugConsole";

import cron from "node-cron";
import { conversationReplyGet } from "./conversationReplyGet";
import { conversationMessagePost } from "./conversationMessagePost";
import {userGet} from "./userGet";

const app = new App({
  token: "xoxb-3744551104532-3793906652642-7eqtTUIaeP5i2M1rjs0U9jiJ",
  appToken:
    "xapp-1-A03P5924S6S-3817843134784-a3e5fa09185ffda44894c9734c8d6df06116ccb415747f3719b5e44375a578b2",
  signingSecret: "ec0193816264fe9af7a13d4a7c4dd4b7",
  socketMode: true,
});

const generalChannelId = "C03MMFU7PAS";
const myUserId = "U03NHSA09LY";

app.message("Lembrete", async ({ message, say }) => {
  await conversationMessagePost(
    app,
    generalChannelId,
    message?.thread_ts,
    "Hey @Danilo Assis, answer the thread"
  );
});

app.message("answer", async ({ message, say }) => {
  await conversationMessagePost(
    app,
    generalChannelId,
    message?.thread_ts,
    "Hey @Danilo Assis, answer the thread"
  );
});

app.message("find", async ({ message, say }) => {
  await conversationReplyGet(app, generalChannelId, message.event_ts);
});

app.message("timeout", async ({ message, say }) => {
  console.log({message})
  setTimeout(async () => {
    await conversationMessagePost(
        app,
        generalChannelId,
        message?.event_ts,
        "Hey @Danilo Assis, this is a timeout message"
    );
  }, 5000);
});

app.message('user', async ({ message, }) => {
  await userGet(app, myUserId);
})

app.message("cron", async ({ message, say }) => {
  cron.schedule("* * * * *", () => {
    setTimeout(async () => {
      await conversationMessagePost(
          app,
          generalChannelId,
          message?.event_ts,
          "Hey @Danilo Assis, this is a cron message every minute"
      );
    }, 5000);
  });
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
