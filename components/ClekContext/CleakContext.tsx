"use client";
import { ClerkProvider } from "@clerk/nextjs";

const ClerkContext = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default ClerkContext;
