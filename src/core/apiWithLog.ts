import { debugConsole } from "./debugConsole";
import { cloneResponse } from "./cloneResponse";
import { getCurl } from "./getCurl";

// const TIMEOUT = 30000; // API timeouts 30 seconds

type RequestOptions = RequestInit & {
  shouldReport?: boolean;
};
export const apiWithLog = async (
  init: RequestInfo,
  options: RequestOptions
): Promise<Response> => {
  // return timeout(TIMEOUT)(fetch)(init, options).then(async (response) => {
  return fetch(init, options).then(async (response) => {
    const text = await response.text();

    let json = null;

    try {
      json = JSON.parse(text);
    } catch (err) {
      // eslint-disable-next-line
    }

    const getBody = () => {
      if (json) {
        return {
          json,
        };
      }

      return {
        text,
      };
    };

    if (process.env.DEBUG === "true") {
      // eslint-disable-next-line
      const { agent, ...optionsWithoutAgent } = options;

      const curl = getCurl(init, options);

      // eslint-disable-next-line
      debugConsole({
        init,
        options: optionsWithoutAgent,
        // text,
        // json,
        ...getBody(),
        ok: response.ok,
        status: response.status,
        curl,
      });
    }

    const { responseCopy } = await cloneResponse(response, text);

    return responseCopy;
  });
};
