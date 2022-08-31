class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
	 	this.pagesCount = pagesCount;
	  	this.state = 100;
	  	this.type = null;
	}
	fix () {
		this.state = this.state1 * 1.5;
	}
	set state (healt) {
		if (healt <= 0) {
			this.state1 = 0;
		} else if (healt > 100) {
			this.state1 = 100;
		} else {
			this.state1 = healt;
		}
	}
	get state() {
		return this.state1;
	}
}



class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'magazine';
        this.author = author;
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'novel';
    }
}

class FantasticBook extends Book  {
    constructor (name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'fantastic';
    }
}

class DetectiveBook extends Book  {
    constructor (name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'detective';
    }
}


class Library {
    constructor (name, books) {
        this.name = name;
        this.books = [];
    }


    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        } 
    }

    findBookBy(type, value) {
        let thatBook = this.books.find(key => key[type] === value);
        return thatBook ?? null;
    }

    giveBookByName(bookName) {
        let thatBook = this.books.find(key => key.name === bookName);
        
        if (thatBook != undefined) {
            this.books.splice(this.books.findIndex(key => key.name === bookName), 1);
            return thatBook;
        } else {
            return null;
        }
    }
}

const leninsLibary = new Library ("Библеотека имени Ленина")
const hat = new DetectiveBook ("HZ", "обстоятельства зонта", 666, 988 );
leninsLibary.addBook(new DetectiveBook("HZ", "Zona", 566, 9881 ));
leninsLibary.addBook(new NovelBook ("the Boyz", "Приключения Тикитикитики", 1919, 1822));
leninsLibary.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
console.log(leninsLibary.findBookBy("releaseDate", 1919).name);
leninsLibary.giveBookByName("обстоятельства зонта");
hat.state = 40;
hat.fix();
leninsLibary.addBook(hat);
console.log(leninsLibary)