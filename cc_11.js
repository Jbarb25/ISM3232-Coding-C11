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