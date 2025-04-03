import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import PageLocation from "@/components/page-location";
import { ChevronRight, Code2, LayoutGrid, Box, LineChart, Grid3X3, Layers, ArrowRight } from "lucide-react";

export default function NumpyBasicsPage() {
  return (
    <main className="w-full">
      <section className="min-h-screen flex flex-col mb-10 md:pt-16 md:mx-16 border-x border-foreground/10 border-dashed overflow-y-auto">
        <PageLocation />

        <div className="md:ml-72 mt-8 px-7 max-w-4xl">
          {/* Header Section */}
          <div className="flex flex-col space-y-2 mb-8">
            <div className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">NumPy Basics</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Understanding fundamental concepts and operations in NumPy
            </p>
            <Separator className="mt-4" />
          </div>

          {/* Introduction Card */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p>
                NumPy is the foundation for data science and scientific computing in Python. This guide covers the essential concepts you need to effectively work with NumPy arrays.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-primary/10">Arrays</Badge>
                <Badge variant="outline" className="bg-primary/10">Vectors</Badge>
                <Badge variant="outline" className="bg-primary/10">Matrices</Badge>
                <Badge variant="outline" className="bg-primary/10">Tensors</Badge>
                <Badge variant="outline" className="bg-primary/10">Operations</Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Creating Arrays Section */}
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <LayoutGrid className="h-6 w-6 text-primary" />
            Creating Arrays
          </h2>
          <Card className="mb-8">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Creating Arrays from Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The most basic way to create a NumPy array is from a Python list or nested lists:
              </p>
              <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                {`import numpy as np`}<br /><br />
                # 1D array<br />
                {`array_1D = np.array([1, 2, 3])`}<br />
                {`print(f"1D array: {array_1D}")`}<br /><br />
                # 2D array<br />
                {`array_2D = np.array([[1, 2, 3], [4, 5, 6]])`}<br />
                {`print(f"2D array: {array_2D}")`}
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm mb-4">
                <p><strong>Output:</strong></p>
                <p>1D array: [1 2 3]</p>
                <p>2D array: [[1 2 3]<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4 5 6]]</p>
              </div>
            </CardContent>
          </Card>

          {/* Python List vs NumPy Array */}
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <LineChart className="h-6 w-6 text-primary" />
            Python List vs NumPy Array
          </h2>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Python List</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span>Built-in data structure in Python</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span>Can contain mixed data types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span>Flexible but less efficient for numerical operations</span>
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">NumPy Array</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span>N-dimensional array object</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span>Homogeneous (same data type)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span>Memory efficient and faster for numerical computations</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="mb-4">Compare how Python lists and NumPy arrays handle scalar multiplication:</p>
              <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                py_list = [1, 2, 3]<br />
                {`print(f"Python list product with scalar: {py_list * 2}")`}<br /><br />
                {`np_list = np.array([1, 2, 3])`}<br />
                {`print(f"NumPy array product with scalar: {np_list * 2}")`}
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm">
                <p><strong>Output:</strong></p>
                <p>Python list product with scalar: [1, 2, 3, 1, 2, 3]</p>
                <p>NumPy array product with scalar: [2 4 6]</p>
              </div>
            </CardContent>
          </Card>

          {/* Creating Arrays from Scratch */}
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Box className="h-6 w-6 text-primary" />
            Creating an Array from Scratch
          </h2>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="mb-4">
                NumPy provides several functions to create arrays with predefined values:
              </p>
              
              <Tabs defaultValue="zeros" className="mb-4">
                <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
                  <TabsTrigger value="zeros">zeros</TabsTrigger>
                  <TabsTrigger value="ones">ones</TabsTrigger>
                  <TabsTrigger value="full">full</TabsTrigger>
                  <TabsTrigger value="random">random</TabsTrigger>
                  <TabsTrigger value="arange">arange</TabsTrigger>
                  <TabsTrigger value="linspace">linspace</TabsTrigger>
                </TabsList>
                
                <TabsContent value="zeros">
                  <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                    zeros = np.zeros((2, 3))<br />
                    {`print(f"Zeros array: {zeros}")`}
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm">
                    <p><strong>Output:</strong></p>
                    <p>Zeros array: [[0. 0. 0.]<br />&nbsp;[0. 0. 0.]]</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="ones">
                  <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                    {`ones = np.ones((3, 4))`}<br />
                    {`print(f"Ones array: {ones}")`}
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm">
                    <p><strong>Output:</strong></p>
                    <p>{`Ones array: [[1. 1. 1. 1.]`}<br />&nbsp;{`[1. 1. 1. 1.]`}<br />&nbsp;{`[1. 1. 1. 1.]]`}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="full">
                  <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                    full = np.full((2, 3), 9)<br />
                    {`print(f"Full array: {full}")`}
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm">
                    <p><strong>Output:</strong></p>
                    <p>{`Full array: [[9 9 9]`}<br />&nbsp;{`[9 9 9]]`}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="random">
                  <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                    {`random = np.random.random((2, 2))`}<br />
                    {`print(f"Random array: {random}")`}
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm">
                    <p><strong>Output:</strong></p>
                    <p>Random array: [[0.82619444 0.46509452]<br />&nbsp;[0.14376298 0.97862294]]</p>
                    <p className="text-xs text-muted-foreground mt-2">(Your random values will vary)</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="arange">
                  <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                    {`sequence = np.arange(0, 10, 2)`}<br />
                    {`print(f"Sequence array: {sequence}")`}
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm">
                    <p><strong>Output:</strong></p>
                    <p>Sequence array: [0 2 4 6 8]</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="linspace">
                  <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                    {`linspace = np.linspace(0, 1, 5)`}<br />
                    {`print(f"Linspace array: {linspace}")`}
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm">
                    <p><strong>Output:</strong></p>
                    <p>{`Linspace array: [0.   0.25 0.5  0.75 1.  ]`}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Vector, Matrix, Tensor Section */}
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            Vector, Matrix, and Tensor
          </h2>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Vector</h3>
                  <p className="mb-2 text-sm">A one-dimensional array</p>
                  <div className="bg-primary/5 p-3 rounded-md">
                    <pre className="text-xs">[1, 2, 3]</pre>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Matrix</h3>
                  <p className="mb-2 text-sm">A two-dimensional array</p>
                  <div className="bg-primary/5 p-3 rounded-md">
                    <pre className="text-xs">{`[[1, 2],
 [3, 4]]`}</pre>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Tensor</h3>
                  <p className="mb-2 text-sm">A multi-dimensional array</p>
                  <div className="bg-primary/5 p-3 rounded-md">
                    <pre className="text-xs">{`[[[1, 2],
  [3, 4],
  [5, 6],
  [7, 8]]]`}</pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                vector = np.array([1, 2, 3])<br />
                {`print(f"Vector: {vector}")`}<br /><br />
                {`matrix = np.array([[1, 2], [3, 4]])`}<br />
                {`print(f"Matrix: {matrix}")`}<br /><br />
                {`tensor = np.array([[[1, 2], [3, 4], [5, 6], [7, 8]]])`}<br />
                {`print(f"Tensor: {tensor}")`}
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm">
                <p><strong>Output:</strong></p>
                <p>Vector: [1 2 3]</p>
                <p>Matrix: [[1 2]<br />&nbsp;[3 4]]</p>
                <p>Tensor: [[[1 2]<br />&nbsp; [3 4]<br />&nbsp; [5 6]<br />&nbsp; [7 8]]]</p>
              </div>
            </CardContent>
          </Card>

          {/* Array Properties Section */}
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Grid3X3 className="h-6 w-6 text-primary" />
            Properties of NumPy Arrays
          </h2>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-medium">Shape:</span>
                      <p className="text-sm text-muted-foreground">The dimensions of the array, represented as a tuple</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-medium">Size:</span>
                      <p className="text-sm text-muted-foreground">The total number of elements in the array</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-medium">Data Type:</span>
                      <p className="text-sm text-muted-foreground">The type of elements in the array</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-medium">Dimension:</span>
                      <p className="text-sm text-muted-foreground">{`The number of axes (dimensions) of the array`}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                {`arr = np.array([[1, 2, 3], [4, 5, 6]])`}<br />
                {`print(f"Original array:\n{arr}")`}<br /><br />
                {`print(f"Array shape: {arr.shape}")`}<br />
                {`print(f"Array size: {arr.size}")`}<br />
                {`print(f"Dimension of array: {arr.ndim}")`}<br />
                {`print(f"Data type of array: {arr.dtype}")`}
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm">
                <p><strong>Output:</strong></p>
                <p>{`Original array:`}<br />{`[[1 2 3]`}<br />{` [4 5 6]]`}</p>
                <p>{`Array shape: (2, 3)`}</p>
                <p>Array size: 6</p>
                <p>Dimension of array: 2</p>
                <p>Data type of array: int64</p>
              </div>
            </CardContent>
          </Card>

          {/* Array Reshaping Section */}
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <LayoutGrid className="h-6 w-6 text-primary" />
            Array Reshaping
          </h2>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="mb-4">
                Reshaping changes the shape of an array without changing its data. The new shape must have the same total number of elements as the original array.
              </p>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md mb-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">{`reshape():`}</span>
                    <span>Returns a new array with the specified shape</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">{`flatten():`}</span>
                    <span>Returns a copy of the array collapsed into one dimension</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">{`ravel():`}</span>
                    <span>{`Returns a flattened array (may return a view instead of a copy)`}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">T:</span>
                    <span>{`Transposes the array (swaps rows and columns)`}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-neutral-950 text-neutral-50 p-4 rounded-md font-mono text-sm mb-4">
                {`arr = np.arange(1, 13)`}<br />
                {`print(f"Array before reshaping: {arr}")`}<br /><br />
                {`reshaped_arr = arr.reshape(3, 4)`}<br />
                {`print(f"Reshaped array:\n{reshaped_arr}")`}<br /><br />
                {`flattened_arr = reshaped_arr.flatten()`}<br />
                {`print(f"Flattened array: {flattened_arr}")`}<br /><br />
                {`raveled_arr = reshaped_arr.ravel()`}<br />
                {`print(f"Raveled array: {raveled_arr}")`}<br /><br />
                transposed_arr = reshaped_arr.T<br />
                {`print(f"Transposed array:\n{transposed_arr}")`}
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md text-sm">
                <p><strong>Output:</strong></p>
                <p>Array before reshaping: [ 1  2  3  4  5  6  7  8  9 10 11 12]</p>
                <p>Reshaped array:<br />[[ 1  2  3  4]<br /> [ 5  6  7  8]<br /> [ 9 10 11 12]]</p>
                <p>Flattened array: [ 1  2  3  4  5  6  7  8  9 10 11 12]</p>
                <p>Raveled array: [ 1  2  3  4  5  6  7  8  9 10 11 12]</p>
                <p>Transposed array:<br />[[ 1  5  9]<br /> [ 2  6 10]<br /> [ 3  7 11]<br /> [ 4  8 12]]</p>
              </div>
              
              <div className="mt-6 border-t pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> When using <code className="text-primary">reshape()</code> with the special value <code className="text-primary">-1</code> for one dimension, NumPy will automatically calculate the size of that dimension. For example, <code className="text-primary">arr.reshape(3, -1)</code> would create a 3-row array, with the number of columns calculated automatically.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Further Learning Section */}
          <Card className="mb-10 bg-gradient-to-r from-primary/5 to-primary/10 border-none">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Continue Learning</h2>
              <p className="mb-4">
                Now that you understand the basics of NumPy arrays, you can explore more advanced topics:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-2">Array Indexing</h3>
                  <p className="text-sm text-muted-foreground">Accessing and modifying array elements</p>
                </div>
                <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-2">Array Operations</h3>
                  <p className="text-sm text-muted-foreground">Mathematical and statistical operations</p>
                </div>
                <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-2">Broadcasting</h3>
                  <p className="text-sm text-muted-foreground">Operations with arrays of different shapes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}