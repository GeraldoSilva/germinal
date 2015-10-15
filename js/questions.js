var Questions = {
    list: {
        "procuro uma oportunidade": 1,
        "nada": 2,
        "dilma": 3,
        "": 4,
        "?": 7
    },
    isExists: function(question) {
        question = question.toLowerCase();
        return (Questions.list[question]);
    },
    getIndex: function(question) {
        question = question.toLowerCase();
        if (Questions.isExists(question)) {
            return Questions.list[question];
        }
        return false;
    }
}
