import { PageProps } from "$fresh/server.ts";
import { HeadElement } from "../components/HeadElement.tsx";
import { NavBar } from "../components/NavBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { site } from "../data/site.ts";
import { Fragment } from "preact";

// catch-all page
export default function Greet(props: PageProps) {
  return (
    <Fragment>
      <HeadElement
        title={`${props.params.name} | ${site.title}`}
        description=""
        url={props.url}
      />
      <NavBar />
      <div class="p-4 mx-auto max-w-screen-md">
        <p>
          Hi there! Did you mean project{" "}
          <span class="text-green-400">
            {`${props.params.name} | ${site.title}`}
          </span>
        </p>
        <p>
          Sorry, no project of that name. But, click to see a{" "}
          <a href="/api/project" class="bg-yellow-100 hover:bg-yellow-200">
            Random Project
          </a>
        </p>
      </div>
      <Footer />
    </Fragment>
  );
}
