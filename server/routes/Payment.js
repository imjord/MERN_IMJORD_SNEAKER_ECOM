require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const router = require('express').Router();




router.post('/payment', async (req, res) => {
    try {
        const { amount, id } = req.body;
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Vade Sneaker Store',
            payment_method: id,
            confirm: true
        });
        console.log('payment', payment);
        res.json({
            message: 'Payment Successful',
            success: true
        });
    } catch (error) {
        console.log('Error', error);
        res.json({
            message: 'Payment Failed',
            success: false
        });
    }
});


module.exports = router;