'use client'
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('theme') as 'light' | 'dark') ||
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
        return 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded border border-gray-400 bg-white dark:bg-gray-800 dark:text-white text-gray-800 transition-colors"
            aria-label="Toggle dark/light mode"
        >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
} 