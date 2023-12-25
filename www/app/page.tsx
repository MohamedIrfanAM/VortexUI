import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, spacing, text } from "./globalTokens.stylex";

const MEDIA_MOBILE: "@media (max-width: 700px)" = "@media (max-width: 700px)";
const MEDIA_TABLET: "@media (min-width: 701px) and (max-width: 1120px)" =
  "@media (min-width: 701px) and (max-width: 1120px)";

const bgImage = `linear-gradient(to bottom, ${$.bgStartRGB}, ${$.calloutRGB50})`;
const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`;
const xBorderBottomColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.25)`;

export default function Home() {
  return (
    <main>
    </main>
  );
}
