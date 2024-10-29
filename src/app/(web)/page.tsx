"use client";
import { AppShellMain, Space, TextInput } from "@mantine/core";
import Editor from "@/components/Editor";
import { useColorScheme } from "@mantine/hooks";

export default function Home() {
  const color = useColorScheme();
  console.log(color);
  return (
    <AppShellMain>
      <form>
        <TextInput label="First name" />
        <TextInput label="Last name" mt="md" />
        <TextInput label="Email" mt="md" />
      </form>
      <Space h="lg" />
      <Editor />
    </AppShellMain>
  );
}
