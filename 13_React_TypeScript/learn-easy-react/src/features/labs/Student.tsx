import * as React from 'react';

export interface StudentProps {
  name?: string;
}

export function Student({ name }: StudentProps) {
  return <div>Student: {name}</div>;
}
