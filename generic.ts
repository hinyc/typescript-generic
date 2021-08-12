//generic이 1개인 경우
function helloBasic<T>(message: T): T {
  return message;
}

helloBasic<string>("Hinyc");
// function helloBasic<string>(message: string): string
// T를 지정해서 type을 지정해서 사용할 수 있음.

helloBasic(36);
//function helloBasic<36>(message: 36): 36
// 추론을 통해 T가 지정됨.

////  generic이 2개 이상인 경우

function helloBasic2<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic2<string, number>("Hinyc", 31);
// function helloBasic2<string, number>(message: string, comment: number): string
// T, U를 지정해서 type을 지정해서 사용할 수 있음.

helloBasic2(36, "apple");
// function helloBasic2<36, string>(message: 36, comment: string): 36
// 추론을 통해 T와 U가 지정됨.
