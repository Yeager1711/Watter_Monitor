'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ApiContext = createContext<undefined>(undefined);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
    }, []);

    return <ApiContext.Provider value={undefined}>{isReady ? children : null}</ApiContext.Provider>;
};

export function useApi() {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
}
