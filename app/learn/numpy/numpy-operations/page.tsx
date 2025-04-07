import CodeBlock from "@/components/code-block";
import PageLocation from "@/components/page-location";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Calculator, ChartBar, PlusSquare, Grid, ArrowRightLeft, Database } from "lucide-react";

export default function NumPyOperationsPage() {
  return (
    <main className="w-full">
      <section className="min-h-screen flex flex-col pb-10 md:pt-18 md:mx-16 border-x border-foreground/10 border-dashed overflow-y-auto">
        <PageLocation />

        <div className="md:ml-72 mt-8 px-7 max-w-4xl">
          {/* Hero Section */}
          <div className="flex flex-col space-y-4 mb-10">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                <Package className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-4xl font-bold">
                NumPy Operations
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Master the core operations of NumPy to unlock efficient numerical computing capabilities in your Python projects.
            </p>
            <Separator className="mt-2" />
          </div>

          {/* Introduction Card */}
          <Card className="border-l-[6px] border-l-blue-500 shadow-lg overflow-hidden bg-white dark:bg-neutral-900">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Overview of NumPy Operations
              </CardTitle>
              <CardDescription className="text-base">
                NumPy is the foundation of the Python scientific computing stack, enabling efficient manipulation of numerical data.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="mb-6 text-base leading-relaxed">
                NumPy provides tools for working with multi-dimensional arrays and matrices, along with mathematical functions to operate on these data structures with high performance:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <div className="mt-1 p-1.5 bg-neutral-100 dark:bg-neutral-900/40 rounded-md flex-shrink-0">
                      <Calculator className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-base">Arithmetic Operations</h3>
                      <p className="text-muted-foreground">Fast element-wise addition, subtraction, multiplication, and division across entire arrays.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 p-1.5 bg-neutral-100 dark:bg-neutral-900/40 rounded-md flex-shrink-0">
                      <ChartBar className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-base">Statistical Functions</h3>
                      <p className="text-muted-foreground">Calculate mean, median, standard deviation, variance, and other statistical measures.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 p-1.5 bg-neutral-100 dark:bg-neutral-900/40 rounded-md flex-shrink-0">
                      <Grid className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-base">Linear Algebra</h3>
                      <p className="text-muted-foreground">Perform matrix operations, compute eigenvalues, solve linear equations, and more.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-3">
                    <div className="mt-1 p-1.5 bg-neutral-100 dark:bg-neutral-900/40 rounded-md flex-shrink-0">
                      <ArrowRightLeft className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-base">Broadcasting</h3>
                      <p className="text-muted-foreground">Efficiently operate on arrays of different shapes without creating unnecessary copies.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 p-1.5 bg-neutral-100 dark:bg-neutral-900/40 rounded-md flex-shrink-0">
                      <PlusSquare className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-base">Universal Functions (ufuncs)</h3>
                      <p className="text-muted-foreground">Fast vectorized operations that process arrays element by element with optimized C implementations.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 p-1.5 bg-neutral-100 dark:bg-neutral-900/40 rounded-md flex-shrink-0">
                      <Database className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-base">Indexing & Slicing</h3>
                      <p className="text-muted-foreground">Precisely extract or modify specific elements or sections of arrays with intuitive syntax.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-neutral-50 dark:bg-neutral-900/20 rounded-lg border border-neutral-100 dark:border-neutral-800">
                <p className="text-sm text-neutral-800 dark:text-neutral-300 font-medium">
                  {`NumPy's operations are optimized for performance, often running 10-100x faster than equivalent Python code using lists.`}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* coding block */}
          <Card className="mt-8">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-2xl font-semibold">Slicing and Indexing</CardTitle>
              <CardDescription className="text-base">
                NumPy arrays can be sliced and indexed in a similar way to Python lists, but with additional functionality for multi-dimensional arrays.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              <Tabs defaultValue="slicing" orientation="horizontal">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="slicing">Slicing</TabsTrigger>
                  <TabsTrigger value="indexing">Indexing</TabsTrigger>
                </TabsList>
                <TabsContent value="slicing" className="flex flex-col space-y-2">
                  <div className="pt-5 px-2">
                    <p className="text-muted-foreground">Slicing allows you to extract a portion of an array. For example, to get the first three elements of a 1D array:</p>
                  </div>
                  <div className="">
                    <CodeBlock>
                      {`import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

print(arr[0:5])  # Output: [1 2 3 4 5]
print(arr[5:])   # Output: [ 6  7  8  9 10]
print(arr[:5])   # Output: [1 2 3 4 5]
print(arr[::2])  # Output: [1 3 5 7 9]
print(arr[1::2])  # Output: [ 2  4  6  8 10]
print(arr[::-1])  # Output: [10  9  8  7  6  5  4  3  2  1]`}
                    </CodeBlock>
                  </div>
                </TabsContent>
                <TabsContent value="indexing" className="flex flex-col space-y-2">
                  <div className="pt-5 px-2">
                    <p className="text-muted-foreground">Indexing allows you to access specific elements of an array. For example, to get the second element of a 1D array:</p>
                  </div>
                  <div>
                    <CodeBlock>
                      {`import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

print(arr[-1])  # Output: 10
print(arr[-3:])  # Output: [ 8  9 10]
print(arr[-3:-1])  # Output: [8 9]`}
                    </CodeBlock>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-2xl font-semibold">Slicing and Indexing in Matrices</CardTitle>
              <CardDescription className="text-base">
                NumPy arrays can be sliced and indexed in a similar way to Python lists, but with additional functionality for multi-dimensional arrays.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              <CodeBlock>
                {`import numpy as np
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

print("Specific element:", arr[1, 2])  # Output: 6
print("Entire row:", arr[1])  # Output: [4 5 6]
print("Entire column:", arr[:, 1])  # Output: [2 5 8]
`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-2xl font-semibold">Sorting</CardTitle>
              <CardDescription className="text-base">
                NumPy provides functions to sort arrays in various ways, including sorting along a specific axis or using custom comparison functions.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              <p className="mb-4 text-muted-foreground">
                NumPy uses the <code>np.sort()</code> function to sort arrays. You can specify the axis along which to sort, and whether to return a sorted copy or sort in place.
              </p>
              <CodeBlock>
                {`import numpy as np
arr = np.array([3, 1, 4, 2, 5])
sorted_arr = np.sort(arr)
print("Sorted array:", sorted_arr)  # Output: [1 2 3 4 5]

arr2 = np.array([[3, 1, 4], [2, 5, 0]])
sorted_arr2 = np.sort(arr2, axis=0)
print("Sorted array along axis 0:", sorted_arr2)
# Output: [[2 1 0]
#         [3 5 4]]
`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-2xl font-semibold">Filtering</CardTitle>
              <CardDescription className="text-base">
                NumPy allows you to filter arrays based on conditions, returning only the elements that meet the criteria.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              <p className="mb-4 text-muted-foreground">
                NumPy uses boolean indexing to filter arrays. You can create a boolean mask based on conditions and use it to index the array.
              </p>
              <CodeBlock>
                {`import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
mask = arr > 5
filtered_arr = arr[mask]
print("Filtered array:", filtered_arr)  # Output: [ 6  7  8  9 10 ]`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-2xl font-semibold">{`Fancy Indexing vs np.where()`}</CardTitle>
              <CardDescription className="text-base">
                Fancy indexing allows you to access multiple array elements using a list or array of indices, while <code>np.where()</code> returns the indices of elements that satisfy a condition.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              <CodeBlock>
                {`import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
indices = [0, 2, 4, 6, 8]
fancy_indexed_arr = arr[indices]
print("Fancy indexed array:", fancy_indexed_arr)  # Output: [1 3 5 7 9]

arr2 = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
indices = np.where(arr2 > 5, "true", "false")
print("Indices where condition is true:", indices)  # Output: ['false' 'false' 'false' 'false' 'false' 'true' 'true' 'true' 'true' 'true']
`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-2xl font-semibold">Shape Comparison</CardTitle>
              <CardDescription className="text-base">
                NumPy allows you to compare the shapes of two arrays, which can be useful for ensuring compatibility in operations.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              <CodeBlock>
                {`arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
arr3 = np.array([7, 8, 9, 10])

print("Is arr1 equal to arr2?", arr1.shape == arr2.shape) # Output: True
print("Is arr1 equal to arr3?", arr1.shape == arr3.shape) # Output: False`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-2xl font-semibold">Concatenation</CardTitle>
              <CardDescription className="text-base">
                NumPy allows you to concatenate arrays along a specified axis, enabling you to combine data from multiple sources.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              <Tabs defaultValue=".concatenate()" orientation="horizontal">
                <TabsList className="h-full flex flex-wrap gap-2">
                  <TabsTrigger value=".concatenate()">{`.concatenate()`}</TabsTrigger>
                  <TabsTrigger value=".vstack()">{`.vstack()`}</TabsTrigger>
                  <TabsTrigger value=".hstack()">{`.hstack()`}</TabsTrigger>
                  <TabsTrigger value=".dstack()">{`.dstack()`}</TabsTrigger>
                </TabsList>
                <TabsContent value=".concatenate()" className="flex flex-col space-y-2">
                  <div className="pt-5 px-2">
                    <p className="text-muted-foreground">Concatenate two or more arrays along an existing axis.</p>
                  </div>
                  <div>
                    <CodeBlock>
                      {`arr1 = np.array([[1, 2], [3, 4]])
arr2 = np.array([[5, 6], [7, 8]])

print("Concatenating two arrays: ", np.concatenate((arr1, arr2), axis=0)) # Output: [[1 2] [3 4] [5 6] [7 8]]`}
                    </CodeBlock>
                  </div>
                </TabsContent>
                <TabsContent value=".vstack()" className="flex flex-col space-y-2">
                  <div className="pt-5 px-2">
                    <p className="text-muted-foreground">{`Stack arrays in sequence vertically (row-wise).`}</p>
                  </div>
                  <div>
                    <CodeBlock>
                      {`arr1 = np.array([[1, 2], [3, 4]])
new_row = np.array([[5, 6]])

with_new_row = np.vstack((arr1, new_row))
print("After adding new row: ", with_new_row) # Output: [[1 2] [3 4] [5 6]]`}
                    </CodeBlock>
                  </div>
                </TabsContent>
                <TabsContent value=".hstack()" className="flex flex-col space-y-2">
                  <div className="pt-5 px-2">
                    <p className="text-muted-foreground">{`Stack arrays in sequence horizontally (column-wise).`}</p>
                  </div>
                  <div>
                    <CodeBlock>
                      {`arr1 = np.array([[1, 2], [3, 4]])
new_col = np.array([[7], [8]])

with_new_col = np.hstack((arr1, new_col))
print("After adding new column:\n", with_new_col) # Output: [[1 2 7] [3 4 8]]`}
                    </CodeBlock>
                  </div>
                </TabsContent>
                <TabsContent value=".dstack()" className="flex flex-col space-y-2">
                  <div className="pt-5 px-2">
                    <p className="text-muted-foreground">{`Stack arrays in sequence depth-wise (along the third axis).`}</p>
                  </div>
                  <div>
                    <CodeBlock>
                      {`arr1 = np.array([[1, 2], [3, 4]])
new_depth = np.array([[5, 6], [7, 8]])

with_new_depth = np.dstack((arr1, new_depth))
print("After adding new depth:\n", with_new_depth) # Output: [[[1 5] [2 6]] [[3 7] [4 8]]]`}
                    </CodeBlock>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-2xl font-semibold">Deleting elements</CardTitle>
              <CardDescription className="text-base">
                NumPy provides functions to delete elements from arrays, either by index or by condition.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base">
              <p className="mb-4 text-muted-foreground">
                NumPy uses the <code>{`np.delete()`}</code> function to delete elements from arrays. You can specify the index or condition for deletion.
              </p>
              <CodeBlock>
                {`arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print("Original array: ", arr)

deleted = np.delete(arr, 2)  # Delete the element at index 2
print("After deleting index 2: ", deleted)  # Output: [ 1  2  4  5  6  7  8  9 10]

deleted = np.delete(arr, [1, 3, 5]) # Delete elements at indices 1, 3, and 5
print("After deleting indices 1, 3, and 5: ", deleted)  # Output: [ 1  3  5  7  8 10]

deleted = np.delete(arr, [0, 2, 4], axis=0)  # Delete elements at indices 0, 2, and 4 along axis 0
print("After deleting indices 0, 2, and 4 along axis 0: ", deleted)  # Output: [ 2  4  6  8 10]`}
              </CodeBlock>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}