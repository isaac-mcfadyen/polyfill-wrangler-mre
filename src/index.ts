import crypto from "crypto";

export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(crypto.randomUUID());
  },
};
