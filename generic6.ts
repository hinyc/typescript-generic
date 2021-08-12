// generic with extends

class PersonExtends<T extends string | number> {
  // extends를 통해 T의 타입을 제한할수 있음.
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Hinyc");

new PersonExtends("31");

new PersonExtends(true);
// <T extends string | number> 임으로, boolean 은 error 발생.

// 타입은 항상 가장작은 범위로 지정해주는것이 사용자입장에서 더좋은 가이드가 된다.
