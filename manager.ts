import { Book } from "./book";

export function getBooks(): Book[] {
    return [
        { title: "Title", auth: "Auth" },
        { title: "Title 2", auth: "Auth 2" }
    ]
}