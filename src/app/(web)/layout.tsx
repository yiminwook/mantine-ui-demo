"use client";
import AppHeader from "@/components/AppHeader";
import AppNav from "@/components/AppNav";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="md"
    >
      <AppHeader isShowNav={opened} toggleNav={toggle} />
      <AppNav />
      {children}
    </AppShell>
  );
}
