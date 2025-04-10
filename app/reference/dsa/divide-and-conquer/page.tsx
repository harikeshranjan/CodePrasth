import PageLocation from "@/components/page-location";
import { Separator } from "@/components/ui/separator";
import { SplitSquareHorizontal, CheckCircle, Circle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DivideAndConquerPage() {
  const easyProblems = [
    "Merge Sort",
    "Binary Search",
    "Maximum and Minimum in Array",
    "Power of a Number",
    "Find Peak Element"
  ];

  const mediumProblems = [
    "Majority Element",
    "Quick Sort",
    "Count Inversions",
    "K-th Element of Two Sorted Arrays",
    "Median of Two Sorted Arrays",
    "Search in Rotated Sorted Array"
  ];

  const hardProblems = [
    "Skyline Problem",
    "Closest Pair of Points",
    "Maximum Subarray Sum (with indices)",
    "Strassen's Matrix Multiplication",
    "Rearrange Array in Alternating Positive & Negative Items O(1) Extra Space"
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
                <SplitSquareHorizontal className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold">Divide and Conquer</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              This page contains the collection of problems related to divide and conquer. Each problem is categorized into three levels: Easy, Medium, and Hard. You can filter the problems based on their difficulty level.
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

              {/* All Tab */}
              <TabsContent value="all" className="mt-6 space-y-8">
                {/* Easy */}
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
                    <CardDescription>Starter problems to understand basic divide and conquer steps</CardDescription>
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

                {/* Medium */}
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
                    <CardDescription>Apply core divide and conquer strategies to real-world problems</CardDescription>
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

                {/* Hard */}
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
                    <CardDescription>Challenging scenarios using optimized divide and conquer</CardDescription>
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
                    <CardDescription>Starter problems to understand basic divide and conquer steps</CardDescription>
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
                    <CardDescription>Apply core divide and conquer strategies to real-world problems</CardDescription>
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
                    <CardDescription>Challenging scenarios using optimized divide and conquer</CardDescription>
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
