### Manual Project Setup

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Steps to manually create a new directory, initialize a Node.js project, and install runtime and development dependencies for a React Router application.

```shellscript
mkdir my-react-router-app
cd my-react-router-app
npm init -y

# install runtime dependencies
npm i react-router @react-router/node @react-router/serve isbot react react-dom

# install dev dependencies
npm i -D @react-router/dev vite
```

---

### Install Express and Adapters

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Install `express`, the `@react-router/express` adapter, and `cross-env` for running the application in production mode with a custom server.

```shellscript
npm i express @react-router/express cross-env
```

---

### Create a Router and Render

Source: https://github.com/remix-run/react-router/blob/main/docs/start/data/installation.md

Example demonstrating how to create a browser router and render it using `RouterProvider`.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
```

---

### Navigate to project and start the development server

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/installation.md

After creating the project, change into its directory, install dependencies, and launch the development server.

```shellscript
cd my-react-router-app
npm i
npm run dev
```

---

### Declarative Mode Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/modes.md

Basic routing setup using BrowserRouter.

```tsx
import { BrowserRouter } from "react-router";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

---

### Start React Router Application

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/address-book.md

Navigate to the app directory, install dependencies, and then run the development server to launch the application locally.

```shellscript
# cd into the app directory
cd {wherever you put the app}

# install dependencies if you haven't already
npm install

# start the server
npm run dev
```

---

### Setup some routes

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/file-uploads.md

Example of setting up routes for a user profile and avatar API using `@react-router/dev/routes`.

```ts
import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  // ... other routes
  route("user/:id", "pages/user-profile.tsx", [
    route("avatar", "api/avatar.tsx"),
  ]),
] satisfies RouteConfig;
```

---

### Add dev and start scripts to package.json

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Adds `dev` and `start` scripts to `package.json` for running the server in development and production modes.

```json
{
  "scripts": {
    "dev": "node ./server.js",
    "start": "cross-env NODE_ENV=production node ./server.js"
  }
}
```

---

### Run the app with Express

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Command to start the Express server.

```shellscript
node server.js
```

---

### Render BrowserRouter

Source: https://github.com/remix-run/react-router/blob/main/docs/start/declarative/installation.md

Example of rendering a BrowserRouter component around the application's root.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

---

### Example original index.html

Source: https://github.com/remix-run/react-router/blob/main/docs/upgrading/component-routes.md

An example of a typical `index.html` file before migration.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

### Discover Prop Examples

Source: https://github.com/remix-run/react-router/blob/main/docs/api/components/Form.md

Examples showing different values for the discover prop.

```tsx
<Form /> // default ("render")
<Form discover="render" />
<Form discover="none" />
```

---

### Installation

Source: https://github.com/remix-run/react-router/blob/main/packages/react-router-remix-routes-option-adapter/README.md

Install the @react-router/remix-routes-option-adapter package.

```sh
npm install @react-router/remix-routes-option-adapter
```

---

### Create Routes File

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Create the `app/routes.js` file where routes are defined.

```shellscript
touch app/routes.js
```

---

### Run the Application with `react-router-serve`

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Run the built application using `react-router-serve` from the `@react-router/serve` package.

```shellscript
npx react-router-serve build/server/index.js
```

---

### Form Component for GET Requests

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/navigating.md

Example of using the `Form` component to navigate with `URLSearchParams` based on user input.

```tsx
<Form action="/search">
  <input type="text" name="q" />
</Form>
```

---

### Quick Start (Data Mode) Instrumentation

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/instrumentation.md

Example of adding router and route level instrumentations in Data Mode.

```tsx
import { createBrowserRouter, RouterProvider } from "react-router";

const instrumentations = [
  {
    // Instrument router operations
    router(router) {
      router.instrument({
        // Instrument navigations
        async navigate(callNavigate, { currentUrl, to }) {
          let nav = `${currentUrl} → ${to}`;
          console.log(`Navigation start: ${nav}`);
          await callNavigate();
          console.log(`Navigation end: ${nav}`);
        },
        // Instrument fetcher calls
        async fetch(callFetch, { href, currentUrl, fetcherKey }) {
          let fetch = `${fetcherKey} → ${href}`;
          console.log(`Fetcher start: ${fetch}`);
          await callFetch();
          console.log(`Fetcher end: ${fetch}`);
        },
      });
    },

    // Instrument individual routes (same as server-side)
    route(route) {
      // Skip instrumentation for specific routes if needed
      if (route.id === "root") return;

      route.instrument({
        async loader(callLoader, { request }) {
          let url = `${request.method} ${request.url}`;
          console.log(`Loader start: ${url} - ${route.id}`);
          await callLoader();
          console.log(`Loader end: ${url} - ${route.id}`);
        },
        // Other available instrumentations:
        // async action() { /* ... */ },
        // async middleware() { /* ... */ },
        // async lazy() { /* ... */ },
      });
    },
  },
];

const router = createBrowserRouter(routes, {
  instrumentations,
});

function App() {
  return <RouterProvider router={router} />;
}
```

