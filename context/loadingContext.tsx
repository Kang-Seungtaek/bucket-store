'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type LoadingContextType = {
  loading: boolean;
  openLoading: () => void;
  closeLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingContextProvider = ({ children }: { children: ReactNode }) => {
  const [_loading, setLoading] = useState<boolean>(true);

  const loading = useMemo(() => _loading, [_loading]);

  const openLoading = () => setLoading(true);
  const closeLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{
      loading, openLoading, closeLoading,
    }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('');
  }
  return context;
};
