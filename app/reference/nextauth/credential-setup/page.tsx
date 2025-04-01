import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, FileText, Info, Code } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageLocation from "@/components/page-location";
import { credentialSetupCodes } from "@/codes/nextauth/setup/credential-setup";
import CopyButton from "@/components/copy-button";

export default function CredentialSetup() {
  const requiredFiles = [
    { name: "next-auth.d.ts", description: "Type definitions for NextAuth" },
    { name: "auth.ts", description: "Authentication configuration" },
    { name: "provider.ts", description: "Auth provider setup" },
    { name: "/app/api/auth/[...nextauth]/route.ts", description: "API route for authentication" }
  ];

  return (
    <main className="w-full">
      <section className="min-h-screen flex flex-col mb-10 md:pt-20 md:mx-16 border-x border-foreground/10 border-dashed overflow-y-auto">
        <PageLocation />

        <div className="md:ml-72 mt-8 px-7 max-w-4xl">
          <div className="flex flex-col space-y-2 mb-8">
            <h1 className="text-4xl font-bold">Credential Setup</h1>
            <p className="text-muted-foreground">Configure authentication for your application</p>
            <Separator className="mt-4" />
          </div>

          <Card className="mb-8">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Info size={20} className="text-primary" />
                <CardTitle className="text-xl">Getting Started</CardTitle>
              </div>
              <CardDescription>
                Follow these steps to set up authentication in your Next.js application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Authentication is handled through NextAuth.js, which provides a complete solution for
                authentication in Next.js applications. Ensure all required files are properly configured
                to enable secure user authentication.
              </p>
              <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                Authentication Ready
              </Badge>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-primary" />
                <CardTitle className="text-xl">Required Files</CardTitle>
              </div>
              <CardDescription>
                The following files must be present in your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {requiredFiles.map((file) => (
                  <li key={file.name} className="flex items-start gap-3 p-3 rounded-md border border-border hover:bg-accent/50 transition-colors">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">{file.name}</code>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{file.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-md border border-border bg-muted/50">
                <p className="text-sm text-muted-foreground">
                  Make sure all files are properly configured according to the
                  <a href="#" className="text-primary hover:underline mx-1">authentication documentation</a>
                  to ensure your authentication system works correctly.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Code size={20} className="text-primary" />
                <CardTitle className="text-xl">Code Snippets</CardTitle>
              </div>
              <CardDescription>
                Reference implementations for the required files
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="next-auth" className="w-full">
                <TabsList className="h-full flex flex-row flex-wrap mb-4 gap-2">
                  <TabsTrigger value="next-auth">next-auth.d.ts</TabsTrigger>
                  <TabsTrigger value="auth">auth.ts</TabsTrigger>
                  <TabsTrigger value="provider">provider.ts</TabsTrigger>
                  <TabsTrigger value="api">API Route</TabsTrigger>
                  <TabsTrigger value="login-api">Login API</TabsTrigger>
                </TabsList>

                {credentialSetupCodes.map(code => (
                  <TabsContent value={code.id} className="mt-0">
                    <div className="rounded-md border border-border">
                      <div className="flex items-center justify-between border-b border-border px-4 py-2">
                        <div className="flex items-center gap-2">
                          <FileText size={16} className="text-muted-foreground" />
                          <span className="font-medium">{code.title}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">{code.type}</Badge>
                      </div>
                      <pre className="relative p-4 bg-muted/30 overflow-x-auto text-sm font-mono">
                        <CopyButton code={code.code} className="absolute top-3 right-3" />
                        {code.code}
                      </pre>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {code.description}
                    </p>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="mt-6 p-4 rounded-md border border-border bg-accent/20">
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-primary mt-0.5" />
                  <p className="text-sm">
                    These code snippets are examples. You may need to customize them based on your specific requirements
                    and project structure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}