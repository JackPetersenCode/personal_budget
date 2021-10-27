const express = require('express');
const router = require('./router');
const app = express();
const cors = require('cors');

app.use('/', router);
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(3000, () => {
    console.log(`Server running on ${PORT}`);
})
