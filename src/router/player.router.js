import { Router } from 'express';
import players_fun from '../controllers/player.controller.js';


const router = Router();

router.get('/player-name', players_fun.generate_random_name);

router.get('/list-player-name', players_fun.generate_random_list_name);

router.post('/create-player', players_fun.created_player);

router.put('/update-player', (req, res) => {
    const result = req.body;
    res.send(JSON.stringify(result));
});


export default router;