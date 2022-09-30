import { PageProps } from "$fresh/server.ts";

// catch-all page
export default function Greet(props: PageProps) {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <p>
        Hi there! Did you mean project{" "}
        <span class="text-green-400">{props.params.name}?</span>
      </p>
      <p>
        Sorry, no project of that name. But, click to see a{" "}
        <a href="/api/project" class="bg-yellow-100 hover:bg-yellow-200">
          Random Project
        </a>
      </p>
    </div>
  );
}
