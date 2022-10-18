import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const users = [
    {
        firstName : "John",
        lastName : "Doe",
        Age: 32
    },
    {
        firstName : "John",
        lastName : "Cena",
        Age: 40
    }

]

router.get('/', (req,res) =>  {
    res.send(users);
});

router.post('/',(req,res) => {
        const user = req.body;
        const iserId = uuidv4();
        const userWithId = { ...user, id:userId };
        users.push(user);

        res.send(`User ${user.firstName} added to the database`);
});

export default router;