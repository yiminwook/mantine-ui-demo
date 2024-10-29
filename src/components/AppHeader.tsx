"use client";
import { theme } from "@/styles/theme";
import {
  AppShellHeader,
  Avatar,
  Burger,
  Button,
  Flex,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import style from "./appHeader.module.scss";

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
        style={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          color: theme.colors.demo[1],
        })}
      >
        <Flex style={{ alignItems: "center" }}>
          <Burger opened={false} onClick={toggleNav} size="sm" mr={4} />
          <Text component="h1">Logo</Text>
        </Flex>
        <UnstyledButton variant="light" size="sm" className={style.userButton}>
          <Text
            mr={8}
            style={{
              lineHeight: "1.05em",
            }}
          >
            닉네임
          </Text>
          <Avatar
            size="sm"
            radius="xl"
            src="	https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
          />
        </UnstyledButton>
      </Flex>
    </AppShellHeader>
  );
}
