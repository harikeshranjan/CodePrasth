import PageLocation from "@/components/page-location";
import { Separator } from "@/components/ui/separator";
import { Package, CheckCircle, Circle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BacktrackingPage() {
  const easyProblems = [
    "Generate All Subsets (Power Set)",
    "Permutations of String",
    "Rat in a Maze",
    "N-Queens for Small N",
    "Combination Sum I",
    "Word Search"
  ];

  const mediumProblems = [
    "Sudoku Solver",
    "N-Queens (Full Solution)",
    "Combination Sum II",
    "Palindrome Partitioning",
    "Letter Combinations of a Phone Number",
    "Subsets with Duplicates",
    "Expression Add Operators",
    "Restore IP Addresses"
  ];

  const hardProblems = [
    "Word Break II",
    "K-th Permutation Sequence",
    "Minimum Number of Squares to Sum to N",
    "Solve Cryptarithmetic Puzzle",
    "Tiling Problem",
    "Knight's Tour Problem",
    "Partition to K Equal Sum Subsets",
    "Remove Invalid Parentheses"
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
              <h1 className="text-4xl font-bold">Backtracking</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              This page contains the collection of problems related to backtracking. Each problem is categorized into three levels: Easy, Medium, and Hard. You can filter the problems based on their difficulty level.
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
                        {easyProblems.length} Problems
                      </Badge>
                    </div>
                    <CardDescription>Basic recursive backtracking patterns</CardDescription>
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
                        {mediumProblems.length} Problems
                      </Badge>
                    </div>
                    <CardDescription>More complex recursive problem solving</CardDescription>
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
                        {hardProblems.length} Problems
                      </Badge>
                    </div>
                    <CardDescription>Advanced backtracking challenges</CardDescription>
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

              {/* Easy Tab */}
              <TabsContent value="easy" className="mt-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <CardTitle>Easy Level</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                        {easyProblems.length} Problems
                      </Badge>
                    </div>
                    <CardDescription>Basic recursive backtracking patterns</CardDescription>
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

              {/* Medium Tab */}
              <TabsContent value="medium" className="mt-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Circle className="h-5 w-5 text-yellow-500" />
                        <CardTitle>Medium Level</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                        {mediumProblems.length} Problems
                      </Badge>
                    </div>
                    <CardDescription>More complex recursive problem solving</CardDescription>
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

              {/* Hard Tab */}
              <TabsContent value="hard" className="mt-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <CardTitle>Hard Level</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                        {hardProblems.length} Problems
                      </Badge>
                    </div>
                    <CardDescription>Advanced backtracking challenges</CardDescription>
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
