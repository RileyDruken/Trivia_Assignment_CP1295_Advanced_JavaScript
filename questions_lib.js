export class question {
    question = null;
    options = [];
    answer = null;
    pointValue = null;
    constructor(question,options,answer,pointValue) {
        this.question = question;
        this.options = options;
        this.answer = answer;
        this.pointValue = pointValue;
    }
}