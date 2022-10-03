import { PageProps } from "$fresh/server.ts";
import { site } from "../data/site.ts";
import { Head } from "$fresh/runtime.ts";

export default function About(props: PageProps) {
  const title = site.pathToTitleMap[props.url.pathname];
  return (
    <>
      <Head>
        <title>{title} | {site.title}</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          <h2>{site.pathToTitleMap[props.url.pathname]}</h2>
        </p>
      </div>
    </>
  );
}
