import type { MetadataRoute } from "next";
import { abs } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Yapay zeka arama ve asistan tarayıcıları: içeriğin kaynak gösterilebilmesi için açıkça izinli
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Bingbot"], allow: "/" },
    ],
    sitemap: abs("/sitemap.xml"),
  };
}
