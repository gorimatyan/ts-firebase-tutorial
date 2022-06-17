import React, { useState } from 'react'

type Props = {
    text: string
}
type UserData = {
    id: number;
    name: string;
}
const TestComponet:React.FC<Props> = (props) => {
  const [count,setCount] = useState<number | null>();
  const [user, setUser] = useState<UserData>({id: 1,name: "Johny"})

  return (
    <div>
        <h1>{props.text}</h1>
        <h1>{count}</h1>
    </div>
  )
}

export default TestComponet



// let name = "hello";
// name = "hello";
// let bool: boolean | string = true;
// let array1: number[] = [1,2,3,4];
// let array2 = [0,1,"hello"]

// const NAME:{
//   first: string;
//   last?: string | null
// } = {
//   first: "Jack",
//   last: "Taro"
// }

// const func1 = (x: string,y: string): string => {
//     return x + y;
// }

// type PROFILE = {
//   age: number;
//   password: string;
// }
// type LOGIN = {
//   username: string;
//   city: string;
// }
// type USER = PROFILE & LOGIN;

// const user1 = {
//   age:38,
//   city: "Tokyo",
//   username: "aaa",
//   password: "xxxx"
// };

// // Typeof
// let msg1: string = "Hi";
// let msg2: typeof msg1;

// //enum
// enum OS {
//   Windows,
//   Mac,
//   Linux,
// }
// interface PC {
//   id: number;
//   OSType: OS;
// }
// const PC1: PC= {
//   id:1,
//   OSType: OS.Windows // 0
// }

// //　型の互換性
// const comp1 = "test";
// let comp2: string = comp1;

// // Generics Propsに型を指定する時に使用する -> あらかじめひな形だけ作っておき、インスタンス（オブジェクト）を生成する際に型を決める。
// // interfaceはカスタムできる型？
// type GEN<T> = {
//   item: T;
// }
// type GEN1<T = string> = {  // デフォルトの型を指定ができる
//   item: T;
// }
// type GEN2<T extends string | number> = {  // インスタンスの生成する際の型を制限できる
//   item: T;
// }
// // インスタンス生成。GENのひな形に型を指定する。
// const gen0: GEN<string> = {
//   item: 'hello',
// }
// // 関数でもGenericsは使用可能
// function funcGen<T>(props: T){
//     return { item: props }
// }
