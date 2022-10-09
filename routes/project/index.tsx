import { PageProps } from "$fresh/server.ts";
import { HeadElement } from "../../components/HeadElement.tsx";
import { NavBar } from "../../components/NavBar.tsx";
import { Footer } from "../../components/Footer.tsx";
import { site } from "../../data/site.ts";
import { Fragment } from "preact";

const posts = [
  {
    title: "AWebFactory.org (this site)",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "AWebFactory.org will continue the Project Flow & Tracker project, and build on the app as a community resource as a #BuildInPublic and #LearnInPublic open resource and based on an ongoing Lean/UX and Agile process of adding value, prototyping, and testing with ongoing MVP pivoting and extensibility",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Victor Kane",
      href: "#",
      imageUrl: "/images/victorkane.png",
    },
  },
  {
    title: "AWebFactory.com: Migration from WordPress to Deno Fresh",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "We'll migrate multiple ways (headless wordpress and/or directus as cms for Deno Fresh front end; as well as trying a content first local file-system based markdown file approach",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Victor Kane",
      href: "#",
      imageUrl: "/images/victorkane.png",
    },
  },
  {
    title: "Praxispoetica Space Indie publisher community platform",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Similar in scope to somethng like Reedsy, but run by the community itself instead of a corporation, and including resources such as a retrospective (1976-77)of the Alberto Mediza Buenos Aires Poetry Writing Workshop",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Victor Kane",
      href: "#",
      imageUrl: "/images/vkbynora.jpg",
    },
  },
  {
    title:
      "VictorKane.com: Indie publishing site for the literary works of Victor Kane",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Subscriber-assisted online collection of works, including paid options to download all works in various formats (pdf, epub, etc.)",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Victor Kane",
      href: "#",
      imageUrl: "/images/vkbynora.jpg",
    },
  },
];

export default function Project(props: PageProps) {
  const TITLE = "Project Flow & Tracker";
  const METATITLE = `${TITLE} | ${site.title}`;
  const DESCRIPTION =
    "No topic to be isolated, everything must offer value, be done for a purpose, project-based, inserted in its own history, ready to be re-used or pivoted.";
  return (
    <Fragment>
      <HeadElement
        title={METATITLE}
        description={DESCRIPTION}
        url={props.url}
      />
      <NavBar />
      <main class="p-4 mx-auto max-w-screen-md">
        <h2 class="text-4xl">
          {TITLE}
        </h2>
        <h3>
          {DESCRIPTION}
        </h3>
        <div className="relative bg-gray-50 px-4 pt-8 pb-8 sm:px-6 lg:px-8 lg:pt-12 lg:pb-12">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <h3 className="text-3xl text-center font-bold tracking-tight text-texas-rose-500 sm:text-3xl">
              Projects
            </h3>
            <div className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 sm:mt-4">
              <ul>
                <li>
                  <strong>Case Studies</strong>: An overview, emphasizing what
                  makes each project especially useful
                </li>
                <li>
                  <strong>Process</strong>: The lean and agile artifacts of
                  project history through all iterations to date useful
                </li>
                <li>
                  <strong>Resources</strong>: Projects with real value
                  #BuiltInPublic so we can #LearnInPublic
                </li>
                <li>
                  <strong>Online dev</strong>: Open Source Repos with no vendor
                  lock-in running on online dev environments️
                </li>
              </ul>
            </div>
            <div className="mx-auto mt-8 grid max-w-lg gap-5 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-wild-willow-400">
                        <a
                          href={post.category.href}
                          className="hover:underline"
                        >
                          {post.category.name}
                        </a>
                      </p>
                      <a href={post.href} className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={post.author.href}>
                          <span className="sr-only">{post.author.name}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.author.imageUrl}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a
                            href={post.author.href}
                            className="hover:underline"
                          >
                            {post.author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.datetime}>{post.date}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.readingTime} read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
