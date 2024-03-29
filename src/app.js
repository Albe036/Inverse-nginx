import express from 'express';
import morgan from 'morgan';
import user_routes from './router/user.routes.js';
import player_routes from './router/player.routes.js';
//process.loadEnvFile();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/users', user_routes);
app.use('/players', player_routes);


app.post('/', (req, res) => {
    const result = req.body;
    res.send(JSON.stringify(result));
});

export default app;