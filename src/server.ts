import express from 'express';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());

dotenv.config();

app.get('/', function (request, response) {
    response.send([
        { id: 1, name: "Ana" }
    ])
});

app.listen(process.env.PORT);