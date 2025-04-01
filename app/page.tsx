"use client";

import LanguageBoxes from "@/components/language-boxes";
import { Button } from "@/components/ui/button";
import { languages } from "@/lib/datalists";
import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full">
      <section className="md:h-screen flex flex-col justify-center items-center space-y-12 py-32 md:ml-16 md:mr-16 border-x border-foreground/20 border-dashed">
        <h1 className="w-full text-4xl md:text-5xl font-bold text-primary/95 px-16 py-5 mt-10 text-center">Code<span className="text-5xl md:text-7xl">Prasth</span> - The directory for developers</h1>
        <p className="text-lg md:text-xl text-primary/50 text-center px-16 max-w-4xl">Never struggle with setup again! We provides ready-to-use <span className="text-primary">code snippets</span> for the trickiest coding tasks—just <span className="text-primary">copy, paste, and code faster</span>.</p>
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
          <div className="space-y-4 md:space-y-0 md:space-x-4 p-10">
            <Button
              variant={"default"}
              className="h-12 w-28 text-lg tracking-wide cursor-pointer"
              onClick={() => router.push("/reference")}
            >
              Reference
            </Button>
            <Button
              variant={"outline"}
              className="h-12 w-28 text-lg tracking-wide cursor-pointer"
              onClick={() => router.push("/learn")}
            >
              Learn
            </Button>
            <p className="text-primary/50 text-center mt-5 text-sm tracking-wide">
              More to come soon :&#41;
            </p>
          </div>
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
