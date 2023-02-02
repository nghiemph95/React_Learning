export interface Student {
  name: string;
  age: number;
  isHero?: boolean;
  hobbyList?: string[]; // mảng các string
  // sayHello: () => void; // func ko nhận tham số và cũng ko trả về gì cả
}
