// Basic schematic of what an object should look like?


//Decided to make a class format for all questions
//should establish a general format and then get more specific
// for different questions
class Questions {
    constructor(language, category, number, question) {
        // allows for ability to choose different languages
        this.language = language
        // separate two types of questions: behavioral and technical
        this.category = category
        // each question will have a number
        this.number = number
        // the questions that will be asked
        this.question = question
    }
}

class BehavioralQuestions extends Questions {
    constructor(language, category, number, question, example, cars) {
        //an example will be provided for behavior questions
        this.example = example
        // should break down what the cars format is
        // maybe each example breaks itself down into cars
        this.cars = cars
        // pulls from main question class
        super(language, category, number, question)
    }
}

class TechnicalQuestions extends Questions {
    constructor(language, category, number, question, answer, learnResource) {
        //gives the general technical answer
        this.answer = answer
        // an added resource for learning / further reading
        this.learnResource = learnResource
        // pulls properties from question class
        super(language, category, number, question)
    }
}

//Would all questions be stored in a object called banki?
//Test question if a user only wanted:
//      technical questions from banki how
//      would the program fulfill that request ?

//example code

banki = { 'some bank of questions': 'values' }
//would slicing the banki deck into only technical questions
// be the optimum answer?
//should we have 3 banki in total?
//  behavioral_banki
//  technical_banki
//  banki which would contain all banki questions
//      if this solution is selected then
//          the numbers cannot overlap:
//          how is this resolved if more questions are added ?
//          Behavioral questions are more likely to have a fixed amount:
//              give index 0 - 100 technical can take the rest?
//  Do we need any private properties?
//  Possibly: a number system like below:

questionBank = ['t1', 'b1', 't53', 't3', 'b60']
// when sorted equals: [ "b1", "b60", "t1", "t3", "t53" ]
//however it stores 2 pieces of info:

let questionNum = 0
let questionType = ''

questionBank.forEach(function(element){
    questionNum = element.substring(1)
    questionType = element[0]
    console.log(`The question number is: ${questionNum}` +
        '\n' + `The question type is: ${questionType}`)
})

//this maybe easier since you could do a filter on the bank
// would give the total number of questions for each group
//when a query is made users would simply choose a 
//number from a bank that has the number t13 or something idk
