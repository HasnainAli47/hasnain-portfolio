"use client";
import { createContext, useContext, useState } from "react";
import ContactModal from "./ContactModal";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });

export function useContact() { return useContext(Ctx); }

export default function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Ctx.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <ContactModal open={isOpen} onClose={() => setIsOpen(false)} />
    </Ctx.Provider>
  );
}
