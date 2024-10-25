"use client";
import { AppShellHeader, Burger, Button, Flex, Text } from "@mantine/core";

type AppHeaderProps = {
  isShowNav: boolean;
  toggleNav: () => void;
};

export default function AppHeader({ isShowNav, toggleNav }: AppHeaderProps) {
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
          <Burger opened={isShowNav} onClick={toggleNav} size="sm" mr={4} />
          <Text component="h1">Logo</Text>
        </Flex>
        <Button variant="light" size="sm">
          검색
        </Button>
      </Flex>
    </AppShellHeader>
  );
}
