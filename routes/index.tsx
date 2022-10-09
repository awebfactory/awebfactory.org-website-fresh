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
      <header class="mt-2">
        <HeroHome
          title1="Welcome to AWebFactory"
          title2="Project Flow & Tracker"
          subtitle1="web application factory pattern"
          subtitle2="workspaces for web application process"
          image="/images/drupalpicchuworkshop.jpg"
          imageAlt="Drupal Picchu 2014 Workshop"
        />
        <div class="mx-8 text-sm italic text-gray-400">
          <p>
            Victor Kane, Worker/Owner@AWebFactory.com, leading a workshop
            "Backdrop as an alternative and healthy evolution for Drupal 7"
            (Spanish: "Backdrop como evolución alternativa y sana para Drupal
            7") at DrupalPicchu community summit held in Cusco, Peru on January
            20-24, 2014
          </p>
          <div class="relative overflow-hidden h-0 pb-[56%] pt-[30px]">
            <iframe
              class="absolute h-full ml-0 mt-0 w-full"
              src="https://www.youtube.com/embed/6wqHf9Yv0c0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </header>
      <div class="mx-auto max-w-screen-md">
        <main>
          <div class="bg-white">
            <div class="mx-auto max-w-7xl pb-16 pt-6 px-4 sm:px-6 lg:pb-24 lg:px-8">
              <div class="mx-auto max-w-3xl text-center">
                <h3 class="text-3xl font-bold tracking-tight text-texas-rose-500">
                  We #BuildInPublic #LearnInPublic
                </h3>
                <h3 class="text-3xl font-bold tracking-tight text-orange-peel-800">
                  What we build, what we learn, is ours forever
                </h3>
                <p class="mt-4 text-lg text-gray-500">
                  So, today, in 2022, for full-stack and JAMstack solutions,
                  let's continue to abandon "enterprise" monoliths and their $
                  "plugin" exploitation of users. Let's struggle against the
                  means of communication as monopoly. Let's move to tomorrow's
                  free software decoupled alternatives. Let's work together and
                  put an end to the mystification of skills with diverse teams
                  over elitist rockstars
                </p>
              </div>
              <dl class="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                <div class="relative">
                  <dt>
                    {/* Using Heroicon outline/check */}
                    <svg
                      class="absolute h-6 w-6 text-wild-willow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                      Truly Content First
                    </p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                    We must overcome over emphasis on flashy marketing "design"
                    and the poverty of content modelling being pushed by Big
                    Tech, which keeps developers in ignorance of the web app
                    development process to meet real needs
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-wild-willow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                      The Crux of the Matter
                    </p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                    What we really need to own: an open source low-complexity
                    content and personalization model based on freely reusable
                    and dependable no vendor lock in means of communication and
                    production. The best, not the most complex, what fulfills
                    true needs, not the fastest
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-wild-willow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                      A clear sense of history
                    </p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                    We need to learn the true history of all evolving societies
                    and then of the internet in that context, so we can clearly
                    separate Big Tech's needs and solutions from our own.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-wild-willow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                      Separate the wheat from the chaff
                    </p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                    Which are the true innovations, which point to true socially
                    useful adoption and which to needless complexity and hype?
                    How has the hierarchy of the DOM declaratively been met with
                    the directness of mainly static and edge content with the
                    right sprinkling of continually hot distributed hydration.
                    What do we really need to use and re-use?
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-wild-willow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                      Open projects here and everywhere so we can share our
                      experience
                    </p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                    Recognize the worthwhile and the future-proof innovations.
                    Deno for sure. Node + Vite (plus all UI frameworks it
                    supports) for sure. Edged internationalist SSR + sprinkling
                    of interactive islands plus Qwik virtual DOM restart for
                    sure. With no boundaries. Almost everything else is pure use
                    of that.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-wild-willow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                      True progress and change for real needs
                    </p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                    Let's reject corporate hysteria based on greed
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-wild-willow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                      Free software and openly accessible low-code site builders
                    </p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                    We're not paying you u$s 300 a site every month. Make one,
                    two, many free builders and servers in your city. In your
                    neighborhood. From the Rasberry Pi in a hole in the wall to
                    friendly businesses and NGO's who, faced with our friendly
                    demand, will be more than willing to donate server space and
                    load, we're sure...
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-wild-willow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                      Complete Freedom of Speech
                    </p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                    No government or businessman or even elitist cooperative
                    should be deciding who gets their say. If all are not free
                    to speak and have their say, it can only come back and bite
                    the workers and people.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </html>
  );
}
