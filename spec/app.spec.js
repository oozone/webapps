let Request = require('request');

describe("server",()=>{
    
    let server;
    let ratingId;

    beforeAll(() => {
        server = require('../app');
    });
    describe("POST /api/ratings", () => {
        let data = {};
        beforeAll((done)=> {
            Request({
                method: 'POST',
                uri: 'http://localhost:3000/api/ratings',
                json: true,
                body:{"comment":"test", "ratingNumber": 5}
            },(error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null,null,true,process.env.VALID_TOKEN);
        });

        it("status 200", () => {
            expect(data.status).toBe(200);
        });

        it("body", () => {
			expect(data.body.comment).toBe("test");
            expect(data.body.ratingNumber).toBe(5);
			expect(data.body._id).toBeDefined();
			ratingId = data.body._id;
		});
    });

    describe("DELETE /api/ratings", () => {
        var data = {};
        beforeAll((done) => {
            Request.delete(`http://localhost:3000/api/rating/${ratingId}`, (error, response, body) => {
                data.status = response.statusCode;
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN);
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    });

    describe("GET /api/ratings/countedperrating", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/api/ratings/countedperrating", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN);
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.length).toBe(5);
        });
    });

    describe("POST /api/users/checkusername", () => {
        let data = {};
        beforeAll((done)=> {
            Request({
                method: 'POST',
                uri: 'http://localhost:3000/api/users/checkusername',
                json: true,
                body:{"username": "thisusernamedoesnotexist"}
            },(error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null,null,true,process.env.VALID_TOKEN);
        });

        it("status 200", () => {
            expect(data.status).toBe(200);
        });

        it("body", () => {
            expect(data.body.username).toBe("ok");
		});
    });

    describe("POST /api/contacts", () => {
        let data = {};
        beforeAll((done)=> {
            Request({
                method: 'POST',
                uri: 'http://localhost:3000/api/contacts',
                json: true,
                body: {
                    "name": "test",
                    "email": "email@email.com",
                    "comment": "commentje",
                    "createdDate": new Date()
                }
            },(error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null,null,true,process.env.VALID_TOKEN);
        });

        it("status 200", () => {
            expect(data.status).toBe(200);
        });

        it("body", () => {
            expect(data.body.name).toBe("test");
            expect(data.body.email).toBe("email@email.com");
            expect(data.body.comment).toBe("commentje");
		});
    });

});