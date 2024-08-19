import mongoose from "mongoose";

type ConnectionObject = {
    isConneted?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConneted) {
        console.log('Already connected to the database');
        return;
    }

    try {
        // Attempt to connect to the database
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

        console.log(db);
        console.log(db.connection);

        connection.isConneted = db.connections[0].readyState;

        console.log('Database connected successfully');
    } catch (error) {
        console.log("There was some error is db Connetion", error)
    }
}

export default dbConnect;