"use client";

import { AcademyProvider } from "@/lib/academy-context";
import { EmailProvider } from "@/lib/email-context";

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EmailProvider>
      <AcademyProvider>{children}</AcademyProvider>
    </EmailProvider>
  );
}