---

### defaultInit parameter examples

Source: https://github.com/remix-run/react-router/blob/main/docs/api/hooks/useSearchParams.md

Examples of different types of values that can be used to initialize search parameters with defaultInit.

```tsx
// a search param string
useSearchParams("?tab=1");

// a shorthand object
useSearchParams({ tab: "1" });

// object keys can be arrays for multiple values on the key
useSearchParams({ brand: ["nike", "reebok"] });

// an array of tuples
useSearchParams([["tab", "1"]]);

// a `URLSearchParams` object
useSearchParams(new URLSearchParams("?tab=1"));
```

---

### Example original src/main.tsx

Source: https://github.com/remix-run/react-router/blob/main/docs/upgrading/component-routes.md

An example of a typical `src/main.tsx` file before migration to `entry.client.tsx`.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```

---

### EncType Prop Examples

Source: https://github.com/remix-run/react-router/blob/main/docs/api/components/Form.md

Examples showing different values for the encType prop.

```tsx
<Form encType="application/x-www-form-urlencoded"/>  // Default
<Form encType="multipart/form-data"/>
<Form encType="text/plain"/>
```

---

### Create Vite Config File

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Create an empty `vite.config.js` file.

```shellscript
touch vite.config.js
```

---

### Create server file

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Creates an empty `server.js` file for the Express server.

```shellscript
touch server.js
```

---

### File-system routing with flatRoutes()

Source: https://github.com/remix-run/react-router/blob/main/AGENTS.md

Example of configuring routes using flatRoutes() in app/routes.ts for framework mode.

```typescript
// app/routes.ts
import { type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default flatRoutes() satisfies RouteConfig;
```

---

### Create Root Route Files

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Create the `app` directory and the `app/root.jsx` file for the root route.

```shellscript
mkdir app
touch app/root.jsx
```

---

### Basic Usage Example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/components/Routes.md

An example demonstrating how to use the <Routes> component with nested <Route> elements.

```tsx
import { Route, Routes } from "react-router";

<Routes>
  <Route index element={<StepOne />} />
  <Route path="step-2" element={<StepTwo />} />
  <Route path="step-3" element={<StepThree />} />
</Routes>;
```

---

### Install React Router

Source: https://github.com/remix-run/react-router/blob/main/docs/start/data/installation.md

Command to install the React Router package from npm.

```shellscript
npm i react-router
```

---

### Bootstrap with a Bundler Template

Source: https://github.com/remix-run/react-router/blob/main/docs/start/data/installation.md

Command to bootstrap a new project using `create-vite`.

```shellscript
npx create-vite@latest
```

---

### Uninstall deprecated package

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Uninstalls the `@react-router/serve` package, which is no longer used.

```shellscript
npm uninstall @react-router/serve
```

---

### Initial Express server implementation

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Sets up a basic Express server to serve static assets and handle React Router requests.

```js
import { createRequestHandler } from "@react-router/express";
import express from "express";

const app = express();
app.use(express.static("build/client"));

// notice that your app is "just a request handler"
app.use(
  createRequestHandler({
    // and the result of `react-router build` is "just a module"
    build: await import("./build/server/index.js"),
  }),
);

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
```

---

### Install new dependencies

Source: https://github.com/remix-run/react-router/blob/main/docs/upgrading/remix.md

Command to install updated dependencies after running the codemod.

```shellscript
npm install
```

---

### Usage Example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/rsc/createCallServer.md

Example demonstrating how to set up `createCallServer` with `@vitejs/plugin-rsc/browser`.

```tsx
import {
  createFromReadableStream,
  createTemporaryReferenceSet,
  encodeReply,
  setServerCallback,
} from "@vitejs/plugin-rsc/browser";
import { unstable_createCallServer as createCallServer } from "react-router";

setServerCallback(
  createCallServer({
    createFromReadableStream,
    createTemporaryReferenceSet,
    encodeReply,
  }),
);
```

---

### Build the Application

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Build the React Router application for production, creating `server` and `client` build folders.

```shellscript
npx react-router build
```

---

### useHref Basic Example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/hooks/useHref.md

An example demonstrating how to use the useHref hook to resolve a path.

```tsx
import { useHref } from "react-router";

function SomeComponent() {
  let href = useHref("some/where");
  // "/resolved/some/where"
}
```

---

### Cookie Session Storage Setup

Source: https://github.com/remix-run/react-router/blob/main/docs/explanation/sessions-and-cookies.md

Example of setting up a cookie-based session storage object using `createCookieSessionStorage` in `app/sessions.server.ts`, including type definitions for session data and flash data, and cookie options.

```ts
import { createCookieSessionStorage } from "react-router";

type SessionData = {
  userId: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "__session",

      // all of these are optional
      domain: "reactrouter.com",
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
```

---

### Server-side Instrumentation Example

Source: https://github.com/remix-run/react-router/blob/main/decisions/0015-observability.md

An example demonstrating how to use the `instrumentations` export in `entry.server.tsx` to wrap request handlers and individual route loaders.

```tsx
// entry.server.tsx

export const instrumentations = [
  {
    // Wrap the request handler - applies to _all_ requests handled by RR, including:
    // - manifest requests
    // - document requests
    // - `.data` requests
    // - resource route requests
    handler({ instrument }) {
      // Calling instrument performs the actual instrumentation
      instrument({
        // Provide the instrumentation implementation for the request handler
        async request(handleRequest, { request }) {
          let start = Date.now();
          console.log(`Request start: ${request.method} ${request.url}`);
          try {
            await handleRequest();
          } finally {
            let duration = Date.now() - start;
            console.log(
              `Request end: ${request.method} ${request.url} (${duration}ms)`,
            );
          }
        },
      });
    },
    // Instrument an individual route, allowing you to wrap middleware/loader/action/etc.
    // This also gives you a place to do global "shouldRevalidate" which is a nice side
    // effect as folks have asked for that for a long time
    route({ instrument, id }) {
      // `id` is the route id in case you want to instrument only some routes or
      // instrument in a route-specific manner
      if (id === "routes/i-dont-care") return;

      instrument({
        loader(callLoader, { request }) {
          let start = Date.now();
          console.log(`Loader start: ${request.method} ${request.url}`);
          try {
            await callLoader();
          } finally {
            let duration = Date.now() - start;
            console.log(
              `Loader end: ${request.method} ${request.url} (${duration}ms)`,
            );
          }
        },
        // action(), middleware(), lazy()
      });
    },
  },
];
```

---

### Router Instrumentation Example

Source: https://github.com/remix-run/react-router/blob/main/decisions/0015-observability.md

Example demonstrating how to define and apply instrumentations for router and route operations using `createBrowserRouter` and `HydratedRouter`.

```tsx
// entry.client.tsx

export const instrumentations = [{
  // Instrument router operations
  router({ instrument }) {
    instrument({
      async initialize(callNavigate, info) { /*...*/ },
      async navigate(callNavigate, info) { /*...*/ },
      async fetch(callNavigate, info) { /*...*/ },
    });
  },
  route({ instrument, id }) {
    instrument({
      lazy(callLazy, info) { /*...*/ },
      middleware(callMiddleware, info) { /*...*/ },
      loader(callLoader, info) { /*...*/ },
      action(callAction, info) { /*...*/ },
    });
  },
}];

// Data mode
let router = createBrowserRouter(routes, { instrumentations })

// Framework mode
<HydratedRouter instrumentations={instrumentations} />
```

---

### Install a runtime adapter

Source: https://github.com/remix-run/react-router/blob/main/docs/upgrading/component-routes.md

Command to install the Node.js runtime adapter for React Router.

```shellscript
npm install @react-router/node
```

---

### 3. Get Routing Context and Render

Source: https://github.com/remix-run/react-router/blob/main/docs/start/data/custom.md

Example of a server request handler that uses `createStaticHandler` to query routing context, create a static router, and render the application to a string for server-side rendering.

```tsx
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router";

import routes from "./some-routes.js";

let { query, dataRoutes } = createStaticHandler(routes);

export async function handler(request: Request) {
  // 1. run actions/loaders to get the routing context with `query`
  let context = await query(request);

  // If `query` returns a Response, send it raw (a route probably a redirected)
  if (context instanceof Response) {
    return context;
  }

  // 2. Create a static router for SSR
  let router = createStaticRouter(dataRoutes, context);

  // 3. Render everything with StaticRouterProvider
  let html = renderToString(
    <StaticRouterProvider router={router} context={context} />,
  );

  // Setup headers from action and loaders from deepest match
  let leaf = context.matches[context.matches.length - 1];
  let actionHeaders = context.actionHeaders[leaf.route.id];
  let loaderHeaders = context.loaderHeaders[leaf.route.id];
  let headers = new Headers(actionHeaders);
  if (loaderHeaders) {
    for (let [key, value] of loaderHeaders.entries()) {
      headers.append(key, value);
    }
  }

  headers.set("Content-Type", "text/html; charset=utf-8");

  // 4. send a response
  return new Response(`<!DOCTYPE html>${html}`, {
    status: context.statusCode,
    headers,
  });
}
```

---

### Data Mode Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/modes.md

Setting up a data router with createBrowserRouter, including a loader.

```tsx
import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: loadRootData,
  },
]);

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
```

---

### Output of `react-router reveal` command

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Shows the files created by the `react-router reveal` command.

```text
Entry file entry.client created at app/entry.client.tsx.
Entry file entry.server created at app/entry.server.tsx.
```

---

### Handling Different Request Methods

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/resource-routes.md

Example showing how `loader` handles GET requests and `action` handles other HTTP methods (POST, PUT, PATCH, DELETE) in a resource route.

```tsx
import type { Route } from "./+types/resource";

