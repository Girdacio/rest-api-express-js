const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse requests of Content-Type - application/json
app.use(bodyParser.json());
// Application routes
app.use('/api', require('./src/api/routes'));

const PORT = process.env.port || 4001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
