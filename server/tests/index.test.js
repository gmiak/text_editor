process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');

chai.should();

chai.use(chaiHttp);

describe('Test message', () => {
    describe('GET /api', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/api")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.be.an("array");
                    res.body.data.length.should.be.above(0);
                    done();
                });
        });
    });

    describe('GET /', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('GET /abc', () => {
        it('500 UNHAPPY PATH', (done) => {
            chai.request(server)
                .get("/abc")
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });
});