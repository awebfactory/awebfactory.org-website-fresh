import { PageProps } from "$fresh/server.ts";

export default function Project(props: PageProps) {
  // console.log(props.params);
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <h3 class="text-3xl">
        Project Flow &amp; Tracker
      </h3>
      <h2 class="text-5xl">
        Project: {props.params.project}
      </h2>
    </div>
  );
}
