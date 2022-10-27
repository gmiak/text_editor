process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../index.js');

chai.should();

const database = require("../db/database.js");
const collectionName = "documents";

chai.use(chaiHttp);

let apiKey = "";

describe('Testing routes/doc.route.js', () => {
    before(async () => {
        const db = await database.getDb();

        db.db.listCollections(
            { name: collectionName }
        )
            .next()
            .then(async function(info) {
                if (info) {
                    await db.collection.drop();
                }
            })
            .catch(function(err) {
                console.error(err);
            })
            .finally(async function() {
                await db.client.close();
            });
            
    });
    describe('GET /', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .routes.get("/api_key")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});