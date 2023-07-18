'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
 
        if (!req.body.hasOwnProperty('locale') || !req.body.hasOwnProperty('text')){
            return res.send({ error: 'Required field(s) missing' })
        }
        
         const { text, locale } = req.body;
        
        if(!text){
            return res.send({"error":"No text to translate"})
        }
        const translation = translator.tranlate(text, locale)

        if(!translation){
            return res.send({ error: 'Invalid value for locale field' })
        }
        
        if(translation == text){
            return res.send({"text":text,"translation":"Everything looks good to me!"})
        }

        return res.send({"text":text,"translation":translation})
      
    });
};
