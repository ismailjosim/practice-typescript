"use strict";
const personInfo = {
    name: 'montu mia',
    age: 52,
    isMarried: false,
    salary: 32000,
};
// here if we do not specify any type it will infer the value and take all data types by itself.
const user = {
    name: 'ismail',
    age: 25,
    isMarried: false,
    isWorking: true,
};
//In any situation if we need to use any specific type of value we can use this way. it also called literal type
const userInfo = {
    company: 'Programming Hero',
    age: 25,
    isMarried: false,
    isWorking: true,
};
//if we don’t want to change any properties from object we can use readonly method:
const secondUser = {
    name: 'Programming Hero',
    age: 25,
    isMarried: false,
    isWorking: true,
};