export function loader(_: Route.LoaderArgs) {
  return Response.json({ message: "I handle GET" });
}

export function action(_: Route.ActionArgs) {
  return Response.json({
    message: "I handle everything else",
  });
}
```

---

### Initialize with CLI

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Use the `create-react-router` CLI to initialize a batteries-included React Router project with any of the available templates.

```shellscript
npx create-react-router@latest
```

---

### Run the app in development mode

Source: https://github.com/remix-run/react-router/blob/main/docs/upgrading/component-routes.md

Command to start the development server.

```shellscript
npm run dev
```

---

### Example Usage

Source: https://github.com/remix-run/react-router/blob/main/docs/api/components/PrefetchPageLinks.md

Example of how to use PrefetchPageLinks to prefetch a page.

```tsx
import { PrefetchPageLinks } from "react-router";

<PrefetchPageLinks page="/absolute/path" />;
```

---

### Install @react-router/serve

Source: https://github.com/remix-run/react-router/blob/main/docs/api/other-api/serve.md

Command to install the @react-router/serve package.

```sh
npm install @react-router/serve
```

---

### Basic react-router.config.ts example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/framework-conventions/react-router.config.ts.md

Basic configuration example for `react-router.config.ts`.

```tsx
import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "app",
  buildDirectory: "build",
  ssr: true,
  prerender: ["/", "/about"],
} satisfies Config;
```

---

### Install v7

Source: https://github.com/remix-run/react-router/blob/main/docs/upgrading/v6.md

Command to install the latest version of react-router-dom.

```shellscript
npm install react-router-dom@latest
```

---

### Install @react-router/fs-routes

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/file-route-conventions.md

Command to install the file-system routes package.

```shellscript
npm i @react-router/fs-routes
```

---

### Installation

Source: https://github.com/remix-run/react-router/blob/main/packages/react-router-express/README.md

Install the @react-router/express package using npm.

```sh
npm install @react-router/express
```

---

### Client Directories example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/framework-conventions/client-modules.md

Illustrates the directory structure for marking entire directories as client-only.

```txt
app/
├── .client/               ✨ entire directory is client-only
│   ├── analytics.ts
│   ├── feature-detection.ts
│   └── browser-utils.ts
├── components/
└── root.tsx
```

---

### Client Action Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of a client action, which is called only in the browser and can also call a server action.

```tsx
export async function clientAction({ serverAction }) {
  fakeInvalidateClientSideCache();
  // can still call the server action if needed
  const data = await serverAction();
  return data;
}
```

---

### Inspect app with Chrome DevTools

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Command to run the server with the Node.js inspect flag for debugging with Chrome DevTools.

```shellscript
node --inspect server.js
```

---

### 1. Create a Router

Source: https://github.com/remix-run/react-router/blob/main/docs/start/data/custom.md

Example of creating a browser router with `createBrowserRouter` and defining routes with loaders.

```tsx
import { createBrowserRouter } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "shows/:showId",
        Component: Show,
        loader: ({ request, params }) =>
          fetch(`/api/show/${params.showId}.json`, {
            signal: request.signal,
          }),
      },
    ],
  },
]);
```

---

### Individual Files example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/framework-conventions/client-modules.md

Illustrates the file structure for marking individual files as client-only.

```txt
app/
├── utils.client.ts        ✨ client-only file
├── feature-detection.client.ts
└── root.tsx
```

---

### Custom Data Strategy Example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/data-routers/createMemoryRouter.md

An example demonstrating how to override the default data strategy for running loaders in parallel.

```tsx
let router = createBrowserRouter(routes, {
  async dataStrategy({ matches, request, runClientMiddleware }) {
    const matchesToLoad = matches.filter((m) => m.shouldCallHandler());

    const results: Record<string, DataStrategyResult> = {};
    await runClientMiddleware(() =>
      Promise.all(
        matchesToLoad.map(async (match) => {
          results[match.route.id] = await match.resolve();
        }),
      ),
    );
    return results;
  },
});
```

---

### HydrateFallback Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of a HydrateFallback component that renders immediately while the client loader is finishing.

```tsx
export async function clientLoader() {
  const data = await fakeLoadLocalGameData();
  return data;
}

