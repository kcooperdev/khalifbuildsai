"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface EmailContextType {
  email: string | null;
  hasEmail: boolean;
  captureEmail: (email: string) => void;
  clearEmail: () => void;
}

const EmailContext = createContext<EmailContextType>({
  email: null,
  hasEmail: false,
  captureEmail: () => {},
  clearEmail: () => {},
});

const STORAGE_KEY = "khalif_captured_email";

export function EmailProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setEmail(stored);
  }, []);

  const captureEmail = (newEmail: string) => {
    localStorage.setItem(STORAGE_KEY, newEmail);
    setEmail(newEmail);
  };

  const clearEmail = () => {
    localStorage.removeItem(STORAGE_KEY);
    setEmail(null);
  };

  return (
    <EmailContext.Provider value={{ email, hasEmail: !!email, captureEmail, clearEmail }}>
      {children}
    </EmailContext.Provider>
  );
}

export function useEmail() {
  return useContext(EmailContext);
}
