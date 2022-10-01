const mongo = require("mongodb").MongoClient;
const collectionName = "documents";

const database = {
    getDb: async function getDb() {
        let dsn =
            `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}` + 
            `@cluster0.24a6jqv.mongodb.net/?retryWrites=true&w=majority`;

        if (process.env.NODE_ENV === "test") {
            dsn = "mongodb://localhost:1337/test";
        }

        const client = await mongo.connect(dsn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = await client.db();
        const collection = await db.collection(collectionName);

        return {
            db: db,
            collection: collection,
            client: client,
        };
    },
};

module.exports = database;