import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.png"
        class="w-48"
        alt="AWebFactory"
      />
      <p class="my-6">
        Welcome to <span class="bg-yellow-100">AWebFactory.org</span>{" "}
        on `fresh`.
      </p>
    </div>
  );
}
