import { PageProps } from "$fresh/server.ts";
import { HeadElement } from "../components/HeadElement.tsx";
import { NavBar } from "../components/NavBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { site } from "../data/site.ts";

const TITLE = site.title;
const DESCRIPTION = site.description;

export default function Home(props: PageProps) {
  return (
    <html style="scroll-behavior: smooth;">
      <HeadElement
        title={TITLE}
        description={DESCRIPTION}
        url={props.url}
      />
      <NavBar />
      <div class="mx-auto p-4 max-w-screen-md">
        <div class="py-10">
          <header class="px-6">
            <h1>Welcome to AWebFactory Project Flow &amp; Tracker</h1>
            <h2>web application factory pattern</h2>
            <h3>workspaces for web application process</h3>
          </header>
          <main>
          </main>
        </div>
      </div>
      <Footer />
    </html>
  );
}
