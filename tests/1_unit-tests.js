const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator;

suite('Unit Tests', () => {
    suite('Translate to British English', function () {
        test('Mangoes are my favourite fruit.', function (done) {
            assert.equal(translator.toBritishEnglish('Mangoes are my favorite fruit.')[0],
                "Mangoes are my favourite fruit.")

            done();
        })

        test('I ate yogurt for breakfast.', function (done) {
            assert.equal(translator.toBritishEnglish('I ate yogurt for breakfast.')[0],
                'I ate yoghurt for breakfast.'
            )

            done();
        })

        test("We had a party at my friend's condo.", function (done) {
            assert.equal(translator.toBritishEnglish("We had a party at my friend's condo.")[0],
                "We had a party at my friend's flat."
            )
            done();
        })

        test("Can you toss this in the trashcan for me?", function (done) {
            assert.equal(translator.toBritishEnglish('I ate yogurt for breakfast.')[0],
                'I ate yoghurt for breakfast.'
            )
            done();
        })


        test('The parking lot was full.', function (done) {
            assert.equal(translator.toBritishEnglish('The parking lot was full.')[0],
                'The car park was full.'
            )
            done();
        })

        test('Like a high tech Rube Goldberg machine.', function (done) {
            assert.equal(translator.toBritishEnglish('Like a high tech Rube Goldberg machine.')[0],
                'Like a high tech Heath Robinson device.'
            )
            done();
        })

        test('To play hooky means to skip class or work.', function (done) {
            assert.equal(translator.toBritishEnglish('To play hooky means to skip class or work.')[0],
                'To bunk off means to skip class or work.'
            )
            done();
        })

        test('No Mr. Bond, I expect you to die.', function (done) {
            assert.equal(translator.toBritishEnglish('No Mr. Bond, I expect you to die.')[0],
                'No Mr Bond, I expect you to die.'
            )
            done();
        })

        test('Dr. Grosh will see you now.', function (done) {
            assert.equal(translator.toBritishEnglish('Dr. Grosh will see you now.')[0],
                'Dr Grosh will see you now.'
            )
            done();
        })

        test('Lunch is at 12:15 today.', function (done) {
            assert.equal(translator.toBritishEnglish('Lunch is at 12:15 today.')[0],
                'Lunch is at 12.15 today.'
            )
            done();
        })
    })

    suite('to american english', function () {

        test('We watched the footie match for a while.', function (done) {
            assert.equal(translator.toAmericanEnglish('We watched the footie match for a while.')[0],
                'We watched the soccer match for a while.'
            )
            done();
        })

        test('Paracetamol takes up to an hour to work.', function (done) {
            assert.equal(translator.toAmericanEnglish('Paracetamol takes up to an hour to work.')[0],
                'Tylenol takes up to an hour to work.'
            )
            done();
        })

        test('First, caramelise the onions.', function (done) {
            assert.equal(translator.toAmericanEnglish('First, caramelise the onions.')[0],
                'First, caramelize the onions.'
            )
            done();
        })
        test('I spent the bank holiday at the funfair.', function (done) {
            assert.equal(translator.toAmericanEnglish('I spent the bank holiday at the funfair.')[0],
                'I spent the public holiday at the carnival.'
            )
            done();
        })
        test('I had a bicky then went to the chippy.', function (done) {
            assert.equal(translator.toAmericanEnglish('I had a bicky then went to the chippy.')[0],
                'I had a cookie then went to the fish-and-chip shop.'
            )
            done();
        })

        test("I've just got bits and bobs in my bum bag.", function (done) {
            assert.equal(translator.toAmericanEnglish("I've just got bits and bobs in my bum bag.")[0],
                "I've just got odds and ends in my fanny pack."
            )
            done();
        })

        test("The car boot sale at Boxted Airfield was called off.", function (done) {
            assert.equal(translator.toAmericanEnglish("The car boot sale at Boxted Airfield was called off.")[0],
                "The swap meet at Boxted Airfield was called off."
            )
            done();
        })

        test("Have you met Mrs Kalyani?", function (done) {
            assert.equal(translator.toAmericanEnglish("Have you met Mrs Kalyani?")[0],
                "Have you met Mrs. Kalyani?"
            )
            done();
        })

        test("Prof Joyner of King's College, London.", function (done) {
            assert.equal(translator.toAmericanEnglish("Prof Joyner of King's College, London.")[0],
                "Prof. Joyner of King's College, London."
            )
            done();
        })

        test("Tea time is usually around 4 or 4.30.", function (done) {
            assert.equal(translator.toAmericanEnglish("Tea time is usually around 4 or 4.30.")[0],
                "Tea time is usually around 4 or 4:30."
            )
            done();
        })
    })

    suite('highlight text', function () {

        test("Mangoes are my favorite fruit.", function (done) {
            const converted = translator.toBritishEnglish("Mangoes are my favorite fruit.");
            console.log({ converted })
            assert.equal(converted[1],
                `Mangoes are my <span class="highlight">favourite</span> fruit.`
            )
            done();
        })

        test("I ate yogurt for breakfast.", function (done) {
            // console.log(translator.toBritishEnglish('I ate yogurt for breakfast.'));
            assert.equal(translator.toBritishEnglish("I ate yogurt for breakfast.")[1],
                `I ate <span class="highlight">yoghurt</span> for breakfast.`
            )
            done();
        })

        test("We watched the footie match for a while.", function (done) {
            assert.equal(translator.toAmericanEnglish("We watched the footie match for a while.")[1],
                `We watched the <span class="highlight">soccer</span> match for a while.`
            )
            done();
        })

        test("Paracetamol takes up to an hour to work.", function (done) {
            assert.equal(translator.toAmericanEnglish("Paracetamol takes up to an hour to work.")[1],
                `<span class="highlight">Tylenol</span> takes up to an hour to work.`
            )
            done();
        })
    })


});
