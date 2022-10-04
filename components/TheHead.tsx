import { site } from "../data/site.ts";
import { PageProps } from "$fresh/server.ts";

export function TheHead(props: PageProps) {
  console.log(props);
  return <p>from theHead</p>;
}
