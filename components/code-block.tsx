import CopyButton from "./copy-button";

export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-neutral-100 dark:bg-neutral-950/45 p-4 rounded-md">
      <CopyButton 
        code={children as string}
        className="absolute top-4 right-4"
      />
      <pre className="overflow-x-auto">
        <code className="text-sm text-neutral-800 dark:text-neutral-200">
          {children}
        </code>
      </pre>
    </div>
  );
}