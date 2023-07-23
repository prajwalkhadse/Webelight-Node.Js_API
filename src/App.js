const express = require('express');
require("./db/connection");
const jwt = require("jsonwebtoken");

const Admin = require("./models/Admin");
const User = require("./models/user");

const authenticate = require("./middleware/Admin_auth");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Welcome to the our FMCG App!.");
})


// Admins EndPoints

app.post("/admin", async (req, res) => {

    try {
        const Creatadmin = req.body;
        const admins = new Admin(Creatadmin);
        const savedAdmin = await admins.save();
        res.json(savedAdmin);

    } catch (e) {
        res.status(400).send(e);
    }
})

//for update

app.put("/admin/:id", authenticate, async (req, res) => {

    try {
        const { name, password } = req.body;
        const updateadmin = await Admin.findByIdAndUpdate(req.params.id, { name, password }, { new: true });

        if (!updateadmin) {
            return res.status(404).json({ meggage: 'Admine not found' });
        }

        res.json(updateadmin);

    } catch (e) {
        res.status(500).json({ error: 'unable to update admin' });
    }
})

//get all Admins


app.get("/admin", authenticate, async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (e) {
        res.status(500).json({ error: "Can't find admins" });
    }
});


//find by ID

app.get("/admin/:id", authenticate, async (req, res) => {

    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.json(admin);

    } catch (e) {
        res.status(500).json({ error: "Can't find admin" });
    }
})

//delete by id

app.delete("/admin/:id", authenticate, async (req, res) => {

    try {
        const deleteadmin = await Admin.findByIdAndDelete(req.params.id);
        if (!deleteadmin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.json(deleteadmin);

    } catch (e) {
        res.status(500).json({ error: "Can't find admin" });
    }
})


////////////  CRUD Operations for USER //////////


app.post("/user", async (req, res) => {

    try {
        const Creatuser = req.body;
        const users = new User(Creatuser);
        const savedUser = await users.save();
        res.json(savedUser);

    } catch (e) {
        res.status(400).send(e);
    }
})

//for update

app.put("/user/:id", authenticate, async (req, res) => {

    try {
        const { name, password } = req.body;
        const updateuser = await User.findByIdAndUpdate(req.params.id, { name, password }, { new: true });

        if (!updateuser) {
            return res.status(404).json({ meggage: 'User not found' });
        }

        res.json(updateuser);

    } catch (e) {
        res.status(500).json({ error: 'unable to update User' });
    }
})

// for pagination queries

app.get("/user", async (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10;

    try {
        const users = await User.find()
            .skip((page - 1) * limit)
            .limit(limit);
        res.json(users);
    } catch (e) {
        res.status(500).json({ error: "user not found" });
    }
});

//find by ID

app.get("/user/:id", async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        res.json(user);

    } catch (e) {
        res.status(500).json({ error: "Can't find user" });
    }
})

//delete by id

app.delete("/user/:id",authenticate, async (req, res) => {

    try {
        const deleteuser = await User.findByIdAndDelete(req.params.id);
        if (!deleteuser) {
            return res.status(404).json({ message: "user not found" });
        }
        res.json(deleteuser);

    } catch (e) {
        res.status(500).json({ error: "Can't find usre" });
    }
})




app.listen(port, () => {
    console.log(`Connection is created at ${port}`);
}) 