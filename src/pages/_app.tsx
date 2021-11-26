import { AppProps } from "next/app";

import "data/styles.scss";
import theme from "data/theme";
import "src/styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  typeof document !== "undefined" && document.addEventListener("touchstart", () => {});

  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body,
        button,
        p {
          font-family: ${theme.fonts.body};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${theme.fonts.heading};
        }
      `}</style>
    </>
  );
}
