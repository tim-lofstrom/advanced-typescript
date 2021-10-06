/**
 * Can merge
 * - interface
 * - enum
 * - namespace
 * - namespace with class
 * - namespace with function
 * - namespace with enum
 * 
 * Can now merge
 * - class with class (use mixin instead)
 */

import { Book } from "./book";
import "./book_extension";

/**
 * Interface merge
 */

export function declaration_merge() {

    let a: Book;

    a = new Book();
    a.hassa = false;

    console.log(a);
    


}