import { Router } from 'express';


const router = Router();


router.post('/login', (req, res) => {
    const result = req.body;
    res.send(JSON.stringify(result));
});

router.post('/register', (req, res) => {
    const result = req.body;
    res.send(JSON.stringify(result));
});

router.post('/forgot-password', (req, res) => {
    const result = req.body;
    res.send(JSON.stringify(result));
});

router.post('/reset-password', (req, res) => {
    const result = req.body;
    res.send(JSON.stringify(result));
});

router.post('/change-password', (req, res) => {
    const result = req.body;
    res.send(JSON.stringify(result));
});

router.post('/logout', (req, res) => {
    const result = req.body;
    res.send(JSON.stringify(result));
});



export default router;