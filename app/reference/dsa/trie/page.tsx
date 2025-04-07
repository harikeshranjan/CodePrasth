import PageLocation from "@/components/page-location";
import { Separator } from "@/components/ui/separator";
import { Package, CheckCircle, Circle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TriePage() {
  const easyProblems = [
    "Implement Trie (Insert, Search, StartsWith)",
    "Search for a Word in Trie",
    "Check if a Word Exists in Dictionary",
    "Count Unique Prefixes for Words",
    "Delete a Word from Trie"
  ];
  
  const mediumProblems = [
    "Auto-Complete System (Return All Words with Given Prefix)",
    "Word Search in 2D Grid (Backtracking + Trie)",
    "Longest Word with All Prefixes Present",
    "Replace Words with Root Words from Dictionary",
    "Implement Magic Dictionary",
    "Design Add and Search Words Data Structure",
    "Implement Phone Directory using Trie"
  ];
  
  const hardProblems = [
    "Palindrome Pairs",
    "Word Break II (Using Trie + Memoization)",
    "Maximum XOR of Two Numbers in an Array (Using Binary Trie)",
    "Concatenated Words Problem",
    "Power of 2 Trie – Check if Binary Representation is a Prefix",
    "Design a Search Suggestion System (Leetcode)",
    "Sum of Prefix Scores of Strings (Trie + Frequency Count)"
  ];   

  return (
    <main className="w-full">
      <section className="min-h-screen flex flex-col pb-10 md:pt-18 md:mx-16 border-x border-foreground/10 border-dashed overflow-y-auto">
        <PageLocation />

        <div className="md:ml-72 mt-8 px-7 max-w-4xl">
          {/* Hero Section */}
          <div className="flex flex-col space-y-4 mb-10">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold">
                Trie
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              This page contains the collection of problems related to tries. Each problem is categorized into three levels: Easy, Medium, and Hard. You can filter the problems based on their difficulty level.
            </p>
            <Separator className="mt-2" />
          </div>

          {/* Content Section */}
          <div className="mt-8 space-y-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="easy" className="text-green-500">Easy</TabsTrigger>
                <TabsTrigger value="medium" className="text-yellow-500">Medium</TabsTrigger>
                <TabsTrigger value="hard" className="text-red-500">Hard</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6 space-y-8">
                {/* Easy Section */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <CardTitle>Easy Level</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                        4 Problems
                      </Badge>
                    </div>
                    <CardDescription>Foundational trie manipulation techniques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {easyProblems.map((problem, index) => (
                        <li key={`easy-${index}`} className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs">
                            {index + 1}
                          </span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Medium Section */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Circle className="h-5 w-5 text-yellow-500" />
                        <CardTitle>Medium Level</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                        6 Problems
                      </Badge>
                    </div>
                    <CardDescription>Intermediate problem-solving techniques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {mediumProblems.map((problem, index) => (
                        <li key={`medium-${index}`} className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs">
                            {index + 1}
                          </span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Hard Section */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <CardTitle>Hard Level</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                        6 Problems
                      </Badge>
                    </div>
                    <CardDescription>Advanced trie algorithms and optimizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {hardProblems.map((problem, index) => (
                        <li key={`hard-${index}`} className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs">
                            {index + 1}
                          </span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="easy" className="mt-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <CardTitle>Easy Level</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                        4 Problems
                      </Badge>
                    </div>
                    <CardDescription>Foundational trie manipulation techniques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {easyProblems.map((problem, index) => (
                        <li key={`easy-tab-${index}`} className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs">
                            {index + 1}
                          </span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="medium" className="mt-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Circle className="h-5 w-5 text-yellow-500" />
                        <CardTitle>Medium Level</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                        6 Problems
                      </Badge>
                    </div>
                    <CardDescription>Intermediate problem-solving techniques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {mediumProblems.map((problem, index) => (
                        <li key={`medium-tab-${index}`} className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs">
                            {index + 1}
                          </span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hard" className="mt-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <CardTitle>Hard Level</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                        6 Problems
                      </Badge>
                    </div>
                    <CardDescription>Advanced trie algorithms and optimizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {hardProblems.map((problem, index) => (
                        <li key={`hard-tab-${index}`} className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs">
                            {index + 1}
                          </span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
}