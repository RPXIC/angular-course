const username: string = 'rpxic';

const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const rpxic = new Person(12, 'pepito');
rpxic.age;
