import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import NavBar from "@/components/navbar/navBar";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
