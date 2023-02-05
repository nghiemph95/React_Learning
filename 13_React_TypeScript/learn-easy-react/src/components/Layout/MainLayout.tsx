import * as React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
}
