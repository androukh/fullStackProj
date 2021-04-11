const handler = require("./handler.js")
const utils = require("./utilities.js")

let question1 = {
    text: "How do I get more money?",
    type: utils.MONEY
}

let question2 = {
    text: "How much money do I need?",
    type: utils.LIFE
}

let question3 = {
    text: "To be free or not to be?",
    type: utils.FREEWILL
}

handler.handleQuestions(question1) //should print "how does the social construction of money work?"
handler.handleQuestions(question2) //should print "how does the social construction of money work?"
handler.handleQuestions(question3) //should print "Is free will real or just an illusion?"