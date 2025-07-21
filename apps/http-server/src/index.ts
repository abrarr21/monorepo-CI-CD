import express from "express";
import { prismaClient } from "@repo/db/prismaClient";
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Hey There");
});

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const addedUser = await prismaClient.user.create({
        data: {
            username: username,
            password: password,
        },
    });

    res.json({
        message: "user created successfully",
        user: addedUser.id,
    });
});

app.listen(6969, () => {
    console.log(`Server started running at port: 6969`);
});
