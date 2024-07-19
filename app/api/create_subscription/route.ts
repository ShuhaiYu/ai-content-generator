// @ts-nocheck
"use server"

import { redirect } from "next/navigation";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function checkout(): Promise<any> {
  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1PdZEBLPwqbFMdHpvTnaUDLV",
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard/billing?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard/billing?canceled=true`,
  });
  redirect(session.url);
}