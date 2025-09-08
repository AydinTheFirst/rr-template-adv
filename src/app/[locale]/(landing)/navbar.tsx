import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { getLocalizedUrl } from "intlayer";
import React from "react";
import { useIntlayer, useLocale } from "react-intlayer";

import LocaleSwitcher from "~/components/locale-switcher";
import ThemeSwitcher from "~/components/theme-switcher";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const content = useIntlayer("navbar");
  const { locale } = useLocale();

  const menuItems = [
    { href: "/", label: content.items.home },
    { href: "/about", label: content.items.about },
    { href: "/projects", label: content.items.projects },
    { href: "/contact", label: content.items.contact },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={getLocalizedUrl(item.href, locale)}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link color="foreground" href={getLocalizedUrl(item.href, locale)}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
