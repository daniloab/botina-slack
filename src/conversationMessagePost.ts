export const conversationMessagePost = async (app, channel, thread_ts, text) => {
    const result = await app.client.chat.postMessage({
        token: "xoxb-3744551104532-3793906652642-7eqtTUIaeP5i2M1rjs0U9jiJ",
        channel,
        thread_ts,
        text,
    });

    return result;
}