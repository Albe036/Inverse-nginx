import express from 'express'
/* import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io' */

const app = express();


app.listen(3000, () => {
    console.log('green','Server listening on port 3000');
});