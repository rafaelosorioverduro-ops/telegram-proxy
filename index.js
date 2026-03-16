const express = require("express");
const fetch = require("node-fetch");
const app = express();

const TOKEN = "8572280228:AAHZ_gN0pJ8MMZ5EjNOoz7u5HGXsLyFFGo4";
const CHAT_ID = "8231324366";

app.get("/send.php", async (req, res) => {
  const texto = req.query.msg || "Mensaje vacío";

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: texto,
      }),
    });

    res.send("OK");
  } catch (e) {
    res.status(500).send("Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + PORT);
});
