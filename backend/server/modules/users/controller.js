import User from './model.js';
import Bcrypt from 'bcrypt';
import passport from 'passport';

export const createUser = async (req, res) => {

    User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("Email Already Exists");
        if (!doc) {

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
                return res.status(404).json({ error: true, message: 'Error with user'})
            }
        }
    });
}

export const loginUser = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
}

export const getUser = async (req, res) => {
    res.send(req.user);  // The req.user stores the entire user that has been authenticated inside of it.
}

export const getAllUsers = async (req, res) => {
    try {
        return res.status(200).json({ post : await User.find({} )});
    } catch {
        return res.status(404).json({ error: true, message: 'Error with User'});
    }
}