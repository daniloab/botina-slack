import { App } from "@slack/bolt";

const app = new App({
  token: "xoxb-3744551104532-3793906652642-7eqtTUIaeP5i2M1rjs0U9jiJ",
  appToken:
    "xapp-1-A03P5924S6S-3817843134784-a3e5fa09185ffda44894c9734c8d6df06116ccb415747f3719b5e44375a578b2",
  signingSecret: "ec0193816264fe9af7a13d4a7c4dd4b7",
  socketMode: true,
});

// Listens to incoming messages that contain "hello"
app.message("hello", async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Hey there <@${message.user}>!`,
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
          },
          action_id: "button_click",
        },
      },
    ],
    text: `Hey there <@${message.user}>!`,
  });
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
