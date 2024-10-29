"use client";
import { COLOR_SCHEME_KEY } from "@/consts";
import {
  createTheme,
  virtualColor,
  isMantineColorScheme,
  MantineColorScheme,
  MantineColorSchemeManager,
} from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily:
    "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  colors: {
    primary: virtualColor({
      name: "primary",
      dark: "deep-blue",
      light: "deep-orange",
    }),
    demo: virtualColor({
      name: "demo",
      dark: "deep-orange",
      light: "deep-blue",
    }),
    "deep-blue": [
      "#e5f3ff",
      "#cde2ff",
      "#9ac2ff",
      "#64a0ff",
      "#3884fe",
      "#1d72fe",
      "#0969ff",
      "#0058e4",
      "#004ecd",
      "#0043b5",
    ],
    "deep-orange": [
      "#fff4e2",
      "#fee8cf",
      "#f7cfa2",
      "#f2b571",
      "#ed9f48",
      "#ea912d",
      "#e98a1d",
      "#cf770f",
      "#b96907",
      "#a15900",
    ],
  },
});

export interface ColorSchemeManagerOptions {
  /** Local storage key used to retrieve value with `localStorage.getItem(key)`, `mantine-color-scheme` by default */
  key?: string;
}

export class ColorSchemeManager implements MantineColorSchemeManager {
  key: string;
  handleStorageEvent: (event: StorageEvent) => void = () => {};

  constructor({ key = COLOR_SCHEME_KEY }: ColorSchemeManagerOptions = {}) {
    this.key = key;
  }

  get(defaultValue: MantineColorScheme) {
    if (typeof window === "undefined") {
      return defaultValue;
    }

    try {
      return (
        (window.localStorage.getItem(this.key) as MantineColorScheme) ||
        defaultValue
      );
    } catch {
      return defaultValue;
    }
  }

  set(value: MantineColorScheme) {
    try {
      window.localStorage.setItem(this.key, value);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(
        "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
        error
      );
    }
  }

  subscribe(onUpdate: (colorScheme: MantineColorScheme) => void) {
    this.unsubscribe();
    this.handleStorageEvent = (event) => {
      if (event.storageArea === window.localStorage && event.key === this.key) {
        isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
      }
    };

    window.addEventListener("storage", this.handleStorageEvent);
  }

  unsubscribe() {
    window.removeEventListener("storage", this.handleStorageEvent);
  }

  clear() {
    window.localStorage.removeItem(this.key);
  }
}
