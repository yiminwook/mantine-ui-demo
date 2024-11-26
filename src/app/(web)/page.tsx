"use client";
import { AppShellMain, Space, TextInput } from "@mantine/core";
import Editor from "@/components/Editor";
import { useColorScheme } from "@mantine/hooks";
import { useEffect, useState } from "react";
import Banner from "./Banner";

const DUMMY_DATA = [
  {
    id: "a1",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplu9banner.8acf9612.png&w=1920&q=75",
    alt: "plu9",
    text: "ANNOUNCEMENT_2",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "b1",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblockmoonieoBannner.5962d0e0.png&w=1920&q=75",
    alt: "ait announcement",
    text: "ANNOUNCEMENT_1",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "c1",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaitBanner.66e31911.png&w=1920&q=75",
    alt: "BTBbannerImg",
    text: "ANNOUNCEMENT_4",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "d1",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBTBbanner.be31f21d.png&w=1920&q=75",
    alt: "referralBanner",
    text: "ANNOUNCEMENT_3",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "a2",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplu9banner.8acf9612.png&w=1920&q=75",
    alt: "plu9",
    text: "ANNOUNCEMENT_2",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "b2",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblockmoonieoBannner.5962d0e0.png&w=1920&q=75",
    alt: "ait announcement",
    text: "ANNOUNCEMENT_1",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "c2",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaitBanner.66e31911.png&w=1920&q=75",
    alt: "BTBbannerImg",
    text: "ANNOUNCEMENT_4",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "d2",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBTBbanner.be31f21d.png&w=1920&q=75",
    alt: "referralBanner",
    text: "ANNOUNCEMENT_3",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "a3",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplu9banner.8acf9612.png&w=1920&q=75",
    alt: "plu9",
    text: "ANNOUNCEMENT_2",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "b3",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblockmoonieoBannner.5962d0e0.png&w=1920&q=75",
    alt: "ait announcement",
    text: "ANNOUNCEMENT_1",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "c3",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaitBanner.66e31911.png&w=1920&q=75",
    alt: "BTBbannerImg",
    text: "ANNOUNCEMENT_4",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "d3",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBTBbanner.be31f21d.png&w=1920&q=75",
    alt: "referralBanner",
    text: "ANNOUNCEMENT_3",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "a4",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplu9banner.8acf9612.png&w=1920&q=75",
    alt: "plu9",
    text: "ANNOUNCEMENT_2",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "b4",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblockmoonieoBannner.5962d0e0.png&w=1920&q=75",
    alt: "ait announcement",
    text: "ANNOUNCEMENT_1",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "c4",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaitBanner.66e31911.png&w=1920&q=75",
    alt: "BTBbannerImg",
    text: "ANNOUNCEMENT_4",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "d4",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBTBbanner.be31f21d.png&w=1920&q=75",
    alt: "referralBanner",
    text: "ANNOUNCEMENT_3",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "a5",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplu9banner.8acf9612.png&w=1920&q=75",
    alt: "plu9",
    text: "ANNOUNCEMENT_2",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "b5",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblockmoonieoBannner.5962d0e0.png&w=1920&q=75",
    alt: "ait announcement",
    text: "ANNOUNCEMENT_1",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
  {
    id: "c5",
    imgSrc:
      "https://vexk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaitBanner.66e31911.png&w=1920&q=75",
    alt: "BTBbannerImg",
    text: "ANNOUNCEMENT_4",
    url: "https://vexk.zendesk.com/hc/en-us/articles/11236229144591",
  },
];

export default function Home() {
  const [cookie, setCookie] = useState("");
  const color = useColorScheme();
  console.log(color);

  useEffect(() => {
    setCookie(document.cookie);
  }, []);

  return (
    <AppShellMain>
      <Banner data={DUMMY_DATA} />
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
