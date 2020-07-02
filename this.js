console.log(this); //window

function f1() {
  return this;
}

console.log(f1()); // window

function f2() {
  'use strict';
  return this;
}


console.log(f2()); // undefined


class Ex {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  one() {}
  two() {}
  static three() {}
}

new Ex(); // ['constructor', 'first', 'second']


(()=>{
  console.log(this);
})();

