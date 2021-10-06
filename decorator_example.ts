
function Logger(constructor: Function){
    console.log(constructor)
}

@Logger
export class Person {
    name = "Max"
    constructor(){
        console.log("create");
    }
}