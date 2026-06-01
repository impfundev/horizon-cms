### Install PGlite in the browser

Source: https://pglite.dev/docs

Install PGlite using a package manager or a CDN.

```javascript
import { PGlite } from '@electric-sql/pglite'
```

```javascript
import { PGlite } from 'https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js'
```

--------------------------------

### Install PGlite in Node/Bun/Deno

Source: https://pglite.dev/docs

Install PGlite using npm, pnpm, yarn, bun, or deno.

```bash
npm install @electric-sql/pglite
```

```bash
pnpm install @electric-sql/pglite
```

```bash
yarn add @electric-sql/pglite
```

```bash
bun install @electric-sql/pglite
```

```bash
deno add npm:@electric-sql/pglite
```

--------------------------------

### Getting started with PGlite

Source: https://pglite.dev/docs/about

Demonstrates how to install, import, and use PGlite to run a simple query in JavaScript.

```javascript
import { PGlite } from '@electric-sql/pglite'

const db = new PGlite()
await db.query("select 'Hello world' as message;")
// -> { rows: [ { message: "Hello world" } ] }
```

--------------------------------

### Output of retrieving data

Source: https://pglite.dev/docs

Example output when retrieving a row using .query.

```javascript
;[
  {
    id: 1,
    task: 'Install PGlite from NPM',
    done: false,
  },
]
```

--------------------------------

### InitDB Start Parameters

Source: https://pglite.dev/docs/api

Example of how to provide custom start parameters to the initdb process.

```typescript
import { PGlite } from '@electric-sql/pglite'

const pg = await PGlite.create({
  initDbStartParams: ['--locale-provider=icu', '--icu-locale=de'],
})
```

--------------------------------

### Start Parameters

Source: https://pglite.dev/docs/api

Example of how to provide custom start parameters to the PGlite process.

```typescript
import { PGlite } from '@electric-sql/pglite'

const pg = await PGlite.create({
  startParams: [
    ...PGlite.defaultStartParams,
    '-c',
    'application_name=My awesome backend',
  ],
})
```

--------------------------------

### Local development with `prisma dev`

Source: https://pglite.dev/docs/orm-support

Example of initializing Prisma and starting a local development server with PGlite.

```bash
npx prisma init
npx prisma dev
```

--------------------------------

### Use in-memory Postgres in Node/Bun/Deno

Source: https://pglite.dev/docs

Initialize an in-memory PGlite database instance.

```javascript
import { PGlite } from '@electric-sql/pglite'

const db = new PGlite()
```

--------------------------------

### Knex.js PGlite setup

Source: https://pglite.dev/docs/orm-support

Example of setting up a Knex.js instance with the knex-pglite client.

```javascript
import { knex } from 'knex'
import ClientPgLite from 'knex-pglite'

export const db = knex({
  client: ClientPgLite,
  dialect: 'postgres',
  connection: { connectionString: 'idb://my-database' },
})
```

--------------------------------

### Persist to filesystem in Node/Bun/Deno

Source: https://pglite.dev/docs

Initialize a PGlite database instance that persists to the native filesystem.

```javascript
const db = new PGlite('./path/to/pgdata')
```

--------------------------------

### Development Server Integration Examples

Source: https://pglite.dev/docs/pglite-socket

Examples of starting the PGlite development server with different application types and including the DATABASE_URL environment variable.

```bash
# Start your Next.js dev server with PGlite
pglite-server --run "npm run dev" --include-database-url

# Start a Node.js app with PGlite
pglite-server --db=./dev-db --run "node server.js" --include-database-url

# Start multiple services (using a process manager like concurrently)
pglite-server --run "npx concurrently 'npm run dev' 'npm run worker'" --include-database-url
```

--------------------------------

### In-memory Postgres in the browser

Source: https://pglite.dev/docs

Initialize an in-memory PGlite database instance in the browser.

```javascript
const db = new PGlite()
```

--------------------------------

### Unix Socket Support Example

Source: https://pglite.dev/docs/pglite-socket

Example of starting the PGlite server on a Unix socket and the resulting DATABASE_URL.

```bash
# Start server on a Unix socket
pglite-server --path=/tmp/.s.PGSQL.5432 --run "npm run dev" --include-database-url

# The DATABASE_URL will be: postgresql://postgres:postgres@/postgres?host=/tmp
```

--------------------------------

### Persist to IndexedDB in the browser

Source: https://pglite.dev/docs

Initialize a PGlite database instance that persists to IndexedDB.

```javascript
const db = new PGlite('idb://my-pgdata')
```

--------------------------------

### Create table and insert data using .exec

Source: https://pglite.dev/docs

Use the .exec method to run raw SQL for creating tables and inserting data.

```javascript
await db.exec $(
  CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    task TEXT,
    done BOOLEAN DEFAULT false
  );
  INSERT INTO todo (task, done) VALUES ('Install PGlite from NPM', true);
  INSERT INTO todo (task, done) VALUES ('Load PGlite', true);
  INSERT INTO todo (task, done) VALUES ('Create a table', true);
  INSERT INTO todo (task, done) VALUES ('Insert some data', true);
  INSERT INTO todo (task) VALUES ('Update a task');
)
```

--------------------------------

### Usage

Source: https://pglite.dev/docs/pglite-socket

Example of creating a PGlite instance and starting a socket server.

```typescript
import { PGlite } from '@electric-sql/pglite'
import { PGLiteSocketServer } from '@electric-sql/pglite-socket'

// Create a PGlite instance
const db = await PGlite.create()

// Create and start a socket server
const server = new PGLiteSocketServer({
  db,
  port: 5432,
  host: '127.0.0.1',
})

await server.start()
console.log('Server started on 127.0.0.1:5432')

// Handle graceful shutdown
process.on('SIGINT', async () => {
  await server.stop()
  await db.close()
  console.log('Server stopped and database closed')
  process.exit(0)
})
```

--------------------------------

### Install the sync plugin

Source: https://pglite.dev/docs/sync

Install the `@electric-sql/pglite-sync` package using npm.

```shell
npm install @electric-sql/pglite-sync
```

--------------------------------

### Retrieve data using .query

Source: https://pglite.dev/docs

Use the .query method to retrieve data with SQL.

```javascript
const ret = await db.query $(
  SELECT * from todo WHERE id = 1;
)
console.log(ret.rows)
```

--------------------------------

### Installation

Source: https://pglite.dev/docs/prepopulatedfs

Install the prepopulatedfs package using npm, yarn, or pnpm.

```bash
npm install @electric-sql/pglite-prepopulatedfs
# or
yarn add @electric-sql/pglite-prepopulatedfs
# or
pnpm add @electric-sql/pglite-prepopulatedfs
```

