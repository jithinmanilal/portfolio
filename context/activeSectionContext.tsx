"use client";
import React, { createContext, useState, ReactNode, useContext } from 'react';
import type { SectionName } from '@/lib/types';


type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick:number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

type ActiveSectionProviderProps = {
  children: ReactNode;
};

const ActiveSectionProvider: React.FC<ActiveSectionProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  const contextValue: ActiveSectionContextType = {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
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