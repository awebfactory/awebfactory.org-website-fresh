import { Head } from "$fresh/runtime.ts";

// based on https://github.com/denoland/merch/blob/main/components/HeadElement.tsx

export type HeadProps = {
  url: URL;
  title: string;
  description: string;
  image?: string;
};

export function HeadElement({ description, image, title, url }: HeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
    </Head>
  );
}
