var Questions = {
    list: {
        "procuro uma oportunidade": 0,
        "nada": 1,
        "dilma": 2,
        "": 3,
        "?": 4,
        "burgo": 5,
        "sim": 6
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
