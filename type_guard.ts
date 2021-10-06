import { Book } from "./book";
import { Magazine } from "./magazine";

export function type_guard() {
    
    let device: Book | Magazine;

    device = new Book();
    
    function isBook(b: any): b is Book {
        return (<Book>b).auth !== undefined;
    }
    
    if (device instanceof Book){
        console.log("Yes");
    }
    
    if(isBook(device)){
        console.log("YES");
    }
       

}