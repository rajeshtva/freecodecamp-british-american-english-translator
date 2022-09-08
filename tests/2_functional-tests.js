const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    suite('test different post requests', function () {
        test('correct submission.', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: 'Mangoes are my favorite fruit.',
                    locale: 'american-to-british'
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200)
                    assert.equal(res.body.translation,
                        `Mangoes are my <span class="highlight">favourite</span> fruit.`
                    )
                })

            done();
        })
        test('valid text & invalid locale', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: 'Mangoes are my favorite fruit.',
                    locale: 'invalid'
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200)
                    assert.equal(
                        res.body.error,
                        `Invalid value for locale field`
                    )
                })

            done();
        })
        test('missing text ', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    locale: 'american-to-british'
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200)
                    assert.equal(
                        res.body.error,
                        `Required field(s) missing`
                    );
                })

            done();
        })

        test('missing locale ', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: 'Mangoes are my favorite fruit.',
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200)
                    assert.equal(
                        res.body.error,
                        `Required field(s) missing`
                    );
                })

            done();
        })
        test('translate empty string.', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: '',
                    locale: 'american-to-british'
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200)
                    assert.equal(
                        res.body.error,
                        `No text to translate`
                    );
                })

            done();
        })
        test('need to translation', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: 'Hi',
                    locale: 'american-to-british'
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200)
                    assert.equal(
                        res.body.translation,
                        `Everything looks good to me!`
                    );
                })

            done();
        })
    })
});
