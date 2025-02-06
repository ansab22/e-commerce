import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from "@/components/navbar/navBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CollapsibleExample />
      <Component {...pageProps} />
    </>
  );
}
