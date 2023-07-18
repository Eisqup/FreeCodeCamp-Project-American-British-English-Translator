const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

//1. Translate Mangoes are my favorite fruit. to British English
//2. Translate I ate yogurt for breakfast. to British English
//3. Translate We had a party at my friend's condo. to British English
//4. Translate Can you toss this in the trashcan for me? to British English
//5. Translate The parking lot was full. to British English
//6. Translate Like a high tech Rube Goldberg machine. to British English
//7. Translate To play hooky means to skip class or work. to British English
//8. Translate No Mr. Bond, I expect you to die. to British English
//9. Translate Dr. Grosh will see you now. to British English
//10. Translate Lunch is at 12:15 today. to British English
//11. Translate We watched the footie match for a while. to American English
//12. Translate Paracetamol takes up to an hour to work. to American English
//13. Translate First, caramelise the onions. to American English
//14. Translate I spent the bank holiday at the funfair. to American English
//15. Translate I had a bicky then went to the chippy. to American English
//16. Translate I've just got bits and bobs in my bum bag. to American English
//17. Translate The car boot sale at Boxted Airfield was called off. to American English
//18. Translate Have you met Mrs Kalyani? to American English
//19. Translate Prof Joyner of King's College, London. to American English
//20. Translate Tea time is usually around 4 or 4.30. to American English
//21. Highlight translation in Mangoes are my favorite fruit.
//22. Highlight translation in I ate yogurt for breakfast.
//23. Highlight translation in We watched the footie match for a while.
//23. Highlight translation in Paracetamol takes up to an hour to work.

const britishToAmerican = "british-to-american"
const americanToBritish = "american-to-british"

suite('Unit Tests\n', () => {
    suite("American to British\n", () => {
        test("1. Translate Mangoes are my favorite fruit. to British English", (done) => {
            assert.strictEqual(translator.tranlate("Mangoes are my favorite fruit",americanToBritish),
                               "Mangoes are my <span class=\"highlight\">favourite</span> fruit")
            done()
        })
        test("2. Translate I ate yogurt for breakfast. to British English", (done) => {
            assert.strictEqual(translator.tranlate("I ate yogurt for breakfast.",americanToBritish),
                               "I ate <span class=\"highlight\">yoghurt</span> for breakfast.")
            done()
        })
        test("3. Translate We had a party at my friend's condo. to British English", (done) => {
            assert.strictEqual(translator.tranlate("We had a party at my friend's condo.",americanToBritish),
                               "We had a party at my friend's <span class=\"highlight\">flat</span>.")
            done()
        })
        test("4. Translate Can you toss this in the trashcan for me? to British English", (done) => {
            assert.strictEqual(translator.tranlate("Can you toss this in the trashcan for me?",americanToBritish),
                               "Can you toss this in the <span class=\"highlight\">bin</span> for me?")
            done()
        })
        test("5. Translate The parking lot was full. to British English", (done) => {
            assert.strictEqual(translator.tranlate("The parking lot was full.",americanToBritish),
                               "The <span class=\"highlight\">car park</span> was full.")
            done()
        })
        test("6. Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
            assert.strictEqual(translator.tranlate("Like a high tech Rube Goldberg machine.",americanToBritish),
                               "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.")
            done()
        })
        test("7. Translate To play hooky means to skip class or work. to British English", (done) => {
            assert.strictEqual(translator.tranlate("To play hooky means to skip class or work.",americanToBritish),
                               "To <span class=\"highlight\">bunk off</span> means to skip class or work.")
            done()
        })
        test("8. Translate No Mr. Bond, I expect you to die. to British English", (done) => {
            assert.strictEqual(translator.tranlate("No Mr. Bond, I expect you to die.",americanToBritish),
                               "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.")
            done()
        })
        test("9. Translate Dr. Grosh will see you now. to British English", (done) => {
            assert.strictEqual(translator.tranlate("Dr. Grosh will see you now.",americanToBritish),
                               "<span class=\"highlight\">Dr</span> Grosh will see you now.")
            done()
        })
        test("10. Translate Lunch is at 12:15 today. to British English", (done) => {
            assert.strictEqual(translator.tranlate("Lunch is at 12:15 today.",americanToBritish),
                               "Lunch is at <span class=\"highlight\">12.15</span> today.")
            done()
        })
    })
    
    suite("\nBritish to Amarican\n", () => {
        test("1. Translate Mangoes are my favorite fruit. to British English", (done) => {
            assert.strictEqual(translator.tranlate("Mangoes are my favorite fruit",americanToBritish),
                               "Mangoes are my <span class=\"highlight\">favourite</span> fruit")
            done()
        })
        test("2. Translate I ate yogurt for breakfast. to British English", (done) => {
            assert.strictEqual(translator.tranlate("I ate yogurt for breakfast.",americanToBritish),
                               "I ate <span class=\"highlight\">yoghurt</span> for breakfast.")
            done()
        })
        test("3. Translate We had a party at my friend's condo. to British English", (done) => {
            assert.strictEqual(translator.tranlate("We had a party at my friend's condo.",americanToBritish),
                               "We had a party at my friend's <span class=\"highlight\">flat</span>.")
            done()
        })
        test("4. Translate Can you toss this in the trashcan for me? to British English", (done) => {
            assert.strictEqual(translator.tranlate("Can you toss this in the trashcan for me?",americanToBritish),
                               "Can you toss this in the <span class=\"highlight\">bin</span> for me?")
            done()
        })
        test("5. Translate The parking lot was full. to British English", (done) => {
            assert.strictEqual(translator.tranlate("The parking lot was full.",americanToBritish),
                               "The <span class=\"highlight\">car park</span> was full.")
            done()
        })
        test("6. Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
            assert.strictEqual(translator.tranlate("Like a high tech Rube Goldberg machine.",americanToBritish),
                               "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.")
            done()
        })
        test("7. Translate To play hooky means to skip class or work. to British English", (done) => {
            assert.strictEqual(translator.tranlate("To play hooky means to skip class or work.",americanToBritish),
                               "To <span class=\"highlight\">bunk off</span> means to skip class or work.")
            done()
        })
        test("8. Translate No Mr. Bond, I expect you to die. to British English", (done) => {
            assert.strictEqual(translator.tranlate("No Mr. Bond, I expect you to die.",americanToBritish),
                               "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.")
            done()
        })
        test("9. Translate Dr. Grosh will see you now. to British English", (done) => {
            assert.strictEqual(translator.tranlate("Dr. Grosh will see you now.",americanToBritish),
                               "<span class=\"highlight\">Dr</span> Grosh will see you now.")
            done()
        })
        test("10. Translate Lunch is at 12:15 today. to British English", (done) => {
            assert.strictEqual(translator.tranlate("Lunch is at 12:15 today.",americanToBritish),
                               "Lunch is at <span class=\"highlight\">12.15</span> today.")
            done()
        })
    })
});
