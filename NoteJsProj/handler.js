const utils = require("./utilities.js")

const handleQuestions = function (question) {
    if (question.type == utils.MONEY) {
        console.log( "how does the social construction of money work?")
    }
    else if (question.type == utils.LIFE) {
        console.log("how does the social construction of money work?")
        
    }
    else if (question.type == utils.FREEWILL) {
       console.log("Is free will real or just an illusion?") 
    }
    else {
        console.log('nothing matches')
    }
}
module.exports.handleQuestions = handleQuestions