export function HydrateFallback() {
  return <p>Loading Game...</p>;
}

export default function Component({ loaderData }) {
  return <Game data={loaderData} />;
}
```

---

### Route Configuration Example

Source: https://github.com/remix-run/react-router/blob/main/docs/explanation/type-safety.md

Example of configuring a products/:id route in app/routes.ts using @react-router/dev/routes.

```ts
import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("products/:id", "./routes/product.tsx"),
] satisfies RouteConfig;
```

---

### app/entry.client.ts

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/react-server-components.md

Example of a custom client entry file.

```ts
import "@react-router/dev/config/default-rsc-entries/entry.client";
```

---

### Login form example

Source: https://github.com/remix-run/react-router/blob/main/docs/explanation/sessions-and-cookies.md

A complete example of a login form route, including loader, action, and component, demonstrating session management for user authentication and error handling.

```tsx
import { data, redirect } from "react-router";
import type { Route } from "./+types/login";

import { getSession, commitSession } from "../sessions.server";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("userId")) {
    // Redirect to the home page if they are already signed in.
    return redirect("/");
  }

  return data(
    { error: session.get("error") },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export async function action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");

  const userId = await validateCredentials(username, password);

  if (userId == null) {
    session.flash("error", "Invalid username/password");

    // Redirect back to the login page with errors.
    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  session.set("userId", userId);

  // Login succeeded, send them to the home page.
  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function Login({ loaderData }: Route.ComponentProps) {
  const { error } = loaderData;

  return (
    <div>
      {error ? <div className="error">{error}</div> : null}
      <form method="POST">
        <div>
          <p>Please sign in</p>
        </div>
        <label>
          Username: <input type="text" name="username" />
        </label>
        <label>
          Password: <input type="password" name="password" />
        </label>
      </form>
    </div>
  );
}
```

---

### Server Middleware Example

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/middleware.md

An example of server middleware, demonstrating how it processes HTTP requests and returns responses.

```ts
async function serverMiddleware({ request }, next) {
  console.log(request.method, request.url);
  let response = await next();
  console.log(response.status, request.method, request.url);
  return response;
}

// Framework mode only
export const middleware: Route.MiddlewareFunction[] = [serverMiddleware];
```

---

### Change File Naming Examples

Source: https://github.com/remix-run/react-router/blob/main/docs/community/contributing.md

Examples of how change files should be named, including the type and a short description.

```sh
patch.fix-fetcher-redirects.md
minor.add-some-new-api.md
major.require-node-24.md
unstable.update-unstable-api.md
```

---

### Using custom session storage

Source: https://github.com/remix-run/react-router/blob/main/docs/explanation/sessions-and-cookies.md

Example demonstrating how to initialize and use the custom database session storage.

```ts
const { getSession, commitSession, destroySession } =
  createDatabaseSessionStorage({
    host: "localhost",
    port: 1234,
    cookie: {
      name: "__session",
      sameSite: "lax",
    },
  });
```

---

### Client Logging Middleware Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of client-side middleware for logging requests during client navigations, noting that it does not return Responses.

```tsx
async function loggingMiddleware({ request, context }, next) {
  console.log(`${new Date().toISOString()} ${request.method} ${request.url}`);
  const start = performance.now();
  await next(); // 👈 No Response returned
  const duration = performance.now() - start;
  console.log(`${new Date().toISOString()} (${duration}ms)`);
  // ✅ No need to return anything
}

export const clientMiddleware = [loggingMiddleware];
```

---

### Install @react-router/architect

Source: https://github.com/remix-run/react-router/blob/main/packages/react-router-architect/README.md

Command to install the @react-router/architect package using npm.

```bash
npm install @react-router/architect
```

---

### Router Instrumentation Example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/data-routers/createMemoryRouter.md

An example showing how to use instrumentations for logging router and route events like navigation, fetches, middleware, loaders, and actions.

```tsx
let router = createBrowserRouter(routes, {
  instrumentations: [logging],
});

let logging = {
  router({ instrument }) {
    instrument({
      navigate: (impl, info) => logExecution(`navigate ${info.to}`, impl),
      fetch: (impl, info) => logExecution(`fetch ${info.to}`, impl),
    });
  },
  route({ instrument, id }) {
    instrument({
      middleware: (impl, info) =>
        logExecution(`middleware ${info.request.url} (route ${id})`, impl),
      loader: (impl, info) =>
        logExecution(`loader ${info.request.url} (route ${id})`, impl),
      action: (impl, info) =>
        logExecution(`action ${info.request.url} (route ${id})`, impl),
    });
  },
};

async function logExecution(label: string, impl: () => Promise<void>) {
  let start = performance.now();
  console.log(`start ${label}`);
  await impl();
  let duration = Math.round(performance.now() - start);
  console.log(`end ${label} (${duration}ms)`);
}
```

---

### Server Logging Middleware Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of server-side middleware for logging requests and responses, demonstrating its execution before and after the `next` function.

```tsx
async function loggingMiddleware({ request, context }, next) {
  console.log(`${new Date().toISOString()} ${request.method} ${request.url}`);
  const start = performance.now();
  const response = await next();
  const duration = performance.now() - start;
  console.log(
    `${new Date().toISOString()} Response ${response.status} (${duration}ms)`,
  );
  return response;
}

export const middleware = [loggingMiddleware];
```

---

### Basic Vite Configuration

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Basic Vite configuration using the React Router Vite plugin, required for React Router apps.

```js
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
});
```

---

### Installation

Source: https://github.com/remix-run/react-router/blob/main/packages/react-router-dev/README.md

Install the React Router dev tools package using npm.

```sh
npm install @react-router/dev --save-dev
```

---

### Using a preset

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/presets.md

Example of how to include a published preset in your React Router configuration.

```ts
import type { Config } from "@react-router/dev/config";
import { myCoolPreset } from "react-router-preset-cool";

