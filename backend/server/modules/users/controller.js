import User from './model.js';
import Bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
    //const { firstName, lastName, username, email, password, phoneNumber, physicalDirection, age, gender } = req.body;

    const saltPassword = await Bcrypt.genSalt(10)
    const securePassword = await Bcrypt.hash(req.body.password, saltPassword)

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: securePassword,
        phoneNumber: req.body.phoneNumber,
        physicalDirection: req.body.physicalDirection,
        age: req.body.age,
        gender: req.body.gender
    })

    try {
        return res.status(201).json({ user: await newUser.save() });
    } catch {
        return res.status(404 ).json({ error: true, message: 'Error with user'})
    }
}