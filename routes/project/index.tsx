import { PageProps } from "$fresh/server.ts";
import { HeadElement } from "../../components/HeadElement.tsx";
import { NavBar } from "../../components/NavBar.tsx";
import { Footer } from "../../components/Footer.tsx";
import { site } from "../../data/site.ts";
import { Fragment } from "preact";

export default function Project(props: PageProps) {
  const TITLE = "Project Flow & Tracker";
  const METATITLE = `${TITLE} | ${site.title}`;
  const DESCRIPTION = "pft";
  return (
    <Fragment>
      <HeadElement
        title={METATITLE}
        description={DESCRIPTION}
        url={props.url}
      />
      <NavBar />
      <div class="p-4 mx-auto max-w-screen-md">
        <h2 class="text-4xl">
          {TITLE}
        </h2>
        <h2 class="text-4xl">
          {DESCRIPTION}
        </h2>
      </div>
      <Footer />
    </Fragment>
  );
}
