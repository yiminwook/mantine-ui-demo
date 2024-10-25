"use client";
import AppHeader from "@/components/AppHeader";
import AppNav from "@/components/AppNav";
import { theme } from "@/styles/theme";
import { AppShell } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  const [desktopOpened, { toggle: desktopToggle }] = useDisclosure(true);
  const [mobileOpened, { toggle: mobileToggle }] = useDisclosure(false);

  const toggle = () => {
    if (isMobile) {
      mobileToggle();
    } else {
      desktopToggle();
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppHeader
        isShowNav={isMobile ? mobileOpened : desktopOpened}
        toggleNav={toggle}
      />
      <AppNav />
      {children}
    </AppShell>
  );
}
