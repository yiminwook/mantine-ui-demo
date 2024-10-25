"use client";
import { AppShellMain, Space, TextInput } from "@mantine/core";
import Editor from "@/components/Editor";

export default function Home() {
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