export default {
  // ...
  presets: [myCoolPreset()],
} satisfies Config;
```

---

### Action Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of a route action handling server-side data mutations and automatic revalidation.

```tsx
// route("/list", "./list.tsx")
import { Form } from "react-router";
import { TodoList } from "~/components/TodoList";

// this data will be loaded after the action completes...
export async function loader() {
  const items = await fakeDb.getItems();
  return { items };
}

// ...so that the list here is updated automatically
export default function Items({ loaderData }) {
  return (
    <div>
      <List items={loaderData.items} />
      <Form method="post" navigate={false} action="/list">
        <input type="text" name="title" />
        <button type="submit">Create Todo</button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const todo = await fakeDb.addItem({
    title: data.get("title"),
  });
  return { ok: true };
}
```

---

### 2. Render the Router

Source: https://github.com/remix-run/react-router/blob/main/docs/start/data/custom.md

Example of rendering the router in the browser using `<RouterProvider>`.

```tsx
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
```

---

### Example Usage

Source: https://github.com/remix-run/react-router/blob/main/docs/api/utils/matchRoutes.md

Demonstrates how to import and use the matchRoutes function with a simple route configuration.

```tsx
import { matchRoutes } from "react-router";

let routes = [
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "dashboard",
        Component: Dashboard,
      },
    ],
  },
];