--------------------------------

### Using PGlite in npm scripts

Source: https://pglite.dev/docs/pglite-socket

Example package.json scripts for starting the PGlite server with different configurations.

```json
{
  "scripts": {
    "db:start": "pglite-server --db=./data/mydb --port=5433",
    "db:dev": "pglite-server --db=memory:// --debug=1",
    "dev": "pglite-server --db=./dev-db --run 'npm run start:dev' --include-database-url",
    "dev:clean": "pglite-server --run 'npm run start:dev' --include-database-url"
  }
}
```

--------------------------------

### CLI Usage

Source: https://pglite.dev/docs/pglite-socket

Examples of using the pglite-server CLI to start a PGlite socket server with various options.

```bash
# Install globally
npm install -g @electric-sql/pglite-socket

# Start a server with default settings (in-memory database, port 5432)
pglite-server

# Start a server with custom options
pglite-server --db=/path/to/database --port=5433 --host=0.0.0.0 --debug=1

# Using short options
pglite-server -d /path/to/database -p 5433 -h 0.0.0.0 -v 1

# Show help
pglite-server --help
```

--------------------------------

### Knex.js PGlite installation

Source: https://pglite.dev/docs/orm-support

Commands to install Knex.js and the knex-pglite library.

```bash
npm i @electric-sql/pglite knex knex-pglite
```

--------------------------------

### describeQuery Example

Source: https://pglite.dev/docs/api

Example of using describeQuery to get type information about a query.

```typescript
await pg.describeQuery('SELECT * FROM test WHERE name = $1', ['test'])

// returns:
{
  queryParams: [{ dataTypeID: 25, serializer: Function }],
  resultFields: [{ name: "id", dataTypeID: 23, parser: Function }],
}
```

--------------------------------

### Listen Method Example

Source: https://pglite.dev/docs/api

Example of subscribing to a pg_notify channel and receiving notifications.

```typescript
const unsub = await pg.listen('test', (payload) => {
  console.log('Received:', payload)
})
await pg.query("NOTIFY test, 'Hello, world!'")
```

--------------------------------

### copyToFS Example

Source: https://pglite.dev/docs/api

Example of using copyToFS to write data to the virtual filesystem.

```typescript
await pg.copyToFS(
  '/tmp/test.txt',
  new TextEncoder().encode('PGlite says hi!'),
  0o0644,
)
```

--------------------------------

### Install TypeORM and typeorm-pglite

Source: https://pglite.dev/docs/orm-support

Install the necessary packages for TypeORM integration with PGlite.

```bash
npm i @electric-sql/pglite typeorm-pglite
```

--------------------------------

### Installation

Source: https://pglite.dev/docs/pglite-socket

Install the pglite-socket package using npm, yarn, or pnpm.

```bash
npm install @electric-sql/pglite-socket
# or
yarn add @electric-sql/pglite-socket
# or
pnpm add @electric-sql/pglite-socket
```

--------------------------------

### Prisma connection string

Source: https://pglite.dev/docs/orm-support

Example connection string for Prisma when using PGlite.

```bash
DATABASE_URL="prisma+postgres://localhost:PORT/?api_key=__API_KEY__"
```

--------------------------------

### Upgrade code example

Source: https://pglite.dev/docs/upgrade

Example code demonstrating how to use pg_dump to create a database dump from the previous version of PGlite and import it into a new instance.

```typescript
// in your upgrade code, you can then use your current PGlite
// version to dump the database:
import { PGlite } from '@electric-sql/pglite' // current version
import { PGlite as PGlite04 } from 'pglite-04' // next version

[...] 

// pg03 is your PGlite instance with version 0.3.x
const currentVersion = await pg03.query<{ version: string }>( 
  'SELECT version();'
)
console.log(currentVersion.rows[0].version)

const dumpDir = await pg03.dumpDataDir('none')
const pgCurr = await PGlite.create({ loadDataDir: dumpDir })
const dumpResult = await pgDump({ pg03: pgCurr })

// pg03 is PGlite instance with version 0.3.x
const pg03 = await PGlite04.create()

pg03.exec(await dumpResult.text())
// adapt the SEARCH_PATH to your needs
await pg03.exec('SET SEARCH_PATH = public;')

const nextVersion = await pg03.query<{ version: string }>(
  'SELECT version();'
)
console.log(nextVersion.rows[0].version)

```

--------------------------------

### Update data using parameterized queries

Source: https://pglite.dev/docs

Use parameterized queries with the .query method to safely update data.

```javascript
const ret = await db.query(
  'UPDATE todo SET task = $2, done = $3 WHERE id = $1',
  [5, 'Update a task using parameterized queries', true],
)
```

--------------------------------

### Query Example

Source: https://pglite.dev/docs/api

Example of executing a single SQL statement with parameters.

```typescript
await pg.query('INSERT INTO test (name) VALUES ($1);', ['test'])
// { affectedRows: 1 },

```

--------------------------------

### Kysely PGlite installation

Source: https://pglite.dev/docs/orm-support

Commands to install Kysely and PGlite for integration.

```bash
npm i @electric-sql/pglite kysely
```

--------------------------------

### Install the PGlite REPL component

Source: https://pglite.dev/docs/repl

Install the PGlite REPL component using npm.

```bash
npm install @electric-sql/pglite-repl
```

--------------------------------

### Loading Extensions

Source: https://pglite.dev/docs/api

Example of how to load PGlite and Postgres extensions.

```typescript
import { PGlite } from '@electric-sql/pglite'
import { live } from '@electric-sql/pglite/live'
import { vector } from '@electric-sql/pglite/vector'

const pg = await PGlite.create({
  extensions: {
    live, // Live query extension, is a PGlite client plugin
    vector, // Postgres pgvector extension
  },
})

// The `live` namespace is added by the use of the
// `live` key in the `extensions` object.
pg.live.query('...')

```

--------------------------------

### Exec Method Example

Source: https://pglite.dev/docs/api

Example of using the exec method to run multiple SQL statements.

```typescript
await pg.exec(
  `
  CREATE TABLE IF NOT EXISTS test (
    id SERIAL PRIMARY KEY,
    name TEXT
  );
  INSERT INTO test (name) VALUES ('test');
  SELECT * FROM test;
`
)
// [
//   { affectedRows: 0 },
//   { affectedRows: 1 },
//   {
//     rows: [
//       { id: 1, name: 'test' }
//     ]
//     affectedRows: 0,
//     fields: [
//       { name: 'id', dataTypeID: '23' },
//       { name: 'name', dataTypeID: '25' },
//     ]
//   }
// ]
```

