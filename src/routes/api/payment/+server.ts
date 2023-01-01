import { json } from '@sveltejs/kit'
import Stripe from 'stripe'

// @ts-ignore
const stripe = new Stripe(process.env.SECRET_STRIPE_KEY)

export async function POST() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'usd',
    payment_method_types: ['card']
  })

  return json({
    clientSecret: paymentIntent.client_secret
  })
}