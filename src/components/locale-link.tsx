import { getLocalizedUrl } from "intlayer";
import { useLocale } from "react-intlayer";
// eslint-disable-next-line no-restricted-imports
import { Link, type LinkProps } from "react-router";

export default function LocaleLink(props: LinkProps) {
  const { locale } = useLocale();

  return <Link {...props} to={getLocalizedUrl(props.to as string, locale)} />;
}
