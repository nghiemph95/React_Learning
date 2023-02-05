import * as React from 'react';

export interface WidgetProps {
  title: string;
  children: React.ReactNode;
}

export default function Widget({ title, children }: WidgetProps) {
  return (
    <div>
      <p>{title}</p>

      <div>{children}</div>
    </div>
  );
}
