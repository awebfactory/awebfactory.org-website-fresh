import { Head } from "$fresh/runtime.ts";
import { site } from "../data/site.ts";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{site.title}</title>
        <meta name="title" content={site.title} />
        <meta name="description" content={site.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={site.title} />
        <meta property="twitter:description" content={site.description} />
      </Head>
      <div class="px-0 pt-0 pb-4 mx-auto max-w-screen-full">
        <nav class="bg-white shadow">
          <div class="mx-auto max-w-7xl px-2 py-2 sm:px-4 lg:px-8">
            <div class="flex justify-between">
              <div class="ml-6 hover:ml-5 hover:bg-yellow-100">
                <a href="/">
                  <img
                    src="/logo.png"
                    class="w-[150px] h-[41px]"
                    alt="AWebFactory"
                  />
                </a>
              </div>
              <div class="my-auto gap-x-16 flex flex-wrap mx-6 md:mx-4 justify-end">
                <a
                  href="/projects"
                  class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Projects
                </a>
                <a
                  href="/process"
                  class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Process
                </a>
                <a
                  href="/resources"
                  class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Resources
                </a>
                <a
                  href="/about"
                  class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div class="py-10">
          <header class="px-6">
            <h1>Welcome to AWebFactory Project Flow &amp; Tracker</h1>
            <h2>web application factory pattern</h2>
            <h3>workspaces for web application process</h3>
          </header>
          <main>
          </main>
        </div>
      </div>
    </>
  );
}
