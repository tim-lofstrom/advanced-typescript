import { Book } from "./book";
import { Magazine } from "./magazine";

export function third_example(){

    let test: string | number;

    test = 1;
    test = "ASD";

    console.log(test);


    let test2: Book & Magazine;

    test2 = {
        auth: "ASD",
        publisher: "asd",
        title: "DSA",
        hassa: true
    }

    console.log(test2);

}