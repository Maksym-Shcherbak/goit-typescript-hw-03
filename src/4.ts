class Key {
    private signature: number
    constructor() {
 this.signature = Math.random();
    }
  
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
}

abstract class House {
    door = false;
    key,
    comeIn(person: Person) {
        
    }
    abstract openDoor(key: Key): boolean
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
