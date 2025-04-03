"use client";

import PageLocation from "@/components/page-location";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, Terminal, Package, CheckCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NumpyGettingStarted() {
  const router = useRouter();

  return (
    <main className="w-full">
      <section className="min-h-screen flex flex-col mb-10 md:pt-16 md:mx-16 border-x border-foreground/10 border-dashed overflow-y-auto">
        <PageLocation />

        <div className="md:ml-72 mt-8 px-7 max-w-4xl">
          {/* Header Section */}
          <div className="flex flex-col space-y-2 mb-10">
            <div className="flex items-center gap-2">
              <Package className="h-8 w-8 text-blue-500" />
              <h1 className="text-4xl font-bold">NumPy Installation</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              A comprehensive guide to installing NumPy for scientific computing in Python
            </p>
            <Separator className="mt-4" />
          </div>

          {/* Introduction Card */}
          <Card className="mb-8 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl">What is NumPy?</CardTitle>
              <CardDescription>The fundamental package for scientific computing with Python</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                NumPy is a powerful library that provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays efficiently.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Fast and efficient multi-dimensional array operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Comprehensive mathematical functions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Tools for integrating C/C++ and Fortran code</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Powerful linear algebra, Fourier transform, and random number capabilities</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation Methods Tabs */}
          <h2 className="text-2xl font-semibold mb-4">Installation Methods</h2>
          <Tabs defaultValue="pip" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="pip">pip</TabsTrigger>
              <TabsTrigger value="conda">conda</TabsTrigger>
              <TabsTrigger value="source">From Source</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pip" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    {`Using pip (recommended)`}
                  </CardTitle>
                  <CardDescription>
                    The most straightforward way to install NumPy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-950 text-slate-50 p-4 rounded-md font-mono text-sm mb-4">
                    pip install numpy
                  </div>
                  <p>To install a specific version:</p>
                  <div className="bg-slate-950 text-slate-50 p-4 rounded-md font-mono text-sm mt-2">
                    {`pip install numpy==1.24.3`}
                  </div>
                </CardContent>
              </Card>
              
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Recommendation</AlertTitle>
                <AlertDescription>
                  We recommend using a virtual environment to avoid conflicts with other packages.
                </AlertDescription>
              </Alert>
            </TabsContent>
            
            <TabsContent value="conda" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Using conda
                  </CardTitle>
                  <CardDescription>
                    {`Ideal if you're using the Anaconda distribution`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-950 text-slate-50 p-4 rounded-md font-mono text-sm">
                    conda install numpy
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="source" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Building from source
                  </CardTitle>
                  <CardDescription>
                    For advanced users or custom configurations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-950 text-slate-50 p-4 rounded-md font-mono text-sm">
                    {`git clone https://github.com/numpy/numpy.git`}<br />
                    {`cd numpy`}<br />
                    {`pip install -e .`}
                  </div>
                </CardContent>
              </Card>
              
              <Alert className="bg-amber-50 text-amber-900 border-amber-200">
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                  Building from source requires additional development tools and dependencies.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>

          {/* Verification Section */}
          <h2 className="text-2xl font-semibold mb-4">Verifying Your Installation</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Test Your NumPy Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{`After installation, verify that NumPy works by importing it in Python:`}</p>
              <div className="bg-slate-950 text-slate-50 p-4 rounded-md font-mono text-sm mb-4">
                $ python<br />
                {`>>> import numpy as np`}<br />
                {`>>> print(np.__version__)`}<br />
                {`>>> np.array([1, 2, 3]).mean()`}<br />
                2.0
              </div>
            </CardContent>
          </Card>

          {/* System Requirements */}
          <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Minimum Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-500" />
                      Python 3.8 or later
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-500" />
                      {`RAM: 256MB (minimum)`}
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-500" />
                      Disk space: ~100MB
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Recommended Setup</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-500" />
                      Python 3.10 or later
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-500" />
                      RAM: 2GB+ for larger datasets
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-500" />
                      64-bit operating system
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps Card */}
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <Card className="mb-10">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-2">Ready to dive into NumPy?</h3>
                  <p className="text-neutral-400 mb-4">
                    {`Now that you have NumPy installed, explore our tutorials to learn how to create arrays, perform mathematical operations, and leverage NumPy's full potential.`}
                  </p>
                  <div className="flex gap-3">
                    <Button onClick={() => router.push('/learn/numpy/basics')} variant={"default"} className="cursor-pointer">
                      Basics
                    </Button>
                    <Button onClick={() => router.push('/https://numpy.org/doc/stable/user/absolute_beginners.html')} variant={"outline"} className="cursor-pointer">
                      Official Docs
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-5xl font-bold">
                    np
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}