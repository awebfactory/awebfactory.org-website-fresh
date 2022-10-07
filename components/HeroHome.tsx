export type HeroHomeProps = {
  title1: string;
  title2: string;
  subtitle1: string;
  subtitle2: string;
  image?: string;
  imageAlt?: string;
};

export function HeroHome(
  { title1, title2, subtitle1, subtitle2, image, imageAlt }: HeroHomeProps,
) {
  return (
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div class="absolute inset-0">
            <img
              class="h-full w-full object-cover"
              src={image}
              alt={`${title1} ${title2}`}
            />
            <div class="absolute inset-0 bg-texas-rose-600 opacity-50 mix-blend-multiply">
            </div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 class="text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              <span class="block text-white">{title1}</span>
              <span class="block text-white">{title2}</span>
            </h1>
            <h2 class="font-content mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
              {subtitle1}
            </h2>
            <h3 class="font-content mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
              {subtitle2}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
