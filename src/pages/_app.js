import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