--------------------------------

### live.changes() usage

Source: https://pglite.dev/docs/live-queries

Example of how to use the live.changes() function to get real-time changes from a query.

```typescript
const ret = pg.live.changes(
  'SELECT * FROM test ORDER BY rand;',
  [],
  'id',
  (res) => {
    // res is a change result object
  },
)
```

--------------------------------

### Install newer version using bun

Source: https://pglite.dev/docs/upgrade

Install the newer version of PGlite alongside the current version in a project that uses a previous minor PGlite version.

```bash
bun install pglite-04@npm:@electric-sql/pglite@0.4.0
```

--------------------------------

### Vite Worker Import Example

Source: https://pglite.dev/docs/bundler-support

An example of how to import a worker in Vite using the recommended ?worker import method.

```typescript
import PGWorker from './worker.js?worker'

export const pglite = new PGliteWorker(
  new PGWorker({
    type: 'module',
      name: 'pglite-worker',
    }),
    {
      // ...your options here
    }
  ),
)
```

--------------------------------

### Drizzle installation

Source: https://pglite.dev/docs/orm-support

Commands to install Drizzle ORM and related packages for PGlite.

```sh
npm i drizzle-orm @electric-sql/pglite
npm i -D drizzle-kit
```

--------------------------------

### Prisma Client usage

Source: https://pglite.dev/docs/orm-support

Example of using Prisma Client to create and query users.

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

await prisma.user.create({
  data: { email: 'alice@example.com' },
})

const users = await prisma.user.findMany()
console.log(users)
```

--------------------------------

### PGLiteSocketHandler Example

Source: https://pglite.dev/docs/pglite-socket

Example of creating a PGlite instance, a socket handler, and a server that uses the handler.

```typescript
import { PGlite } from '@electric-sql/pglite'
import { PGLiteSocketHandler } from '@electric-sql/pglite-socket'
import { createServer, Socket } from 'net'

// Create a PGlite instance
const db = await PGlite.create()

// Create a handler
const handler = new PGLiteSocketHandler({
  db,
  closeOnDetach: true,
  inspect: false,
})

// Create a server that uses the handler
const server = createServer(async (socket: Socket) => {
  try {
    await handler.attach(socket)
    console.log('Client connected')
  } catch (err) {
    console.error('Error attaching socket', err)
    socket.end()
  }
})

server.listen(5432, '127.0.0.1')
```

--------------------------------

### Orange ORM PGlite installation

Source: https://pglite.dev/docs/orm-support

Command to install the Orange ORM library for PGlite integration.

```bash
npm i @electric-sql/pglite orange-orm
```

--------------------------------

### Passing Options to Worker

Source: https://pglite.dev/docs/multi-tab-worker

This example shows how to pass options, including custom metadata, to the PGlite worker. The `init` function in the worker can then utilize these options to configure the PGlite instance.

```javascript
// my-pglite-worker.js
import { PGlite } from '@electric-sql/pglite'
import { worker } from '@electric-sql/pglite/worker'

worker({
  async init(options) {
    const meta = options.meta
    // Do something with additional metadata.
    // or even run your own code in the leader along side the PGlite
    return new PGlite({
      dataDir: options.dataDir,
    })
  },
})

// my-app.js
import { PGliteWorker } from '@electric-sql/pglite/worker'

const pg = new PGliteWorker(
  new Worker(new URL('./my-pglite-worker.js', import.meta.url), {
    type: 'module',
  }),
  {
    dataDir: 'idb://my-db',
    meta: {
      // additional metadata passed to `init`
    },
  },
)
```

--------------------------------

### Usage with Vitest

Source: https://pglite.dev/docs/prepopulatedfs

Example of using prepopulated FS in a Vitest test suite for faster test startup times.

```typescript
import { describe, it, expect, beforeEach } from 'vitest'
import { PGlite } from '@electric-sql/pglite'
import { dataDir } from '@electric-sql/pglite-prepopulatedfs'

describe('query and exec with different data sizes', () => {
  let pg: PGlite

  beforeEach(async () => {
    pg = await PGlite.create({
      loadDataDir: await dataDir(),
    })

    await pg.exec(`
        // setup default data
      `)
  })

  describe('test no. 1', () => {
    ...
  })

  describe('test no. 2', () => {
    ...
  })

  // many more tests here
})
```

--------------------------------

### Install newer version using npm

Source: https://pglite.dev/docs/upgrade

Install the newer version of PGlite alongside the current version in a project that uses a previous minor PGlite version.

```bash
npm install pglite-04@npm:@electric-sql/pglite@0.4.0
```

--------------------------------

### Importing a file using COPY TO

Source: https://pglite.dev/docs/api

Example of importing data into a table from a file using the `COPY TO` command and the virtual `/dev/blob` device.

```typescript
await pg.query("COPY my_table FROM '/dev/blob';", [], {
  blob: MyBlob,
})
```

--------------------------------

### useLiveQuery.sql Usage with String Templating

Source: https://pglite.dev/docs/framework-hooks/vue

Example of using useLiveQuery.sql with string templating to construct SQL queries for the hook equivalent.

```vue
<script lang="ts">
import { useLiveQuery } from '@electric-sql/pglite-vue'

const maxNumber = 100
const items = useLiveQuery.sql`
  SELECT *
  FROM my_table
  WHERE number <= ${maxNumber}
  ORDER BY number;
`
</script>
// ...
```

--------------------------------

### Install newer version using pnpm

Source: https://pglite.dev/docs/upgrade

Install the newer version of PGlite alongside the current version in a project that uses a previous minor PGlite version.

```bash
pnpm install pglite-04@npm:@electric-sql/pglite@0.4.0
```

--------------------------------

### Kysely PGlite integration

Source: https://pglite.dev/docs/orm-support

Example of creating a Kysely instance with the PGliteDialect.

```typescript
import { PGlite } from '@electric-sql/pglite'
import { Kysely, PGliteDialect } from 'kysely'

// See https://kysely.dev/docs/generating-types
interface Database {
  person: {
    id: string
  }
}

const db = new Kysely<Database>({
  dialect: new PGliteDialect({
    pglite: new PGlite(),
  }),
})

const people = await db.selectFrom('person').selectAll().execute()
```

--------------------------------

### providePGlite API Usage

Source: https://pglite.dev/docs/framework-hooks/vue

Example of how to use providePGlite to initiate a PGlite database and make it available to child components.

```vue
<script lang="ts" setup>
import { PGlite } from '@electric-sql/pglite'
import { providePGlite } from '@electric-sql/pglite-vue'

