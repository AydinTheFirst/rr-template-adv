import { type Dictionary, t } from "intlayer";

export default {
  content: {
    items: {
      about: t({
        en: "About",
        tr: "Hakkımda",
      }),
      contact: t({
        en: "Contact",
        tr: "İletişim",
      }),
      home: t({
        en: "Home",
        tr: "Ana Sayfa",
      }),
      projects: t({
        en: "Projects",
        tr: "Projeler",
      }),
    },
  },
  key: "navbar",
} satisfies Dictionary;
