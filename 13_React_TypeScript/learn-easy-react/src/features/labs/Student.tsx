import * as React from 'react';

export interface StudentProps {
  name?: string;
  age: number;
  isHero?: boolean;
  hobbyList: string[]; // mảng các string
  sayHello: () => void; // func ko nhận tham số và cũng ko trả về gì cả
}

export function Student({ name = '', isHero = false }: StudentProps) {
  return (
    <div>
      Student: {name} {isHero ? 'hero' : 'no-hero'}
    </div>
  );
}