const db = new PGlite()
providePGlite(db)
</script>
// ...
```

--------------------------------

### Install newer version using yarn

Source: https://pglite.dev/docs/upgrade

Install the newer version of PGlite alongside the current version in a project that uses a previous minor PGlite version.

```bash
yarn add pglite-04@npm:@electric-sql/pglite@0.4.0
```

--------------------------------

### Transaction Example

Source: https://pglite.dev/docs/api

Example of using the transaction method to perform operations within a transaction.

```typescript
await pg.transaction(async (tx) => {
  await tx.query(
    'INSERT INTO test (name) VALUES ('$1');',
    [ 'test' ]
  );
  return await ts.query('SELECT * FROM test;');
});
```

--------------------------------

### Connecting to the server using psql

Source: https://pglite.dev/docs/pglite-socket

Examples of connecting to the PGlite server using the psql client via TCP and Unix sockets.

```bash
# TCP connection
PGSSLMODE=disable psql -h localhost -p 5432 -d postgres

# Unix socket connection (if using --path)
PGSSLMODE=disable psql -h /tmp -d postgres
```

--------------------------------

### Configure TypeORM with PGliteDriver

Source: https://pglite.dev/docs/orm-support

Example of configuring a TypeORM DataSource to use the PGliteDriver.

```javascript
import { PGliteDriver, getPGliteInstance } from 'typeorm-pglite'
import { DataSource } from 'typeorm'

const PGliteDataSource = new DataSource({
  type: 'postgres',
  driver: new PGliteDriver().driver,
})

// You can access the internal PGlite instance using getPGliteInstance function
const pgliteDb = await getPGliteInstance()
```

--------------------------------

### useLiveQuery Hook Usage

Source: https://pglite.dev/docs/framework-hooks/vue

Example demonstrating how to use the useLiveQuery hook to reactively receive updates to live query results in Vue.

```vue
<script lang="ts">
import { useLiveQuery } from '@electric-sql/pglite-vue'

const maxNumber = 100
const items = useLiveQuery(
  `
    SELECT *
    FROM my_table
    WHERE number <= $1
    ORDER BY number;
  `,
  [maxNumber],
)
</script>

<template>
  <MyItem v-for="item in items" :item="item" :key="item.id" />
</template>
```

--------------------------------

### Initializing PGliteWorker with Extensions

Source: https://pglite.dev/docs/multi-tab-worker

Example of initializing a PGliteWorker with the 'vector' extension enabled.

```javascript
// my-pglite-worker.js
import { PGlite } from '@electric-sql/pglite'
import { worker } from '@electric-sql/pglite/worker'
import { vector } from '@electric-sql/pglite/vector'

worker({
  async init() {
    return new PGlite({
      extensions: {
        vector,
      },
    })
  },
})
```

--------------------------------

### In-memory FS - Default

Source: https://pglite.dev/docs/filesystems

The in-memory FS is the default when starting PGlite, and it is available on all platforms. All files are kept in memory and there is no persistence, other than calling `pg.dumpDataDir()` and then using the `loadDataDir` option at start. To use the in-memory FS you can use one of these methods: Don't provide a `dataDir` option.

```typescript
const pg = new PGlite()
```

--------------------------------

### Custom Parsers

Source: https://pglite.dev/docs/api

Example of how to define custom parsers for PostgreSQL data types.

```typescript
import { PGlite, types } from '@electric-sql/pglite'

const pg = await PGlite.create({
  parsers: {
    [types.TEXT]: (value) => value.toUpperCase(),
  },
})
```

--------------------------------

### Kysely PGlite lazy instantiation

Source: https://pglite.dev/docs/orm-support

Example of lazy instantiation of PGlite within KyselyDialect.

```typescript
new PGliteDialect({
  pglite: () => new PGlite('./path/to/pgdata'),
})
```

--------------------------------

### Tagged Template Queries Example

Source: https://pglite.dev/docs/api

Demonstrates the usage of tagged template literals for constructing SQL queries with PGlite, including automatic parameter conversion and the use of helper tags like `identifier`, `raw`, `sql`, and `query`.

```typescript
import { identifier, raw, sql, query } from '@electric-sql/pglite/template'

await pg.sql`SELECT * FROM ${identifier`test`} WHERE name = ${'test'}`
// equivalent of pg.query('SELECT * FROM "test" WHERE name = $1', ['test'])

const filterStmt = (filterVar?: string) =>
  filterVar ? sql`WHERE name = ${filterVar}` : raw`WHERE 1=1`

await pg.sql`SELECT * FROM test ${filterStmt('test')}`
// equivalent of pg.query('SELECT * FROM "test" WHERE name = $1', ['test'])
await pg.sql`SELECT * FROM test ${filterStmt(null)}`
// equivalent of pg.query('SELECT * FROM "test" WHERE 1=1, [])

query`SELECT * FROM ${identifier`test`} WHERE name = ${'test'}`
// { query: 'SELECT * FROM "test" WHERE name = $1', params: ['test'] }
```

--------------------------------

### Custom Serializers

Source: https://pglite.dev/docs/api

Example of how to define custom serializers for PostgreSQL data types.

```typescript
import { PGlite, types } from '@electric-sql/pglite'

const pg = await PGlite.create({
  serializers: {
    [types.NUMERIC]: (value) => value.toString(),
  },
})
```

--------------------------------

### Drizzle PGlite integration

Source: https://pglite.dev/docs/orm-support

Example of integrating Drizzle ORM with a PGlite instance.

```typescript
import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';

const client = new PGlite();
const db = drizzle(client);

await db.select().from(...);
```

--------------------------------

### esbuild Workaround: Manual WASM and Data Loading

Source: https://pglite.dev/docs/bundler-support

This example shows how to manually provide PGlite's WASM modules and data bundle when using esbuild, as automatic resolution is not supported.

```typescript
import { PGlite } from '@electric-sql/pglite'

const [pgliteWasmModule, initdbWasmModule, fsBundle] = await Promise.all([
  WebAssembly.compileStreaming(fetch('/pglite.wasm')),
  WebAssembly.compileStreaming(fetch('/initdb.wasm')),
  fetch('/pglite.data').then((response) => response.blob()),
])

