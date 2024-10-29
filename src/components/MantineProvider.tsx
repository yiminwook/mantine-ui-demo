"use client";
import { ColorSchemeManager, theme } from "@/styles/theme";
import { MantineProvider as Provider } from "@mantine/core";

const manager = new ColorSchemeManager({
  key: "my-app-color-scheme",
});

interface MantineProviderProps {
  children: React.ReactNode;
  defaultColorScheme: "light" | "dark";
}

export default function MantineProvider({
  children,
  defaultColorScheme,
}: MantineProviderProps) {
  return (
    <Provider
      theme={theme}
      colorSchemeManager={manager}
      defaultColorScheme={defaultColorScheme}
    >
      {children}
    </Provider>
  );
}
