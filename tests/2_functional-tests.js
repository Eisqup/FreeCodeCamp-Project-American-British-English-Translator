const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

//1. Translation with text and locale fields: POST request to /api/translate
//2. Translation with text and invalid locale field: POST request to /api/translate
//3. Translation with missing text field: POST request to /api/translate
//4. Translation with missing locale field: POST request to /api/translate
//5. Translation with empty text: POST request to /api/translate
//6. Translation with text that needs no translation: POST request to /api/translate

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test("1. Translation with text and locale fields: POST request to /api/translate", (done) => {
        chai.request(server)
            .post("/api/translate")
            .send({
                text: "I had a bicky then went to the chippy.",
                locale: "british-to-american"
            })
            .end((err, res) => {
                assert.isNull(err);
                assert.equal(res.status, 200);
                assert.isTrue(!res.body.hasOwnProperty("error"));
                done()
            });
    })
    test("2. Translation with text and invalid locale field: POST request to /api/translate", (done) => {
        chai.request(server)
            .post("/api/translate")
            .send({
                text: "I had a bicky then went to the chippy.",
                locale: "british-to-italien"
            })
            .end((err, res) => {
                assert.isNull(err);
                assert.equal(res.status, 200);
                assert.deepStrictEqual(res.body ,{ error: 'Invalid value for locale field' });
                done()
            });
    })
    test("3. Translation with missing text field: POST request to /api/translate", (done) => {
        chai.request(server)
            .post("/api/translate")
            .send({
                locale: "british-to-italien"
            })
            .end((err, res) => {
                assert.isNull(err);
                assert.equal(res.status, 200);
                assert.deepStrictEqual(res.body ,{ error: 'Required field(s) missing' });
                done()
            });
    })
    test("4. Translation with missing locale field: POST request to /api/translate", (done) => {
        chai.request(server)
            .post("/api/translate")
            .send({
                text: "I had a bicky then went to the chippy."
            })
            .end((err, res) => {
                assert.isNull(err);
                assert.equal(res.status, 200);
                assert.deepStrictEqual(res.body ,{ error: 'Required field(s) missing' });
                done()
            });
    })
    test("5. Translation with empty text: POST request to /api/translate", (done) => {
        chai.request(server)
            .post("/api/translate")
            .send({
                 text: "",
                locale: "british-to-american"
            })
            .end((err, res) => {
                assert.isNull(err);
                assert.equal(res.status, 200);
                assert.deepStrictEqual(res.body ,{"error":"No text to translate"});
                done()
            });
    })
    test("6. Translation with text that needs no translation: POST request to /api/translate", (done) => {
chai.request(server)
            .post("/api/translate")
            .send({text: "I had a bicky then went to the chippy.", 
                   locale: "american-to-british"})
            .end((err, res) => {
                assert.isNull(err);
                assert.equal(res.status, 200);
                assert.deepStrictEqual(res.body ,{text: "I had a bicky then went to the chippy.",
                                                  translation: "Everything looks good to me!"
});
                done()
            });
    })

});