const db = await PGlite.create({
  pgliteWasmModule,
  initdbWasmModule,
  fsBundle,
})
```

--------------------------------

### Example Prompt for Wish List App

Source: https://pglite.dev/docs/pglite-socket

A prompt to generate a simple wish list app using TypeScript, React, Vite, Express, and PGlite with its socket server.

```plaintext
Please make a simple wish list app, it should have a single screen for adding items. There should be a single input for adding the text for the item. Keep it simple and minimal.
Show error messages inline in the UI, where the list is, when the backend fails to connect to the database.
Use TypeScript, React, and Vite for the front end app.
The server side should use TypeScript, tsx and Express with a Postgres database using the postgres.js lib and it's `sql` template literal syntax.
Please use concurrently to run both vite and the backend at the same time.
I want to use PGlite and its socket server for development - match these versions:
    "@electric-sql/pglite": "^0.3.2",
    "@electric-sql/pglite-socket": "^0.0.7",
Do something like this to run it:
    "dev": "USE_PGLITE=true npx pglite-server -u /tmp/.s.PGSQL.5432 -r \"npm run dev:both\"",
    "dev:both": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
    "dev:frontend": "vite",
    "dev:backend": "tsx watch server/index.ts",
and the postgres.js config should look something like this:
export const sql = process.env.USE_PGLITE
  ? postgres ({
    host: '/tmp/',
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    max: 1,
    connect_timeout: 0,
  })
  : postgres(connectionString, {
    ssl: process.env.NODE_ENV === 'production',
  });
```

--------------------------------

### Prisma schema definition

Source: https://pglite.dev/docs/orm-support

Example Prisma schema definition for a User model.

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String?
}
```

--------------------------------

### Using the REPL Web Component with Vue.js

Source: https://pglite.dev/docs/repl

Example of how to use the PGlite REPL web component within a Vue.js application.

```vue
<script setup>
import { PGlite } from '@electric-sql/pglite'
import '@electric-sql/pglite-repl/webcomponent'

const pg = new PGlite()
</script>
<template>
  <pglite-repl :pg="pg" />
</template>
```

--------------------------------

### useLiveIncrementalQuery Hook Usage

Source: https://pglite.dev/docs/framework-hooks/vue

Example demonstrating the use of the useLiveIncrementalQuery hook for reactively receiving updates to live query results, utilizing efficient diffing.

```vue
<script lang="ts">
import { useLiveIncrementalQuery } from '@electric-sql/pglite-vue'

const maxNumber = 100
const items = useLiveIncrementalQuery(
  `
    SELECT *
    FROM my_table
    WHERE number <= $1
    ORDER BY number;
  `,
  [maxNumber],
  'id',
)
</script>

<template>
  <MyItem v-for="item in items" :item="item" :key="item.id" />
</template>
```

--------------------------------

### Exposing Extensions on the Main Thread

Source: https://pglite.dev/docs/multi-tab-worker

Example of using PGliteWorker with the 'live' extension exposed to the main thread.

```javascript
import { PGliteWorker } from '@electric-sql/pglite/worker'
import { live } from '@electric-sql/pglite/live'

const pg = new PGliteWorker(
  new Worker(new URL('./my-pglite-worker.js', import.meta.url), {
    type: 'module',
  }),
  {
    extensions: {
      live,
    },
  },
)
```

--------------------------------

### injectPGlite API Usage

Source: https://pglite.dev/docs/framework-hooks/vue

Example of how to use injectPGlite to retrieve the PGlite instance and query it from within Vue components.

```vue
<script lang="ts" setup>
import { onMounted, shallowRef } from 'vue'
import { injectPGlite } from '@electric-sql/pglite-vue'

const db = injectPGlite()

const insertItem = () => {
  db.query("INSERT INTO my_table (name, number) VALUES ('Arthur', 42);")
}
</script>

<template>
  // ...
  <button @click="insertItem">Insert item</button>
  // ...
</template>
```

--------------------------------

### SQL Tagged Template Literal

Source: https://pglite.dev/docs/api

Example of using the sql tagged template literal for creating queries.

```typescript
await pg.sql`SELECT * FROM test WHERE name = ${'test'}`
// equivalent of pg.query('SELECT * FROM test WHERE name = $1', ['test'])
```

--------------------------------

### Connecting to the server using Node.js clients

Source: https://pglite.dev/docs/pglite-socket

Examples of connecting to the PGlite server using Node.js clients like node-postgres and postgres.js, including using the DATABASE_URL environment variable.

```javascript
// Using node-postgres
import pg from 'pg'
const client = new pg.Client({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
})
await client.connect()

// Using postgres.js
import postgres from 'postgres'
const sql = postgres({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
})

// Using environment variable (when using --include-database-url)
const sql = postgres(process.env.DATABASE_URL)
```

--------------------------------

### Query Options - Serializers

Source: https://pglite.dev/docs/api

Example of overriding serializers for specific data types using the query method.

```typescript
import { types } from '@electric-sql/pglite'
await pg.query(`INSERT INTO test (numeric) VALUES ($1);`, [100n], {
  serializers: {
    [types.NUMERIC]: (value: number | bigint) => value.toString(),
  },
})
```

--------------------------------

### Query Options - Parsers

Source: https://pglite.dev/docs/api

Example of overriding parsers for specific data types using the query method.

```typescript
import { types } from '@electric-sql/pglite'
await pg.query(`SELECT * FROM test WHERE name = $1;`, ['test'], {
  parsers: {
    [types.TEXT]: (value) => value.toUpperCase(),
  },
})
```

--------------------------------

### Exporting a table or query to a file

Source: https://pglite.dev/docs/api

Example of exporting data from a table or query to a file using the `COPY FROM` command and the virtual `/dev/blob` device. The exported data is returned as a `Blob` object in the query results.

```typescript
const ret = await pg.query("COPY my_table TO '/dev/blob';")
// ret.blob is a `Blob` object with the data from the copy.
```

--------------------------------

### Orange ORM PGlite usage

Source: https://pglite.dev/docs/orm-support

Example of using Orange ORM with PGlite to create and query tasks.

```javascript
import orange from 'orange-orm'
const db = map.pglite('idb://my-db')

await db.query (
  create table if not exists task (
    id uuid primary key default gen_random_uuid(),
    title text,
    done boolean
  )
)

const map = orange.map((x) => ({ 
  task: x.table('task').map(({ column }) => ({
    id: column('id').uuid().primary(),
    title: column('title').string(),
    done: column('done').boolean(),
  }))
}))

await db.task.insert({ title: 'Write docs', done: false })

const tasks = await db.task.getAll({
  where: (x) => x.done.eq(false),
})
console.log(JSON.stringify(tasks))
```

--------------------------------

### Include the REPL component in a React page

Source: https://pglite.dev/docs/repl

Example of how to include and use the PGlite REPL component in a React application.

```tsx
import { PGlite } from '@electric-sql/pglite'
import { Repl } from '@electric-sql/pglite-repl'

function MyComponent() {
  const pg = new PGlite()

  return (
    <>
      <Repl pg={pg} />
    </>
  )
}
```

