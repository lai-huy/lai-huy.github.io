"use client";

import { ReactNode } from 'react';
import { isMobile } from 'react-device-detect';

interface ContentLayoutProps {
    children: ReactNode;
    isPortfolio?: boolean;
}

export function Layout({ children, isPortfolio = false }: ContentLayoutProps) {
    return (
        <div
            className={isMobile ? "content mobile" : "content desktop"}
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
