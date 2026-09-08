const express = require('express');

const heroRoutes = require('./routes/heroRoute');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/rpg', heroRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});