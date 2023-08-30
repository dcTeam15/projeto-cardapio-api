import { Request, Response} from 'express';
const express = require('express');
const cors = require('cors');
const app = express();

const host = 'localhost';
const port = 8080;

const mesasRoutes = require('./routes/mesas');

export interface ReqRes {
    req: Request,
    res: Response
}

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server on: http://${host}:${port}`);
});

app.get('/', ({req, res} : ReqRes) => {
    res.send("Hello World")
})

app.use('/mesas', mesasRoutes);

