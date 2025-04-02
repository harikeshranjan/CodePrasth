import { indexTS, installPackage, preCommitCmd, preCommitPackageJson, preCommitScript, scriptPackageJson, tsconfig, tsconfigCmd, vercelJson } from "@/codes/vercel/deployement/express-ts-deployment";
import CopyButton from "@/components/copy-button";
import PageLocation from "@/components/page-location";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Code, ExternalLink, FileCode, GitBranch, Info, Play, RefreshCw, Settings, Terminal } from "lucide-react";

export default function ExpressTSDeployment() {
  return (
    <main className="w-full">
      <section className="min-h-screen flex flex-col mb-10 md:pt-20 md:mx-16 border-x border-foreground/10 border-dashed overflow-y-auto">
        <PageLocation />
        
        <div className="md:ml-72 mt-6 px-7 max-w-4xl pb-20">
          <div className="flex flex-col space-y-2 mb-6">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold">Express + TypeScript Deployment</h1>
              <Badge className="ml-4 bg-primary/20 text-primary border-primary/20 py-1 flex gap-1 items-center">
                <Code size={14} />
                Guide
              </Badge>
            </div>
            <p className="text-muted-foreground text-lg">Deploy your Express TypeScript application to Vercel in a few simple steps</p>
            <Separator className="mt-4" />
          </div>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <Card className="border border-border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">1</span>
                  </div>
                  <h2 className="text-2xl font-semibold">Express + TypeScript Boilerplate App</h2>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">✏️ Setup</Badge>
                </div>
                
                <p className="mb-6 text-muted-foreground">
                  Create an Express project with TypeScript. Follow these steps to make a boilerplate for the project. 
                  <span className="text-xs ml-1">{`(GitHub repo link is provided at the end of the article)`}</span>
                </p>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Terminal size={18} className="text-primary" />
                      <h3 className="font-medium">Initialize node project</h3>
                    </div>
                    <div className="relative">
                      <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono">npm init -y</pre>
                      <CopyButton code="npm init -y" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Terminal size={18} className="text-primary" />
                      <h3 className="font-medium">{`Install packages (you can use npm/yarn/pnpm)`}</h3>
                    </div>
                    <div className="relative">
                      <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono">{installPackage}</pre>
                      <CopyButton code="npm i express\nnpm i -D typescript\nnpm i -D @types/node\nnpm i -D @types/express\nnpm i -D nodemon\nnpm i -D ts-node" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <FileCode size={18} className="text-primary" />
                      <h3 className="font-medium">Create <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">tsconfig.json</code></h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      To work with TypeScript we need to make tsconfig.json file which will help to compile and build TypeScript files in plain JS. Execute the command below:
                    </p>
                    <div className="relative">
                      <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono">{tsconfigCmd}</pre>
                      <CopyButton code="npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Once the file is created you can keep it as is, or clean up non-necessary stuff. Replace content of <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">tsconfig.json</code> with the following:
                    </p>
                    <div className="relative">
                      <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono">{tsconfig}</pre>
                      <CopyButton code={`{
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
}`} />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <FileCode size={18} className="text-primary" />
                      <h3 className="font-medium">Update <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">scripts</code> in <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">package.json</code></h3>
                    </div>
                    <div className="relative">
                      <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono">{scriptPackageJson}</pre>
                      <CopyButton code='"start": "nodemon src/index.ts",' />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Code size={18} className="text-primary" />
                      <h3 className="font-medium">Write express server code: Create file: <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">src/index.ts</code></h3>
                    </div>
                    <div className="relative">
                      <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono">{indexTS}</pre>
                      <CopyButton code={indexTS} />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Play size={18} className="text-primary" />
                      <h3 className="font-medium">Spin up server</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Run <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">yarn start</code> or <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">npm run start</code> command in terminal to start the express server. You can open your browser and go to <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">localhost:8080</code>. The API will return the response of <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">Express Typescript on Vercel</code>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Step 2 */}
            <Card className="border border-border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">2</span>
                  </div>
                  <h2 className="text-2xl font-semibold">Initialize git in our project</h2>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">📥 Git</Badge>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <GitBranch size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Make a <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">.gitignore</code> file</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Create this in the root of the folder. Add <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">node_modules</code> to it. If .gitignore file exists, check that <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">node_modules</code> is added to it.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Terminal size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Execute <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">git init</code></h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {`Run this in the terminal (from the root of the project) or you can use VS Code's source control tab to initialize the git repository.`}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <ExternalLink size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Connect local repo to remote</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {`You can use any version control system (GitHub/Bitbucket) to publish your repository.`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Step 3 */}
            <Card className="border border-border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">3</span>
                  </div>
                  <h2 className="text-2xl font-semibold">Create Vercel project</h2>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">🗃️ Vercel</Badge>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={16} className="text-primary" />
                      <p className="text-muted-foreground">Go to vercel.com → Login</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={16} className="text-primary" />
                      <p className="text-muted-foreground">{`Login using the Version control platform where you've kept your repository`}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={16} className="text-primary" />
                      <p className="text-muted-foreground">From the dashboard → Add new project → Select your repository → Deploy</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={16} className="text-primary" />
                      <p className="text-muted-foreground">After deployment you will see something similar to this:</p>
                    </div>
                    <div className="px-4 py-3 bg-red-500/10 text-red-600 border border-red-200 rounded-md flex items-center gap-2 mt-3">
                      <span className="font-medium">ERROR 🚨</span>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      {`Don't worry... Just follow the next steps to fix it. 👍`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Step 4 */}
            <Card className="border border-border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">4</span>
                  </div>
                  <h2 className="text-2xl font-semibold">Add Vercel config in app</h2>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">⚙️ Config</Badge>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      In the above step, after your first deploy is completed, you can see that we&apos;re not getting <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">Express Typescript on Vercel</code> response from the API.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      To make this work as expected, we need to tell Vercel that this is an API and you need to serve this as a serverless function.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      For this, simply we need to add <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">vercel.json</code> file in the root of our project. Paste the code below in the file:
                    </p>
                    
                    <div className="relative">
                      <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono">{vercelJson}</pre>
                      <CopyButton code={vercelJson} />
                    </div>
                    
                    <div className="mt-6 p-4 rounded-md border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900/50">
                      <div className="flex gap-2">
                        <Settings size={16} className="text-amber-600 dark:text-amber-500 mt-0.5" />
                        <div>
                          <span className="font-medium text-amber-800 dark:text-amber-400">NOTE:</span>
                          <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                            Check your tsconfig.json file. The value against <code className="px-1 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 font-mono text-xs">outDir</code> must be kept instead of <code className="px-1 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 font-mono text-xs">dist</code>. If your config file has any other value than <code className="px-1 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 font-mono text-xs">dist</code>, replace it at either of both places.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Step 5 */}
            <Card className="border border-border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">5</span>
                  </div>
                  <h2 className="text-2xl font-semibold">Add a pre-commit hook</h2>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">🏷️ Git Hooks</Badge>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Vercel requires plain JS source files instead of TypeScript. In order to do this, we need to build the project before committing and send compiled JS files so that Vercel can parse those files and serve the API.
                    </p>
                    
                    <div className="space-y-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Terminal size={18} className="text-primary" />
                        <h3 className="font-medium">Install <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">pre-commit</code> and <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">rimraf</code> packages</h3>
                      </div>
                      <div className="relative">
                        <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono">{preCommitCmd}f</pre>
                        <CopyButton code={preCommitCmd} />
                      </div>
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      <div className="flex items-center gap-2">
                        <FileCode size={18} className="text-primary" />
                        <h3 className="font-medium">Modify <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">scripts</code> field in <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">package.json</code> file</h3>
                      </div>
                      <div className="relative">
                        <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono">{preCommitScript}</pre>
                        <CopyButton code={preCommitScript} />
                      </div>
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      <div className="flex items-center gap-2">
                        <FileCode size={18} className="text-primary" />
                        <h3 className="font-medium">Add new field <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">pre-commit</code> in <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">package.json</code></h3>
                      </div>
                      <div className="relative">
                        <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono">{preCommitPackageJson}</pre>
                        <CopyButton code={preCommitPackageJson} />
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 rounded-md border border-primary/20 bg-primary/5">
                      <div className="flex gap-2">
                        <Info size={16} className="text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">What this will do?</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            {`Whenever you commit, the commands written in pre-commit will be executed. It will check TypeScript errors, build the project, and add the build folder to the staged changes. (If you opt for manual build, don't forget to run the build command to start build.)`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Step 6 */}
            <Card className="border border-border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">6</span>
                  </div>
                  <h2 className="text-2xl font-semibold">Re-Deploy and Re-Check API</h2>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">🔁 Deploy</Badge>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <RefreshCw size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">
                          Commit the changes you have made and push the commit to GitHub. Check on Vercel for the new deployment. Vercel will automatically trigger a new deployment on every push. In case it is not started, you can manually start a deployment.
                        </p>
                        <p className="text-muted-foreground mt-3">
                          Once the new deployment is live, you can copy the deploy URL and run it in the browser. You will see <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">Express Typescript on Vercel</code> as an API response.
                        </p>
                        <div className="mt-4 px-4 py-3 bg-green-500/10 text-green-600 border border-green-200 rounded-md flex items-center gap-2 font-medium">
                          <CheckCircle size={18} />
                          <span>Hurrah! Your Express TypeScript app is now live on Vercel!</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}