matchRoutes(routes, "/dashboard"); // [rootMatch, dashboardMatch]
```

---

### Add Vite development middleware to server.js

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

Modifies `server.js` to include Vite middleware for development, enabling instant feedback with HMR.

```js
import { createRequestHandler } from "@react-router/express";
import express from "express";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build/client"));
  app.use(
    createRequestHandler({
      build: await import("./build/server/index.js"),
    }),
  );
} else {
  const viteDevServer = await import("vite").then((vite) =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  );
  app.use(viteDevServer.middlewares);
  app.use(
    createRequestHandler({
      build: () =>
        viteDevServer.ssrLoadModule("virtual:react-router/server-build"),
    }),
  );
}

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
```

---

### Client Loader Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of a client loader fetching data on the client side, potentially in addition to a server loader.

```tsx
export async function clientLoader({ serverLoader }) {
  // call the server loader
  const serverData = await serverLoader();
  // And/or fetch data on the client
  const data = getDataFromClient();
  // Return the data to expose through useLoaderData()
  return data;
}
```

---

### Link prefetch prop

Source: https://github.com/remix-run/react-router/blob/main/docs/api/components/Link.md

Examples demonstrating different values for the 'prefetch' prop.

```tsx
<Link /> // default
<Link prefetch="none" />
<Link prefetch="intent" />
<Link prefetch="render" />
<Link prefetch="viewport" />
```

---

### Client Middleware Example

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/middleware.md

An example of client middleware, showing its usage in browser-side navigations and fetcher calls, and how it differs from server middleware by not handling HTTP responses directly.

```ts
async function clientMiddleware({ request }, next) {
  console.log(request.method, request.url);
  await next();
  console.log(`Finished ${request.method} ${request.url}`);
}

// Framework mode
export const clientMiddleware: Route.ClientMiddlewareFunction[] = [
  clientMiddleware,
];

// Or, Data mode
const route = {
  path: "/",
  middleware: [clientMiddleware],
  loader: rootLoader,
  Component: Root,
};
```

---

### Loader Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of a route loader providing data to a route component.

```tsx
export async function loader() {
  return { message: "Hello, world!" };
}

export default function MyRoute({ loaderData }) {
  return <h1>{loaderData.message}</h1>;
}
```

---

### Basic Usage Example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/utils/generatePath.md

Demonstrates how to use `generatePath` to interpolate parameters into a path string.

```tsx
import { generatePath } from "react-router";

generatePath("/users/:id", { id: "123" }); // "/users/123"
```

---

### 1. Define Your Routes

Source: https://github.com/remix-run/react-router/blob/main/docs/start/data/custom.md

Example of defining routes for server rendering, similar to client-side routes.

```tsx
export default [
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "shows/:showId",
        Component: Show,
        loader: ({ params }) => {
          return db.loadShow(params.id);
        },
      },
    ],
  },
];
```

---

### Authentication Middleware Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of server-side middleware to check for logged-in users, redirect if not authenticated, and set user context for loaders.

```tsx
async function authMiddleware({ request, context }) {
  const session = await getSession(request);
  const userId = session.get("userId");

  if (!userId) {
    throw redirect("/login");
  }

  const user = await getUserById(userId);
  context.set(userContext, user);
}