--------------------------------

### IndexedDB FS - Set dataDir

Source: https://pglite.dev/docs/filesystems

The IndexedDB FS persists the database to IndexedDB in the browser. It's a layer over the in-memory filesystem, loading all files for the database into memory on start, and flushing them to IndexedDB after each query if they have changed. To use the IndexedDB FS you can use one of these methods: Set the `dataDir` with a `idb://` prefix, the database will be stored in an IndexedDB named with the path provided.

```typescript
const pg = new PGlite('idb://my-database')
```

--------------------------------

### makePGliteDependencyInjector for Typed Injection

Source: https://pglite.dev/docs/framework-hooks/vue

Example of using makePGliteDependencyInjector to create typed versions of providePGlite and injectPGlite, enabling the provision of a PGlite instance with extensions and retained types.

```ts
import { PGlite, PGliteInterfaceExtensions } from '@electric-sql/pglite'
import { live } from '@electric-sql/pglite/live'
import { vector } from '@electric-sql/pglite/vector'
import { makePGliteDependencyInjector } from '@electric-sql/pglite-vue'

const { providePGlite, injectPGlite } = makePGliteDependencyInjector<
  PGlite &
    PGliteInterfaceExtensions<{
      live: typeof live
      vector: typeof vector
    }> 
>()

export { providePGlite, injectPGlite }
```

--------------------------------

### Initialize PGlite with the sync plugin

Source: https://pglite.dev/docs/sync

Initialize a PGlite instance and add the electric sync extension. Also creates a local 'todo' table.

```typescript
import { electricSync } from '@electric-sql/pglite-sync'

const pg = await PGlite.create({
  extensions: {
    electric: electricSync(),
  },
})

await pg.exec $(
  'CREATE TABLE IF NOT EXISTS todo (\n    id SERIAL PRIMARY KEY,\n    task TEXT,\n    done BOOLEAN\n  );'
)
```

--------------------------------

### PGliteProvider Usage

Source: https://pglite.dev/docs/framework-hooks/react

Demonstrates how to initialize a PGlite database and pass it to the PGliteProvider for use in child components.

```typescript
import { PGlite } from "@electric-sql/pglite"
import { live } from "@electric-sql/pglite/live"
import { PGliteProvider } from "@electric-sql/pglite-react"

const db = await PGlite.create({
  extensions: { live }
})

const App = () => {
  // ...

  return (
    <PGliteProvider db={db}>
      // ...
    </PGliteProvider>
  )
}
```

--------------------------------

### Usage with PGlite

Source: https://pglite.dev/docs/prepopulatedfs

Create a PGlite instance with the prepopulated FS by loading the data directory.

```typescript
import { PGlite } from '@electric-sql/pglite'
import { dataDir } from '@electric-sql/pglite-prepopulatedfs'

// Create a PGlite instance with the prepopulated FS
const pg = await PGlite.create({
  loadDataDir: await dataDir(),
})
```

--------------------------------

### OPFS AHP FS - Set dataDir

Source: https://pglite.dev/docs/filesystems

The OPFS AHP filesystem is built on top of the Origin Private Filesystem in the browser and uses an "access handle pool". It is only available when PGlite is run in a Web Worker, this could be any worker you configure. We provide a Multi Tab Worker to aid in using PGlite from multiple tabs in the browser. To use the OPFS AHP FS you can use one of these methods: Set the `dataDir` to a directory within the origins OPFS.

```typescript
const pg = new PGlite('opfs-ahp://path/to/datadir/')
```

--------------------------------

### Prisma database push

Source: https://pglite.dev/docs/orm-support

Command to push Prisma schema changes to the database.

```bash
npx prisma db push
```

--------------------------------

### useLiveQuery Hook Usage

Source: https://pglite.dev/docs/framework-hooks/react

Demonstrates using the useLiveQuery hook to reactively re-render components based on live query results.

```typescript
import { useLiveQuery } from '@electric-sql/pglite-react'

const MyComponent = () => {
  const maxNumber = 100
  const items = useLiveQuery(`
    SELECT *
    FROM my_table
    WHERE number <= $1
    ORDER BY number;
  `, [maxNumber])

  return (
    <>
      {
        items.map((item) =>
          <MyItem item={item} />
        )
      }
    </>
  )
}
```

--------------------------------

### Import PGlite

Source: https://pglite.dev/docs/api

The main constructor is imported as PGlite.

```typescript
import { PGlite } from '@electric-sql/pglite'
```

--------------------------------

### OPFS AHP FS - Import and pass explicitly

Source: https://pglite.dev/docs/filesystems

To use the OPFS AHP FS you can use one of these methods: Import and pass the FS explicitly

```typescript
import { OpfsAhpFS } from '@electric-sql/pglite/opfs-ahp'
const pg = new PGlite({
  fs: new OpfsAhpFS('./path/to/datadir/'),
})
```

--------------------------------

### PGliteWorker Initialization

Source: https://pglite.dev/docs/multi-tab-worker

This code snippet shows how to create a worker file for PGlite and initialize it to run in a web worker. It demonstrates using the `worker` wrapper with an `init` option to return a PGlite instance.

```javascript
// my-pglite-worker.js
import { PGlite } from '@electric-sql/pglite'
import { worker } from '@electric-sql/pglite/worker'

worker({
  async init() {
    // Create and return a PGlite instance
    return new PGlite()
  },
})
```

--------------------------------

### Next.js Configuration: Transpile Packages

Source: https://pglite.dev/docs/bundler-support

This configuration snippet shows how to add `@electric-sql/pglite` to the `transpilePackages` array in `next.config.js` for Next.js projects.

```javascript
const nextConfig = {
  swcMinify: false,
  transpilePackages: [
    '@electric-sql/pglite-react', // Optional
    '@electric-sql/pglite',
  ],
}

export default nextConfig
```

--------------------------------

### Node FS - Set dataDir

Source: https://pglite.dev/docs/filesystems

The Node FS uses the Node.js file system API to implement a VFS for PGLite. It is available in both Node and Bun. To use the Node FS you can use one of these methods: Set the `dataDir` to a directory on your filesystem.

```typescript
const pg = new PGlite('./path/to/datadir/')
```

--------------------------------

### Running npm scripts

Source: https://pglite.dev/docs/pglite-socket

Commands to run the npm scripts defined for PGlite server.

```bash
npm run dev          # Start with persistent database
npm run dev:clean    # Start with in-memory database
```

--------------------------------

### Adding the live extension

Source: https://pglite.dev/docs/live-queries

