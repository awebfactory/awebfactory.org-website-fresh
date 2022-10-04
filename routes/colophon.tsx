import { PageProps } from "$fresh/server.ts";
import { HeadElement } from "../components/HeadElement.tsx";
import { NavBar } from "../components/NavBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { site } from "../data/site.ts";

const TITLE = "Colophon";
const METATITLE = `${TITLE} | ${site.title}`;
const DESCRIPTION =
  "AWebFactory Colophon: cms, design system, frontend and backend stack, tools, dev, staging and deployment environments, hosting and more";

export default function Colophon(props: PageProps) {
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
