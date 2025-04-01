import LanguageBoxes from "@/components/language-boxes";
import PageLocation from "@/components/page-location";
import { languages } from "@/lib/datalists";
import { ChevronDownIcon } from "lucide-react";

export default function ReferencePage() {
  return (
    <main className="w-full">
      <section className="flex flex-col space-y-12 py-20 md:mx-16 border-x border-foreground/20 border-dashed">
        <div className="w-full flex px-5 md:px-10">
          <PageLocation />
        </div>

        <div className="w-full flex flex-col items-center justify-center space-y-12">
          <h1 className="text-6xl font-bold text-center">Reference</h1>
          <p className="text-center px-5 md:px-20 text-lg text-foreground/60 leading-8">
            The reference section is a collection of code snippets and concepts that are used in the development of the website. Filter through the list of titles to refer the particular code snippet or concept you are looking for.
          </p>
          <p className="text-center text-xs px-5 md:px-20 text-foreground/60 leading-8">
            &#x2764; More to come soon :&#41;
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-muted-foreground text-center text-sm animate-pulse">
            Scroll down to see more</p>
          <ChevronDownIcon size={32} className="text-foreground/50 animate-bounce cursor-pointer hover:text-foreground/80" />
        </div>
      </section>

      <section className="border-t border-foreground/20 border-dashed border-x md:ml-16 md:mr-16 px-10">
        <div className="py-10 ">
          <h2 className="text-4xl text-center font-bold">Quick Links</h2>
        </div>
        <LanguageBoxes
          languages={languages}
          title="reference"
        />
      </section>
    </main>
  );
}