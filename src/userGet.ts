import { debugConsole } from "./core/debugConsole";

export const userGet = async (app, user) => {
  const userResult = await app.client.users.info({
    token: "xoxb-3744551104532-3793906652642-7eqtTUIaeP5i2M1rjs0U9jiJ",
    user,
  });

  console.log("userGet");
  debugConsole({ userResult });

  return userResult;
};
