import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIoutput = pgTable("AIoutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData"),
  aiResponse: text("aiResponse"),
  templateSlug: varchar("templateSlug").notNull(),
  createdBy: varchar("createdBy"),
  createdAt: varchar("createdAt"),
});

export const UserSubscription = pgTable("UserSubscription", {
  id: serial("id").primaryKey(),
  email: varchar("email").unique().notNull(),
  userName: varchar("userName").notNull(),
  active:boolean("active"),
  paymentID: varchar("paymentID"),
  JoinDate: varchar("JoinDate"),
});