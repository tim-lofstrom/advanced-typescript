import { getBooks } from "./manager";

let books = getBooks();

function spreadExample() {
    let medals = ["Gold", "Silver", "Bronze"];
    let [first, second, third] = medals;
    console.log(second);
}

function descructureTest([b1, b2, ...others]: string[]) {
    console.log(b1);
    console.log(b2);
    console.log(others);
}

descructureTest(["Book 1", "Book 2", "Book Other 1", "Book Other 2"]);
spreadExample();

let { title: booktitle, auth: bookauth } = books[0];
console.log(booktitle);
console.log(bookauth);
