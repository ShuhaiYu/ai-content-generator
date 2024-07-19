/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://neondb_owner:Zokr4C6cngDU@ep-dry-base-a78fie2u.ap-southeast-2.aws.neon.tech/ai-content-generator?sslmode=require'
  },
};
