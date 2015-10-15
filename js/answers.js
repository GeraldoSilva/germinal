var Answers = {
    list : [
        "Serio?*Nao me diga!!!",
        "Voce e um peixe?",
        "Grrrrrr",
        "??????????",
        "????????????????????"
    ],
    getAnswer: function(questionId) {
        if (Answers.isExists(questionId)) {
            return Answers.list[questionId];
        }
        return "I did not understand what you said";
    },
    isExists: function(questionId) {
        return (Answers.list[questionId]);
    }
}