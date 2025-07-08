"use client";

import { ReactNode } from 'react';

interface ContentLayoutProps {
  children: ReactNode;
  isPortfolio?: boolean;
}

export function Layout({ children, isPortfolio = false }: ContentLayoutProps) {
  return (
    <div
      className="content"
      style={{
        minHeight: isPortfolio ? '100vh' : 'auto',
        height: isPortfolio ? 'auto' : '90vh',
        overflowY: isPortfolio ? 'auto' : 'hidden'
      }}
    >
      {children}
    </div>
  );
}
