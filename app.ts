import { third_example } from "./inter_union_types";
import { mixin_example } from "./mixin_example";
import { spread_examples } from "./spread_examples";
import { tuple_examples } from "./tuple_examples";
import { poly_this_type } from "./poly_this_type";
import { declaration_merge } from "./declaration_merge";
import { type_guard } from "./type_guard";
import './number_extension';
import { Magazine } from "./magazine";
import { Book } from "./book";
import { Person } from "./decorator_example";
import { PersonTester } from "./decorator_example2";

//spread_examples();

//tuple_examples();

//third_example();

//mixin_example();

//poly_this_type();

//declaration_merge();

//type_guard();

const p = new PersonTester();

console.log(p);
