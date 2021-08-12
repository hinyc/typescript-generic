//keyof & type lookup system

interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "Hinyc",
  age: 31,
};

type Keys = keyof IPerson;

//-----
// function getProp(obj: IPerson, key: "name" | "age"): string | number {
//   return obj[key];
// }
// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number

// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
//   return obj[key];
// }
//상기 함수에 generic을 적용
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(person, "name");

// person['name']
// function getProp<IPerson, "name">(obj: IPerson, key: "name"): string

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(person, "name", "Hong");
// person["name"] = "Hong"
