export default function Footer() {
  return (
    <footer className="w-full border-t border-foreground/20 border-dashed bg-white dark:bg-neutral-950 sticky bottom-0 z-[100]">
      <div className="flex justify-center items-center h-16 md:mx-16 md:ml-16 border-x border-foreground/20 border-dashed">
        <p className="text-sm font-medium">Made with &#x2764; using NextJs 15 and ShadCN</p>
      </div>
    </footer>
  );
}