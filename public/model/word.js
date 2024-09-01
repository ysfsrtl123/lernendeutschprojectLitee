const words = [
    {id: 1 , q:'schreiben' , answer: 'yazmak'},
    {id: 2 , q:'nur' , answer: 'sadece'}
];
    

class Word {
    constructor(id, q, answer) {
        this.id = Math.floor(Math.random() * 99 + 1); 
        this.q = q;
        this.answer = answer;
    }

    static getAllWords() {
        return words;
    }

    addWord() {
        words.push(this);
    }

    getWordById(id) {
        return words.find(word => word.id === id);
    }

    updateWord(id, updatedWord) {
        const index = words.findIndex(word => word.id === id);
        if (index !== -1) {
            words[index] = { ...words[index], ...updatedWord };
        }
    }

    deleteWord(id) {
        const index = words.findIndex(word => word.id === id);
        if (index !== -1) {
            words.splice(index, 1);
        }
    }
}

module.exports = { Word, words };
