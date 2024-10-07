// server.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const { json } = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use environment variable
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors()); // Enable CORS
app.use(json());
app.use(morgan('dev')); // Log requests

app.post('/create-payment-intent', async (req, res) => {
    const { amount, currency } = req.body;

    // Input validation
    if (!amount || !currency) {
        return res.status(400).send({ error: 'Amount and currency are required.' });
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
