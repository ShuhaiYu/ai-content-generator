import { NEXT_BODY_SUFFIX } from "next/dist/lib/constants";
import { config } from "dotenv";

// Load environment variables from .env.local
config({ path: ".env.local" });

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL
  },
};
