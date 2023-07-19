const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    checkForTitle(value){
    return Object.keys(americanToBritishTitles).includes(value.toLowerCase()) ||
                Object.values(americanToBritishTitles).includes(value.toLowerCase())
    }

    searchKeyWordsInString(string, searchKeyWordsArray, translateDict) {

        const regexValue = translateDict.hasOwnProperty('.') ? '.' :
            translateDict.hasOwnProperty(':') ? ':' : false

        // search for a timematch
        const timeMatches = string.match(new RegExp(`\\b(\\d{1,2}[${regexValue}]\\d{2})\\b`, 'g'))

        const matchingValues = searchKeyWordsArray
            .map(value => {
                //check for the titles
                if (this.checkForTitle(value)) { 
                    const escapedValue = value.replace(".", "\\.")
                    const regex = new RegExp(`\\b${escapedValue}(?![\\w.])`, 'i')
                    const match = string.match(regex)
                    if (match) {
                        return match[0];
                    }
                } else {
                    const regex = new RegExp(`\\b${value}\\b`, 'i')
                    const match = string.match(regex)
                    
                    if (!value.match(/[.:]/g) && match) {
                        return match[0]
                    }
                }
                return null
            })
            .filter(value => value !== null)

        if (timeMatches) {
            return [...matchingValues, ...timeMatches]
        } else {
            return matchingValues
        }
    }

    americanToBritishDict() {
        return Object.assign(americanOnly,
            americanToBritishSpelling,
            americanToBritishTitles)
    }

    britishToAmericanDict() {
        const switchedObject = {};

        for (const [key, value] of Object.entries(Object.assign(americanToBritishSpelling,
            americanToBritishTitles))) {
            switchedObject[value] = key;
        }
        return Object.assign(switchedObject, britishOnly);
    }

    highlightWord(word) {
        return `<span class="highlight">${word}</span>`
    }

    createReturnMassage(toTranlateString, toTranslatWordsArray, translateDict) {
        let result = toTranlateString

        toTranslatWordsArray.forEach((value) => {
            console.log(value)
            // check for a time
            if (value.match(/\b(\d{1,2}[:.]\d{2})\b/g)) {

                const newValue = translateDict.hasOwnProperty('.') ? value.replace('.', ':') :
                    translateDict.hasOwnProperty(':') ? value.replace(':', '.') : value;
                result = result.replace(value, this.highlightWord(newValue))

                return
            }
            // check for titles
            if (this.checkForTitle(value)) {
                let newValue = translateDict[value.toLowerCase()]
                newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1)
                result = result.replace(value, this.highlightWord(newValue))
                return
            }
            result = result.replace(value, this.highlightWord(translateDict[value.toLowerCase()]))
        })
        return result
    }

    tranlate(toTranlateString, toTranslateLanguage) {
        let translateDict

        if (toTranslateLanguage == "british-to-american") {
            translateDict = this.britishToAmericanDict()
            translateDict["."] = ":"

        } else if (toTranslateLanguage == "american-to-british") {
            translateDict = this.americanToBritishDict()
            translateDict[":"] = "."

        } else {
            return false
        }
        const tanslateKeys = Object.keys(translateDict)

        const toTranslatWordsArray = this.searchKeyWordsInString(toTranlateString, tanslateKeys, translateDict)

        return this.createReturnMassage(toTranlateString, toTranslatWordsArray, translateDict)
    }
}

module.exports = Translator;