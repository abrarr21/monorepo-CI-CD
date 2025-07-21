import { prismaClient } from "@repo/db/prismaClient";

export default async function Home() {
    const user = await prismaClient.user.findFirst();
    return (
        <div>
            <h1>Credentials: </h1>
            {user?.username} || {user?.password}
        </div>
    );
}
