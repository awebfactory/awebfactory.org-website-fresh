import { PageProps } from "$fresh/server.ts";
import { HeadElement } from "../components/HeadElement.tsx";
import { NavBar } from "../components/NavBar.tsx";
import { Footer } from "../components/Footer.tsx";

import { HeroHome } from "../components/HeroHome.tsx";

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
      <HeroHome
        title1="Welcome to AWebFactory"
        title2="Project Flow & Tracker"
        subtitle1="web application factory pattern"
        subtitle2="workspaces for web application process"
        image="/images/drupalpicchuworkshop.jpg"
        imageAlt="Drupal Picchu 2014 Workshop"
      />
      <div class="mx-auto p-4 max-w-screen-md">
        <div>
          <header>
            {
              /*
            <h1 class="text-4xl">
              Welcome to AWebFactory Project Flow &amp; Tracker
            </h1>
            <h2 class="text-3xl">web application factory pattern</h2>
            <h3 class="text-2xl">workspaces for web application process</h3>
              */
            }
          </header>
          <main>
          </main>
        </div>
      </div>
      <Footer />
    </html>
  );
}
