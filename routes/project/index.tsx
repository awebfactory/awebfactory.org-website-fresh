import { PageProps } from "$fresh/server.ts";
import { site } from "../../data/site.ts";
import { Head } from "$fresh/runtime.ts";
import { Fragment } from "preact";

export default function Home(props: PageProps) {
  const title: string = site.pathToTitleMap[props.url.pathname].title;
  const description: string =
    site.pathToTitleMap[props.url.pathname].description;
  console.log(site.pathToTitleMap[props.url.pathname]);
  return (
    <Fragment>
      <Head>
        <title>{title} | {site.title}</title>
        <meta name="description" content={description} />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h2 class="text-5xl">
          {title}
        </h2>
        <h2 class="text-4xl">
          {description}
        </h2>
      </div>
    </Fragment>
  );
}
