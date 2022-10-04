// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/about.tsx";
import * as $2 from "./routes/api/project.ts";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/privacy.tsx";
import * as $5 from "./routes/project/[project].tsx";
import * as $6 from "./routes/project/index.tsx";
import * as $7 from "./routes/settings.tsx";
import * as $8 from "./routes/thank-you.tsx";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/about.tsx": $1,
    "./routes/api/project.ts": $2,
    "./routes/index.tsx": $3,
    "./routes/privacy.tsx": $4,
    "./routes/project/[project].tsx": $5,
    "./routes/project/index.tsx": $6,
    "./routes/settings.tsx": $7,
    "./routes/thank-you.tsx": $8,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
