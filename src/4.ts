class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, public name: string) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  tenants: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }
  comeIn(person: Person) {
    if (!this.door) {
      return;
    }
    this.tenants.push(person);
  }
  abstract openDoor(key: Key, name: string): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key, name: string): void {
    if (this.key.getSignature() === key.getSignature()) {
      console.log(`Welcome, ${name}`);

      this.door = true;
    } else {
      console.log("Go away");
    }
  }
}

const key = new Key();
console.log(key);
const key2 = new Key();
const house = new MyHouse(key);
console.log(house);
const person = new Person(key, "John");
const person2 = new Person(key2, "Andy");
console.log(person);
house.openDoor(person.getKey(), person.name);
house.openDoor(person2.getKey(), person.name);
house.comeIn(person);
console.log(house);

export {};
