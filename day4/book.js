//You are developing a Library Management System for a local library. The system will manage various kinds of books, including Physical Books and E-Books. Both types of books share common properties such as title, author, and year of publication, but they also have unique characteristics.
//For instance:
//Physical Books have a shelfNumber.
//E-Books have a fileSize and format (e.g., PDF, EPUB).
//You are tasked with implementing this system using prototypal inheritance in JavaScript, so that common properties and methods are shared between the different book types, while the specific properties and methods are handled separately.

//Task.1.Create a base object called Book, which contains properties such as title,author, and year, and a method called getSummary()that returns a string summarizing the book's details.


function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Method to summarize book details
Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
};


/*task2
//Use prototypal inheritanceto create a PhysicalBook object and an EBook object that inherit fromBook
. Add specific properties (shelfNumber for PhysicalBook and fileSize/formatforEBook).*/

function PhysicalBook(title, author, year, shelfNumber) {
    // Call the parent constructor
    Book.call(this, title, author, year);
    this.shelfNumber = shelfNumber;
}

function EBook(title, author, year, fileSize, format) {
    // Call the parent constructor
    Book.call(this, title, author, year);
    this.fileSize = fileSize; 
    this.format = format; 
}
/*task3
Override the getSummary() method in both PhysicalBook and EBook
to include the additional properties (e.g., shelf number, file size, and format).*/

// Inherit from Book
PhysicalBook.prototype = Object.create(Book.prototype);
PhysicalBook.prototype.constructor = PhysicalBook;

// Override getSummary for PhysicalBook
PhysicalBook.prototype.getSummary = function() {
    return `${Book.prototype.getSummary.call(this)} Shelf Number: ${this.shelfNumber}.`;
};

// Inherit from Book
EBook.prototype = Object.create(Book.prototype);
EBook.prototype.constructor = EBook;

// Override getSummary for EBook
EBook.prototype.getSummary = function() {
    return `${Book.prototype.getSummary.call(this)} File Size: ${this.fileSize}MB, Format: ${this.format}.`;
};

/*task 4
Create a few instances of PhysicalBook and EBook , and call the getSummary()
 method on each to verify that inheritance is working properly.*/

const physicalBook1 = new PhysicalBook('Mind set', 'Carol s', 1914, 'A1');
console.log(physicalBook1.getSummary());

const physicalBook2 = new PhysicalBook('Think and Go rich', 'Nepoleon Hill', 1725, 'A1');
console.log(physicalBook2.getSummary());

const eBook1 = new EBook('AtomicHabits', 'James Clear', 1048, 9.4, 'PDF');
console.log(eBook1.getSummary());

const eBook2 = new EBook('I will teach you TO Be Rich', 'Ramit Sethi', 2011, 8.1, 'PDF');
console.log(eBook2.getSummary());
