
function LoggerTester(str: string){
    return function(c: Function){
        console.log(str);
        console.log(c);
    }
}


/**
 * Example on adding html to page by using a decorator
 */
function WithTemplate(template: string, hookId: string){
    return function(_: Function){
        const hookEl = document.getElementById(hookId)
        if(hookEl){
            hookEl.innerHTML = template;
        }
    }
}

@WithTemplate('<h1>Person</h1>','app')
@LoggerTester('PERSON - LOGGER')
export class PersonTester {
    name = "Max"
    constructor(){
        console.log("create");
    }
}