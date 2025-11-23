export class question {
    question = null;
    options = [];
    answer = null;
    pointValue = 1;
    constructor(question,options,answer,pointValue) {
        this.question = question;
        this.options = options;
        this.answer = answer;
        this.pointValue = pointValue;
    }

    isAnswer(selected) {
        return selected == this.answer;
    }
}

export let generateQuestion = (questionsPoll) => {
    let gameQuestions = []
    let workingArray = questionsPoll.slice();
    for (let index = 0; index < 10; index++) {
        let selected = Math.floor(Math.random() * workingArray.length);
        gameQuestions.push(workingArray[selected]);
        workingArray = workingArray.filter((question) => question != workingArray[selected]);
    }
    return gameQuestions;
}