To use the extension, it needs to be added to the PGlite instance when creating it.

```typescript
import { PGlite } from '@electric-sql/pglite'
import { live } from '@electric-sql/pglite/live'

const pg = await PGlite.create({
  extensions: {
    live,
  },
})
```

--------------------------------

### IndexedDB FS - Import and pass explicitly

Source: https://pglite.dev/docs/filesystems

To use the IndexedDB FS you can use one of these methods: Import and pass the FS explicitly

```typescript
import { IdbFs } from '@electric-sql/pglite'
const pg = new PGlite({
  fs: new IdbFs('my-database'),
})
```

--------------------------------

### Node FS - Import and pass explicitly

Source: https://pglite.dev/docs/filesystems

To use the Node FS you can use one of these methods: Import and pass the FS explicitly

```typescript
import { NodeFS } from '@electric-sql/pglite'
const pg = new PGlite({
  fs: new NodeFS('./path/to/datadir/'),
})
```

--------------------------------

### useLiveQuery.sql Template Usage

Source: https://pglite.dev/docs/framework-hooks/react

Shows how to use the useLiveQuery.sql template literal for constructing SQL queries with the hook.

```typescript
import { useLiveQuery } from '@electric-sql/pglite-react'

const MyComponent = () => {
  const maxNumber = 100
  const items = useLiveQuery.sql`
    SELECT *
    FROM my_table
    WHERE number <= ${maxNumber}
    ORDER BY number;
  `
// ...
}
```

--------------------------------

### useLiveIncrementalQuery Hook Usage

Source: https://pglite.dev/docs/framework-hooks/react

Demonstrates using the useLiveIncrementalQuery hook for efficiently diffing live query results.

```typescript
import { useLiveIncrementalQuery } from '@electric-sql/pglite-react'

const MyComponent = () => {
  const maxNumber = 100
  const items = useLiveIncrementalQuery(`
    SELECT *
    FROM my_table
    WHERE number <= $1
    ORDER BY number;
  `, [maxNumber], 'id')

  return (
    <>
      {
        items.map((item) =>
          <MyItem item={item} />
        )
      }
    </>
  )
}
```

--------------------------------

### Development Scripts for PGlite

Source: https://pglite.dev/docs/pglite-socket

Scripts to run the frontend and backend concurrently using PGlite.

```json
{
  "scripts": {
    "dev": "USE_PGLITE=true npx pglite-server -u /tmp/.s.PGSQL.5432 -r \"npm run dev:both\"",
    "dev:both": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
    "dev:frontend": "vite",
    "dev:backend": "tsx watch server/index.ts"
  }
}
```

--------------------------------

### Windowed live query

Source: https://pglite.dev/docs/live-queries

You can also pass an options object with `offset` and `limit` to implement efficient windowed queries.

```javascript
const ret = pg.live.query({
  query: 'SELECT * FROM test ORDER BY rand;',
  offset: 0,
  limit: 10,
  callback: (res) => {
    // res includes:
    // - rows: the rows for the current window
    // - offset: the current offset
    // - limit: the current limit
    // - totalCount: total number of rows in the full result set
  },
})
```

--------------------------------

### Postgres.js Configuration with PGlite

Source: https://pglite.dev/docs/pglite-socket

Configuration for postgres.js to use PGlite when the USE_PGLITE environment variable is set.

```javascript
export const sql = process.env.USE_PGLITE
  ? postgres ({
    host: '/tmp/',
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    max: 1,
    connect_timeout: 0,
  })
  : postgres(connectionString, {
    ssl: process.env.NODE_ENV === 'production',
  });
```

--------------------------------

### Vite Configuration: Multi-tab Worker Format

Source: https://pglite.dev/docs/bundler-support

This configuration snippet demonstrates how to set the worker format to 'es' in Vite to resolve production build errors related to workers.

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },
  worker: {
    format: 'es',
  },
})
```

--------------------------------

### Include the REPL web component in your page

Source: https://pglite.dev/docs/repl

Include the PGlite REPL web component using a script tag and initialize it with a PGlite instance.

```html
<script
  src="https://cdn.jsdelivr.net/npm/@electric-sql/pglite-repl/dist-webcomponent/Repl.js"
  type="module"
></script>

<!-- Include the Repl web component in your page -->
<pglite-repl id="repl"></pglite-repl>

<script type="module">
  import { PGlite } from 'https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js'

  // Create a PGlite instance
  const pg = new PGlite()

  // Retrieve the Repl element
  const repl = document.getElementById('repl')

  // REPL to your PGlite instance
  repl.pg = pg
</script>
```

--------------------------------

### usePGlite Hook Usage

Source: https://pglite.dev/docs/framework-hooks/react

Shows how to retrieve the PGlite instance using the usePGlite hook and perform queries within a component.

```typescript
import { usePGlite } from "@electric-sql/pglite-react"

const MyComponent = () => {
  const db = usePGlite()

  const insertItem = () => {
    db.query("INSERT INTO my_table (name, number) VALUES ('Arthur', 42);")
  }

  return (
    <>
      <button onClick={insertItem}
    </>
  )
}
```

--------------------------------

### makePGliteProvider for Typed Providers

Source: https://pglite.dev/docs/framework-hooks/react

Illustrates using makePGliteProvider to create a typed PGliteProvider and usePGlite hook, preserving namespaces and types.

```typescript
import { PGlite, PGliteInterfaceExtensions } from '@electric-sql/pglite'
import { LiveNamespace } from '@electric-sql/pglite/live'
import { VectorNamespace } from '@electric-sql/pglite/vector'
import { makePGliteProvider } from '@electric-sql/pglite-react'

const { PGliteProvider, usePGlite } = makePGliteProvider<
  PGlite &
    PGliteInterfaceExtensions<{
      live: typeof live
      vector: typeof vector
    }>
>()

export { PGliteProvider, usePGlite }
```

--------------------------------

### Basic live query

Source: https://pglite.dev/docs/live-queries

This is very similar to a standard query, but takes an additional callback that receives the results whenever they change.

```javascript
const ret = pg.live.query('SELECT * FROM test ORDER BY rand;', [], (res) => {
  // res is the same as a standard query result object
})
```

--------------------------------

### In-memory FS - Import and pass explicitly

Source: https://pglite.dev/docs/filesystems

To use the in-memory FS you can use one of these methods: Import and pass the FS explicitly

```typescript
import { MemoryFS } from '@electric-sql/pglite'
const pg = new PGlite({
  fs: new MemoryFS(),
})
```

--------------------------------

### Vite Configuration: Exclude PGlite from Dependency Optimization

Source: https://pglite.dev/docs/bundler-support

This configuration snippet shows how to exclude `@electric-sql/pglite` from Vite's dependency optimization to prevent potential issues.

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },
})
```