export const middleware = [authMiddleware];
```

---

### onError Prop Example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/data-routers/RouterProvider.md

Example of how to implement the onError callback to handle and report application errors.

```tsx
<RouterProvider onError=(error, info) => {
  let { location, params, pattern, errorInfo } = info;
  console.error(error, location, errorInfo);
  reportToErrorService(error, location, errorInfo);
}} />
```

---

### Handle Export Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of the handle export for adding custom data to a route match.

```tsx
export const handle = {
  its: "all yours",
};
```

---

### Install Dependencies

Source: https://github.com/remix-run/react-router/blob/main/packages/react-router-cloudflare/README.md

Install the necessary packages for using React Router with Cloudflare.

```bash
npm install @react-router/cloudflare @cloudflare/workers-types
```

---

### User preferences example

Source: https://github.com/remix-run/react-router/blob/main/docs/explanation/sessions-and-cookies.md

Full example of a Remix route (`app/routes/home.tsx`) demonstrating how to use cookies to manage user preferences (e.g., showing/hiding a banner) across loader, action, and component functions.

```tsx
import { Link, Form, redirect } from "react-router";
import type { Route } from "./+types/home";

import { userPrefs } from "../cookies.server";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await userPrefs.parse(cookieHeader)) || {};
  return { showBanner: cookie.showBanner };
}

export async function action({ request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await userPrefs.parse(cookieHeader)) || {};
  const bodyParams = await request.formData();

  if (bodyParams.get("bannerVisibility") === "hidden") {
    cookie.showBanner = false;
  }

  return redirect("/", {
    headers: {
      "Set-Cookie": await userPrefs.serialize(cookie),
    },
  });
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      {loaderData.showBanner ? (
        <div>
          <Link to="/sale">Don't miss our sale!</Link>
          <Form method="post">
            <input type="hidden" name="bannerVisibility" value="hidden" />
            <button type="submit">Hide</button>
          </Form>
        </div>
      ) : null}
      <h1>Welcome!</h1>
    </div>
  );
}
```

---

### Basic useFetcher example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/hooks/useFetcher.md

Demonstrates how to import and use the useFetcher hook, access its state and data, render a form, load data, submit data, and reset the fetcher.

```tsx
import { useFetcher } from "react-router"

function SomeComponent() {
  let fetcher = useFetcher()

  // states are available on the fetcher
  fetcher.state // "idle" | "loading" | "submitting"
  fetcher.data // the data returned from the action or loader

  // render a form
  <fetcher.Form method="post" />

  // load data
  fetcher.load("/some/route")

  // submit data
  fetcher.submit(someFormRef, { method: "post" })
  fetcher.submit(someData, {
    method: "post",
    encType: "application/json"
  })

  // reset fetcher
  fetcher.reset()
}
```

---

### Headers Function Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of the headers function defining HTTP headers for server-rendered responses.

```tsx
export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}
```

---

### Root Route (`app/root.jsx`)

Source: https://github.com/remix-run/react-router/blob/main/docs/tutorials/quickstart.md

The basic set of elements for the root layout of a React Router app, including `Outlet` and `Scripts`.

```jsx
import { Outlet, Scripts } from "react-router";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
      </head>
      <body>
        <h1>Hello world!</h1>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
```

---

### Install the React Router Vite plugin

Source: https://github.com/remix-run/react-router/blob/main/docs/upgrading/component-routes.md

Command to install the React Router Vite plugin as a development dependency.

```shellscript
npm install -D @react-router/dev
```

---

### Perform Consolidated GraphQL Data Fetching with dataStrategy

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/data-strategy.md

This example configures routes with `loader: true` and GraphQL fragments on `handle`. The `dataStrategy` then composes fragments into a single GraphQL payload and parses the results back to routes.

```ts
const routes = [
  {
    id: "parent",
    path: "/parent",
    loader: true,
    handle: {
      gql: gql`
        fragment Parent on Whatever {
          parentField
        }
      `,
    },
    children: [
      {
        id: "child",
        path: "child",
        loader: true,
        handle: {
          gql: gql`
            fragment Child on Whatever {
              childField
            }
          `,
        },
      },
    ],
  },
];

let router = createBrowserRouter(routes, {
  async dataStrategy({ matches, params, request }) {
    const matchesToLoad = matches.filter((m) => m.shouldCallHandler());
    // Compose route fragments into a single GQL payload
    let gql = getFragmentsFromRouteHandles(matchesToLoad);
    let data = await fetchGql(gql);
    // Parse results back out into individual route level `DataStrategyResult`'s
    // keyed by `routeId`
    let results = parseResultsFromGql(matchesToLoad, data);
    return results;
  },
});
```

---

### Example with Express

Source: https://github.com/remix-run/react-router/blob/main/docs/api/other-api/adapter.md

Demonstrates how to use @react-router/express to create a request handler for an Express application, handling all HTTP verbs and providing a getLoadContext function.

```ts
const { createRequestHandler } = require("@react-router/express");
const express = require("express");

