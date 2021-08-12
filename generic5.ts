class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person("Hinyc", 31);
// constructor Person<string, number>(name: string, age: number): Person<string, number>
// 사용한 데이터 타입에 따라 추론을 통한 타입지정.

new Person<string, string>("Hinyc", 99);
// constructor Person<string, string>(name: string, age: string): Person<string, string>
// 99 에 컴파일상 오류가나면서 코딩을 도와줌
