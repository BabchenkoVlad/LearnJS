// class
// позволяют создавать прототипы для объектов
// на основании прототипов создаются экземпляры
// экземпляры могут иметь собственные свойства и методы
// экземпляры наследуют свойства и методы прототипов
// constructor вызывается когда надо создать новый клас

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty - 0
    }

    upvote() {
        this.votesQty =+ 1
    }
    // static не наследуется экземплярами класа
    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

Comment.mergeComments('First comment.', 'Second comment.')

// создание экземпляра класса, может быть много экземпляров
const firstComment = new Comment('First comment')

// проверка на принадлежности
//firstComment instanceof Comment // true
//firstComment instanceof Object // true

// вызом методов. можем вызывать многократно
firstComment.upvote()
console.log(firstComment.votesQty)
firstComment.upvote()
console.log(firstComment.votesQty)




