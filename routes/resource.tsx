import { PageProps } from "$fresh/server.ts";
import { HeadElement } from "../components/HeadElement.tsx";
import { NavBar } from "../components/NavBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { site } from "../data/site.ts";

const TITLE = "Resources";
const METATITLE = `${TITLE} | ${site.title}`;
const DESCRIPTION =
  "AWebFactory resources: Tutorials, videos, demos, git repos, articles and more";

export default function Resource(props: PageProps) {
  return (
    <html style="scroll-behavior: smooth;">
      <HeadElement
        title={METATITLE}
        description={DESCRIPTION}
        url={props.url}
      />
      <NavBar />
      <div class="mx-auto p-4 max-w-screen-md">
        <h2>{TITLE}</h2>
      </div>
      <Footer />
    </html>
  );
}