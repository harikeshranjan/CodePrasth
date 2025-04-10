import CodeBlock from "@/components/code-block";
import PageLocation from "@/components/page-location";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Package } from "lucide-react";

export default function FastAPICrashCourse() {
  return (
    <main className="w-full">
      <section className="min-h-screen flex flex-col pb-16 md:pt-20 md:mx-16 border-x border-foreground/10 border-dashed overflow-y-auto">
        <PageLocation />

        <div className="md:ml-72 mt-8 px-7 max-w-4xl">
          {/* Hero Section */}
          <div className="flex flex-col space-y-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 border border-primary/20 rounded-xl">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight">
                FastAPI Crash Course
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              This is a crash course on FastAPI, a modern web framework for building APIs with Python 3.6+ based on standard Python type hints.
            </p>
            <Separator className="mt-2" />
          </div>

          <div className="space-y-10">
            {/* Installation Guide */}
            <Card className="shadow-none border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Installation Guide
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  To install FastAPI, you can use pip. Open your terminal and run the following command:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-medium text-lg">Setting up the virtual environment</h3>
                  <CodeBlock>
                    {`python -m venv venv
source venv/bin/activate # On MacOS/Linux
venv/Scripts/activate # On Windows`}
                  </CodeBlock>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-lg">Installing FastAPI and Uvicorn</h3>
                  <CodeBlock>pip install fastapi uvicorn</CodeBlock>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-lg">Creating <code className="bg-primary/10 px-2 rounded">requirements.txt</code></h3>
                  <CodeBlock>pip freeze &gt; requirements.txt</CodeBlock>
                </div>
              </CardContent>
            </Card>

            {/* main.py creation */}
            <Card className="shadow-none border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Create <code className="bg-primary/10 px-2 rounded">main.py</code> file
                </CardTitle>
                <CardDescription>
                  Add this basic API setup in your <code>main.py</code> file:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock>
                  {`from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Tea(BaseModel):
  id: int
  name: str
  origin: str

teas: List[Tea] = []

@app.get("/")
def read_root():
  return {
    "message": "Welcome to the tea house",
    "received": True
  }

@app.get("/get-teas")
def get_teas():
  return teas

@app.post("/add-teas")
def add_teas(tea: Tea):
  teas.append(tea)
  return tea

@app.put("/teas/{tea_id}")
def update_teas(tea_id: int, updated_tea: Tea):
  for index, tea in enumerate(teas):
    if tea.id == tea_id:
      teas[index] = updated_tea
      return updated_tea
  return {"error": "Tea not found", "received": False}

@app.delete("/teas/{tea_id}")
def delete_teas(tea_id: int):
  for index, tea in enumerate(teas):
    if tea.id == tea_id:
      return teas.pop(index)
  return {"error": "Tea not found", "received": False}

@app.get("/teas/{tea_id}")
def get_tea(tea_id: int):
  for tea in teas:
    if tea.id == tea_id:
      return tea
  return {"error": "Tea not found", "received": False}`}
                </CodeBlock>
              </CardContent>
            </Card>

            {/* Running Server */}
            <Card className="shadow-none border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Running the Server
                </CardTitle>
                <CardDescription>
                  Use this command to start your FastAPI development server:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-medium text-lg">Run the server</h3>
                  <CodeBlock>uvicorn main:app --reload</CodeBlock>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-lg">Visit your local server</h3>
                  <CodeBlock>
                    http://127.0.0.1:8000/
                  </CodeBlock>
                  <CodeBlock>
                    {`{"message": "Welcome to the tea house", "received": true}`}
                  </CodeBlock>
                </div>
              </CardContent>
            </Card>

            {/* API Docs */}
            <Card className="shadow-none border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Interactive API Documentation
                </CardTitle>
                <CardDescription>
                  FastAPI provides built-in Swagger UI. You can access it at:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock>http://127.0.0.1:8000/docs</CodeBlock>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}