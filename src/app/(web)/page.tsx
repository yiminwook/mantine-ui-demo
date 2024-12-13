"use client";
import { AppShellMain, Space, TextInput } from "@mantine/core";
import Editor from "@/components/Editor";
import { useColorScheme } from "@mantine/hooks";
import { useEffect, useState } from "react";
import Banner from "./Banner";
export default function Home() {
  const [cookie, setCookie] = useState("");
  const color = useColorScheme();
  console.log(color);

  useEffect(() => {
    setCookie(document.cookie);
  }, []);

  useEffect(() => {
    //SSE연결 로직
    const eventSource = new EventSource(
      "https://stockdatar.finup.co.kr/api/v1/sse?types=3&app=Finance"
    );

    eventSource.addEventListener("theme", (e) => {
      //'new_thread' 이벤트가 오면 할 동작
      console.log("theme", e.data);
    });

    eventSource.addEventListener("price", (e) => {
      //'new_thread' 이벤트가 오면 할 동작
      console.log("price", e.data);
    });

    eventSource.onerror = () => {
      //에러 발생시 할 동작
      eventSource.close(); //연결 끊기
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <AppShellMain>
      <form>
        <TextInput label="First name" />
        <TextInput label="Last name" mt="md" />
        <TextInput label="Email" mt="md" />
      </form>

      <Space h="lg" />
      {/* <Editor /> */}
    </AppShellMain>
  );
}
