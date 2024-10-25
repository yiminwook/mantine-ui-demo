"use client";
import { theme } from "@/styles/theme";
import { AppShellHeader, Burger, Button, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type AppHeaderProps = {
  isShowNav: boolean;
  toggleNav: () => void;
};

export default function AppHeader({ isShowNav, toggleNav }: AppHeaderProps) {
  // const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  return (
    <AppShellHeader>
      <Flex
        mx={8}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Flex style={{ alignItems: "center" }}>
          <Burger opened={false} onClick={toggleNav} size="sm" mr={4} />
          <Text component="h1">Logo</Text>
        </Flex>
        <Button variant="light" size="sm">
          검색
        </Button>
      </Flex>
    </AppShellHeader>
  );
}
