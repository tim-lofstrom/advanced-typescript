class Library {

    check(): this {
        console.log("check");
        return this;
    }

}

class Building extends Library {
    clean(): this {
        console.log("clean");
        return this;
    }
}

export function poly_this_type() {
    let book = new Building();
    book.check().clean();
}
