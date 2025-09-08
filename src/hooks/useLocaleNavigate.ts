import { getLocalizedUrl } from "intlayer";
import { useLocale } from "react-intlayer";
// eslint-disable-next-line no-restricted-imports
import { type NavigateOptions, useNavigate } from "react-router";

export default function useLocaleNavigate() {
  const navigate = useNavigate();
  const { locale } = useLocale();

  return (to: string, options?: NavigateOptions) => {
    navigate(getLocalizedUrl(to, locale), options);
  };
}
