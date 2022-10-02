export function NavBar() {
  return (
    <nav class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-2 py-2 sm:px-4 lg:px-8">
        <div class="flex justify-between">
          <div class="ml-6 hover:ml-5 hover:bg-yellow-100">
            <a href="/">
              <img
                src="/logo.png"
                class="w-0 sm:w-[150px] h-0 sm:h-[41px]"
                alt="AWebFactory"
              />
              <img
                src="/icon170.png"
                class="w-15 h-15 sm:w-0 sm:h-0"
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
  );
}
