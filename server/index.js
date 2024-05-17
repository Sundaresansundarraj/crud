const express = require('express');
const app = express();
const routes = require('./Routes/routes');
require('./Configuration/config');

app.use(express.json());
app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
