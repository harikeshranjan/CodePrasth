const installPackage = `npm i express\nnpm i -D typescript\nnpm i -D @types/node\nnpm i -D @types/express\nnpm i -D nodemon\nnpm i -D ts-node`

const tsconfigCmd = `npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`

const tsconfig = `{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*", "src/types/*"]
    }
  },
  "include": ["./src/**/*"]
}`

const scriptPackageJson = `"start": "nodemon src/index.ts",`

const indexTS = `import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.listen(port, () => {
  return console.log("Server is listening on")
})`

const vercelJson = `{
    "version": 2,
    "builds": [
        {
            "src": "dist/index.js",
            "use": "@vercel/node",
            "config": { "includeFiles": ["dist/**"] }
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "dist/index.js"
        }
    ]
}`

const preCommitCmd = `npm i -D pre-commit
npm i -D rimraf`

const preCommitScript = `"scripts": {
  "start": "nodemon src/index.ts",
  "build": "rimraf dist && tsc",
  "ts.check": "tsc --project tsconfig.json",
  "add-build": "git add dist",
  "test": "echo \"Error: no test specified\" && exit 1"
}`

const preCommitPackageJson = `"pre-commit": [
    "ts.check",
    "build",
    "add-build"
]`

export {
  installPackage,
  tsconfigCmd,
  tsconfig,
  scriptPackageJson,
  indexTS,
  vercelJson,
  preCommitCmd,
  preCommitScript,
  preCommitPackageJson
}