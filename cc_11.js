//Task 1: Creating a Book Class
class Book {   
    constructor(title, author, isbn, copies){   //Create a Book class with the parameters of the title, author, isbn, and copies of the books
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;}

    getDetails(){  //establish a method that sorts and returns the details of the book by plugging in the parameters when the book is added
        return (`Book Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Number of Copies: ${this.copies}`);}
    
    updateCopies(quantity){  //establish a method that updates the number of copies for a book 
        if (this.copies > quantity){  //if the number of copies avaible covers the quanitity requested do the following
            return (this.copies += quantity);} //return the upated copies number after adding or subtracting the book quantities requested or brought
        else {  //is the number of copies does not cover the quantity
            return (`Not Enough Copies Available`);} //return the error message
    }
}
  //Add a new book with the following information for the parameters
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); //get the details of the book requested 

book1.updateCopies(-1); //update the copies number of the book to subtract 1 copy
console.log(book1.getDetails());  //return the updated details of the book requested 


//Task 2: Creating a Borrower Class
class Borrower {  //Create a class Borrower to store information about books checked out or returned
    constructor(name, borrowerId, borrowedBooks){
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];}

    borrowBook(book){
        this.borrowedBooks.push(book); //method that adds the book plugged in when called to the borrowered books array
        console.log(`${this.name} checked out ${book}`);}
        
    returnBook(book){
        this.borrowedBooks.pop(book);  //mehtod that removes the book plugged in when called from the array meaning it is returned
        console.log(`${book} was returned by ${this.name}`);}
}

//Establish a new borrower with a book they are checking out 
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby"); //assign the book they are checking out to their name
console.log(borrower1.borrowedBooks);  //print the book in the array

borrower1.returnBook("The Great Gatsby");  //remove the book from the array using the method
console.log(borrower1.borrowedBooks); //print an updated array list 


//Task 3: Creating a library class
class Library {
    constructor(books, borrowers){  //create a libabry class that stores the list of books in the library and the list of borrowers for the books
        this.books = [];
        this.borrowers = [];}

    addBook(book){
        return this.books.push(book);}  //add a method that adds a book to the library array of books

    listBooks(){
        return this.books.forEach(book => console.log(book.getDetails()));} //print the updated information for the updated list of books in the library 
}

//Estabish a new library
const library = new Library();
library.addBook(book1);  //add a new book to the array of books in the library
library.listBooks();  //print the updated information of each book in the library