import { Book } from "./book";

declare module './book' {
    interface Book {
        hassa: boolean
    }
}
