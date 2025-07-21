import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/prismaClient";

const wsServer = new WebSocketServer({
    port: 6968,
});

wsServer.on("connection", async (socket) => {
    const res = await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        },
    });
    console.log(res);
    socket.send("Hi, the connection is established successfully");
});
