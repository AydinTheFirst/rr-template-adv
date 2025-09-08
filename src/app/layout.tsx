import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { Outlet } from "react-router";

import useLocaleNavigate from "~/hooks/useLocaleNavigate";
import { composeProviders } from "~/utils/compose-providers";

const Providers = composeProviders(
  ({ children }) => <ThemeProvider attribute="class">{children}</ThemeProvider>,
  ({ children }) => {
    const navigate = useLocaleNavigate();
    return <HeroUIProvider navigate={navigate}>{children}</HeroUIProvider>;
  },
);

export default function RootLayout() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}
