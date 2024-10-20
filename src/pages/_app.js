import "@/styles/globals.css";

// added for fa begins

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// added for fa ends

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
