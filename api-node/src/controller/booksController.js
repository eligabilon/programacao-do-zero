import books from "../models/Books.js";

class BookController {

    static findBooks = (req, res) => {
        books.find()
        .populate('author')
        .exec((err, books)=>{
            res.status(200).send(books);
        })
    }

    static findBookId = (req, res) => {
        let id = req.params.id;
        
        books.findById(id)
        .populate('author', 'name')
        .exec((err, books) => {
            if(err){
                res.status(400).send({message: `${err.message} - nao encontrou o livro`})
            } else {
                res.status(200).send(books)
            }       
        })        
    }

    static addBook = (req, res) => {
        let book = new books(req.body);

        book.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static updateBook = (req, res) => {
        let id = req.params.id;
        
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Book atualizado'})
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar o livro`})
            }
        })       
    }

    static deleteBook = (req, res) => {
        let id = req.params.id;
        
        books.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Book removido'})
            } else {
                res.status(500).send({message: `${err.message} - falha ao remover o livro`})
            }
        })       
    }

    static findBookForPublisher= (req, res) => {
        const publisher = req.query.publisher;
        books.find({'publisher': publisher})
        .populate('author', 'name')
        .exec({}, (err, books) => {
            res.status(200).send(books);
        })    
    }

}

export default BookController;