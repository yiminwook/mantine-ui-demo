"use client";
import { AppShellMain, Space, TextInput } from "@mantine/core";
import Editor from "@/components/Editor";
import { useColorScheme } from "@mantine/hooks";
import { useEffect, useState } from "react";

export default function Home() {
  const [cookie, setCookie] = useState("");
  const color = useColorScheme();
  console.log(color);

  useEffect(() => {
    setCookie(document.cookie);
  }, []);

  return (
    <AppShellMain>
      <div>{cookie}</div>
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
