const express = require("express");
const app = express();

// Middleware to read raw text body
app.use(express.text());

app.post("/", (req, res) => {
    res.status(200).send(req.body);
});

// Use Render's provided port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
