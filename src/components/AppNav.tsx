import { AppShellNavbar, NavLink } from "@mantine/core";
import { IconGauge, IconFingerprint } from "@tabler/icons-react";
import Link from "next/link";

export default function AppNav() {
  return (
    <AppShellNavbar p="sm">
      <NavLink
        href="#required-for-focus"
        label="First parent link"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink
          component={Link}
          href="#required-for-focus"
          label="First child link"
        />
        <NavLink
          component={Link}
          label="Second child link"
          href="#required-for-focus"
        />
        <NavLink
          label="Nested parent link"
          childrenOffset={28}
          href="#required-for-focus"
        >
          <NavLink
            component={Link}
            label="First child link"
            href="#required-for-focus"
          />
          <NavLink
            component={Link}
            label="Second child link"
            href="#required-for-focus"
          />
          <NavLink
            component={Link}
            label="Third child link"
            href="#required-for-focus"
          />
        </NavLink>
      </NavLink>
      <NavLink
        href="#required-for-focus"
        label="Second parent link"
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink
          component={Link}
          label="First child link"
          href="#required-for-focus"
        />
        <NavLink
          component={Link}
          label="Second child link"
          href="#required-for-focus"
        />
        <NavLink
          component={Link}
          label="Third child link"
          href="#required-for-focus"
        />
      </NavLink>
    </AppShellNavbar>
  );
}
