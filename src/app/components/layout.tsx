"use client";

export function ContentLayout({ children, isPortfolio = false }: { children: React.ReactNode; isPortfolio?: boolean }) {
  return (
    <div 
      className={`content ${isPortfolio ? 'portfolio-scroll' : 'home-scroll'}`} 
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