const app = express();

// needs to handle all verbs (GET, POST, etc.)
app.all(
  "*",
  createRequestHandler({
    // `react-router build` and `react-router dev` output files to a build directory,
    // you need to pass that build to the request handler
    build: require("./build"),

    // Return anything you want here to be available as `context` in your
    // loaders and actions. This is where you can bridge the gap between your
    // server and React Router
    getLoadContext(req, res) {
      return {};
    },
  }),
);
```

---

### Full route tree example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/data-routers/createHashRouter.md

An example of a complete route tree for an application, used to illustrate route parameter behavior.

```tsx
// Assume this is the full route tree for your app
const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    id: "blog",
    path: "/blog",
    Component: BlogLayout,
    children: [
      { path: "new", Component: NewPost },
      { path: ":slug", Component: BlogPost },
    ],
  },
];
```

---

### Server-only module example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/framework-conventions/server-modules.md

Example of a server-only module (`auth.server.ts`) demonstrating how secrets and server-only logic are handled.

```ts
// This would expose secrets on the client if not exported from a server-only module
export const JWT_SECRET = process.env.JWT_SECRET;

export function validateToken(token: string) {
  // Server-only authentication logic
}
```

---

### onError Prop Example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/framework-routers/HydratedRouter.md

Example usage of the onError prop for logging and reporting errors.

```tsx
<HydratedRouter onError=(error, info) => {
  let { location, params, pattern, errorInfo } = info;
  console.error(error, location, errorInfo);
  reportToErrorService(error, location, errorInfo);
}} />
```

---

### RouterContextProvider Example

Source: https://github.com/remix-run/react-router/blob/main/docs/api/utils/RouterContextProvider.md

Demonstrates how to use RouterContextProvider to set and retrieve type-safe context values.

```tsx
import { createContext, RouterContextProvider } from "react-router";

const userContext = createContext<User | null>(null);
const contextProvider = new RouterContextProvider();
contextProvider.set(userContext, getUser());
//                               ^ Type-safe
const user = contextProvider.get(userContext);
//    ^ User
```

---

### Splat Route File Structure

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/file-route-conventions.md

Example file structure demonstrating splat routes.

```text
app/
├── routes/
│   ├── _index.tsx
│   ├── $.tsx
│   ├── about.tsx
│   └── files.$.tsx
└── root.tsx
```

---

### Framework Mode Route Module

Source: https://github.com/remix-run/react-router/blob/main/docs/start/modes.md

Example of a route module in Framework Mode, demonstrating a loader and component with type-safe props.

```ts
import { Route } from "./+types/product.tsx";

export async function loader({ params }: Route.LoaderArgs) {
  let product = await getProduct(params.pid);
  return { product };
}

export default function Product({
  loaderData,
}: Route.ComponentProps) {
  return <div>{loaderData.product.name}</div>;
}
```

---

### Navigate to another path

Source: https://github.com/remix-run/react-router/blob/main/docs/api/hooks/useNavigate.md

Examples of navigating to a specific path using a string.

```tsx
navigate("/some/route");
navigate("/some/route?search=param");
```

---

### Form Component URL Output

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/navigating.md

Example of the resulting URL after submitting a `Form` with a search query.

```text
/search?q=journey
```

---

### Install Vite RSC Dependencies

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/react-server-components.md

Install the necessary development dependencies for Vite, React, and the RSC plugin.

```shellscript
npm i -D vite @vitejs/plugin-react @vitejs/plugin-rsc
```

---

### CMS Redirect on 404 Client Middleware Example

Source: https://github.com/remix-run/react-router/blob/main/docs/how-to/middleware.md

A client-side middleware example demonstrating post-processing based on loader/action results, specifically for implementing a CMS redirect on a 404 error.

```tsx
async function cmsFallbackMiddleware({ request }, next) {
  const results = await next();

  // Check if we got a 404 from any of our routes and if so, look for a
  // redirect in our CMS
  const found404 = Object.values(results).some(
    (r) => isRouteErrorResponse(r.result) && r.result.status === 404,
  );
  if (found404) {
    const cmsRedirect = await checkCMSRedirects(request.url);
    if (cmsRedirect) {
      throw redirect(cmsRedirect, 302);
    }
  }
}
```

---

### ErrorBoundary Example

Source: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md

An example of an ErrorBoundary component to render when other route module APIs throw errors.

```tsx
import { isRouteErrorResponse, useRouteError } from "react-router";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
```

---

### Run the server

Source: https://github.com/remix-run/react-router/blob/main/docs/api/other-api/serve.md

Command to start the React Router App Server with a specified server build path.

```sh
react-router-serve <server-build-path>
# e.g.
react-router-serve build/index.js
```
