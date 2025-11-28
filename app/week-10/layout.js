"use client";

import { UserAuthContextProvider } from "./_utils/auth-context";

export default function Layout({ children }) {
  return (
    <UserAuthContextProvider>
      {children}
    </UserAuthContextProvider>
  );
}
