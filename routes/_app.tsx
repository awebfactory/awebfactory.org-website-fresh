import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { NavBar } from "../components/NavBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { site } from "../data/site.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        {/* Primary Meta Tags */}
        <title>{site.title}</title>
        <meta name="title" content={site.title} />
        <meta name="description" content={site.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={site.title} />
        <meta property="twitter:description" content={site.description} />
      </Head>
      <div
        class="min-h-screen grid grid-cols-1"
        style="grid-template-rows: auto 1fr auto;"
      >
        <NavBar />
        <Component />
        <Footer />
      </div>
    </html>
  );
}
