import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
let users = [

]

router.get('/', (req,res) =>  {
    res.send(users);
});

router.post('/',(req,res) => {
        const user = req.body;
        users.push({ ...user, id:uuidv4()} );

        res.send(`User ${user.firstName} added to the database`);
});

router.get('/:id',(req,res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
});

router.delete('/:id',(req,res) => {
    const{ id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with id ${id} deleted`)
});

router.patch('/:id',(req,res) => {
    const {id} = req.params;
    const {firstName,lastName,Age} = req.body;
    const user = users.find((user) => user.id == id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(Age) user.Age = Age;

    res.send(`user ${id} updated`)

})

export default router;