"use client";
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { links } from '@/lib/data';

type SectionName = typeof links[number]["name"];

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

type ActiveSectionProviderProps = {
  children: ReactNode;
};

const ActiveSectionProvider: React.FC<ActiveSectionProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  const contextValue: ActiveSectionContextType = {
    activeSection,
    setActiveSection,
  };

  return (
    <ActiveSectionContext.Provider value={contextValue}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;


export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
        "useActiveSectionContext must be used within ActiveSectionProvider"
    );
  }
  return context;
}