--------------------------------

### Incremental live query

Source: https://pglite.dev/docs/live-queries

It requires an additional `key` argument - the name of a column (often a primary key) on which to key the diff.

```typescript
const ret = pg.live.incrementalQuery(
  'SELECT * FROM test ORDER BY rand;',
  [],
  'id',
  (res) => {
    // res is the same as a standard query result object
  },
)
```

--------------------------------

### In-memory FS - Explicitly set to memory

Source: https://pglite.dev/docs/filesystems

To use the in-memory FS you can use one of these methods: Set the `dataDir` to `memory://`

```typescript
const pg = new PGlite('memory://')
```

--------------------------------

### Connecting PGliteWorker in Main Script

Source: https://pglite.dev/docs/multi-tab-worker

This snippet demonstrates how to connect the `PGliteWorker` to the worker process created in the main script, allowing it to interact with the PGlite instance running in the worker.

```javascript
import { PGliteWorker } from '@electric-sql/pglite/worker'

const pg = new PGliteWorker(
  new Worker(new URL('./my-pglite-worker.js', import.meta.url), {
    type: 'module',
  }),
)

// `pg` has the same interface as a standard PGlite interface
```

--------------------------------

### Single Table Sync

Source: https://pglite.dev/docs/sync

Sync a single table from Electric using the `syncShapeToTable` method.

```typescript
const shape = await pg.electric.syncShapeToTable({
  shape: {
    url: 'http://localhost:3000/v1/shape',
    params: {
      table: 'todo',
    },
  },
  table: 'todo',
  primaryKey: ['id'],
  shapeKey: 'todo', // or null if the shape state does not need to be persisted
  onError: (error) => {
    console.error('Shape sync error', error)
  },
})

// Stop syncing when done
shape.unsubscribe()
```

--------------------------------

### LiveQueryReturn interface

Source: https://pglite.dev/docs/live-queries

The returned value from the call is a Promise of an object with this interface.

```typescript
interface LiveQueryReturn<T> {
  initialResults: Results<T> & {
    offset?: number // Current offset (if windowed)
    limit?: number // Current limit (if windowed)
    totalCount?: number // Total row count (if windowed)
  }
  unsubscribe: () => Promise<void>
  refresh: (options?: { offset?: number; limit?: number }) => Promise<void>
}
```

--------------------------------

### LiveChangesReturn interface

Source: https://pglite.dev/docs/live-queries

Interface definition for the return type of the live.changes() function.

```typescript
interface LiveChangesReturn<T = { [key: string]: any }> {
  fields: { name: string; dataTypeID: number }[]
  initialChanges: Array<Change<T>>
  unsubscribe: () => Promise<void>
  refresh: () => Promise<void>
}
```

--------------------------------

### Multi-Table Sync

Source: https://pglite.dev/docs/sync

Sync multiple tables simultaneously using the `syncShapesToTables` method, ensuring transactional consistency.

```typescript
const sync = await pg.electric.syncShapesToTables({
  shapes: {
    todos: {
      shape: {
        url: 'http://localhost:3000/v1/shape',
        params: { table: 'todo' },
      },
      table: 'todo',
      primaryKey: ['id'],
    },
    users: {
      shape: {
        url: 'http://localhost:3000/v1/shape',
        params: { table: 'users' },
      },
      table: 'users',
      primaryKey: ['id'],
    },
  },
  key: 'my-sync', // or null if the sync state does not need to be persisted
  onInitialSync: () => {
    console.log('Initial sync complete')
  },
  onError: (error) => {
    console.error('Sync error', error)
  },
})

// Stop syncing when done
sync.unsubscribe()
```

--------------------------------

### Change type definitions

Source: https://pglite.dev/docs/live-queries

Type definitions for different types of changes emitted by live.changes().

```typescript
type ChangeInsert<T> = {
  __changed_columns__: string[]
  __op__: 'INSERT'
  __after__: number
} & T

type ChangeDelete<T> = {
  __changed_columns__: string[]
  __op__: 'DELETE'
  __after__: undefined
} & T

type ChangeUpdate<T> = {
  __changed_columns__: string[]
  __op__: 'UPDATE'
  __after__: number
} & T

type Change<T> = ChangeInsert<T> | ChangeDelete<T> | ChangeUpdate<T>
```

--------------------------------

### Configure Vue to ignore pglite- prefix

Source: https://pglite.dev/docs/repl

Configuration for Vue.js to correctly recognize custom elements prefixed with 'pglite-'.

```typescript
app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith('pglite-')
}
```

--------------------------------

### PGlite REPL component props interface

Source: https://pglite.dev/docs/repl

TypeScript interface defining the props for the `<Repl>` component.

```typescript
// The theme to use, auto is auto-switching based on the system
type ReplTheme = 'light' | 'dark' | 'auto'

interface ReplProps {
  pg: PGlite // PGlite db instance
  border?: boolean // Outer border on the component, defaults to false
  lightTheme?: Extension
  darkTheme?: Extension
  theme?: ReplTheme // Defaults to "auto"
}
```

--------------------------------

### pgDump

Source: https://pglite.dev/docs/pglite-tools

pg_dump is a tool for dumping a PGlite database to a SQL file, this is a WASM build of pg_dump that can be used in a browser or other JavaScript environments.

```typescript
import { PGlite } from '@electric-sql/pglite'
import { pgDump } from '@electric-sql/pglite-tools/pg_dump'

const pg = await PGlite.create()

// Create a table and insert some data
await pg.exec $(
  CREATE TABLE test (
    id SERIAL PRIMARY KEY,
    name TEXT
  );
)
await pg.exec $(
  INSERT INTO test (name) VALUES ('test');
)

// store the current search path so it can be used in the restored db
const initialSearchPath = (
  await pg1.query<{ search_path: string }>('SHOW SEARCH_PATH;')
).rows[0].search_path

// Dump the database to a file
const dump = await pgDump({ pg })
// Get the dump text - used for restore
const dumpContent = await dump.text()

// Create a new database
const restoredPG = await PGlite.create()
// ... and restore it using the dump
await restoredPG.exec(dumpContent)

// optional - after importing, set search path back to the initial one
await restoredPG.exec(`SET search_path TO ${initialSearchPath};`)

```

--------------------------------

### Update window position

Source: https://pglite.dev/docs/live-queries

You can update the window position by calling refresh with new offset/limit values.

```javascript
// Move to page 2
await ret.refresh(10, 10)
```