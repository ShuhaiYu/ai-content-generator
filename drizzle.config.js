import { NEXT_BODY_SUFFIX } from "next/dist/lib/constants";


/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL
  },
};
