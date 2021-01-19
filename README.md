<h2 align="center">Backend</h2>

<p align="center">Back-end development</p>

```bash
    npm init -y
    
    npm install --save-dev jest

    npm install --save-dev @types/jest

    npm install --save express

    npm install --save-dev @types/express
```

```bash
    tsc --init
```

<h6 align="center">Tests</h6>

```bash
    yarn test --passWithNoTests
```

<h6 align="center">Run</h6>

```bash
    yarn ts-node-dev --transpile-only --respawn --ignore-watch node_modules src/server.ts
```