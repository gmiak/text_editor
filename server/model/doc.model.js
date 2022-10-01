const database = require("../db/database");
const { ObjectId } = require("mongodb");

const docs = {
    getDocs: async function getDocs() {
        let db = await database.getDb();

        try {
            db = await database.getDb();

            const allDocs = await db.collection.find().toArray();
            return allDocs;
        } catch (error) {
            return {
                errors: {
                    message: error.message,
                },
            };
        } finally {
            await db.client.close();
        }
    },
};

module.exports = docs;