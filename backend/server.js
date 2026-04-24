require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

const TOKEN = process.env.ACCESS_TOKEN;

app.post('/pix', async (req, res) => {

    const { valor } = req.body;

    try {
        const response = await fetch("https://api.mercadopago.com/v1/payments", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                transaction_amount: Number(valor),
                description: "POS PIX",
                payment_method_id: "pix",
                payer: {
                    email: "teste@teste.com"
                }
            })
        });

        const data = await response.json();

        if(!data.point_of_interaction) {
            return res.json(data);
        }

        const pix = data.point_of_interaction.transaction_data;

        res.json({
            id: data.id,
            qr_code: pix.qr_code
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/status/:id', async (req, res) => {

    const { id } = req.params;

    const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
        headers: {
            "Authorization": `Bearer ${TOKEN}`
        }
    });

    const data = await response.json();

    res.json({ status: data.status });
});

app.listen(3000, () => console.log("Servidor rodando 🚀"));
