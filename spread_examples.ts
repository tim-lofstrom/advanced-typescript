function first_example() {
    let bookIds = [10, 20];
    let allBookIds = [1, 2, 3, ...bookIds];
    console.log(allBookIds);
}

function second_example() {
    let bookIds = [10, 20];
    let allBookIds = [1, 2, 3];
    allBookIds.push(...bookIds);
    console.log(allBookIds);
}

export function spread_examples() {
    second_example();
}