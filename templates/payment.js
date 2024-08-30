const stripe = require('stripe')('your_stripe_secret_key');

const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    payment_method_types: ['card'],
});

console.log(paymentIntent);
