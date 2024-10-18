"use client";

import { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";
import { Session } from "inspector/promises";

interface ProviderProps {
  children: ReactNode;
  session: Session | null;
}

const Provider = ({ children, session }: ProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
