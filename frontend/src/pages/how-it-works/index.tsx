import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { useRef } from "react";


export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  return (
    <section id="how-it-works" className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl">
            <h1 className="text-4xl font-bold">How it works</h1>
            <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, inventore, a, repellat consectetur illum numquam hic ullam ut asperiores recusandae voluptatem ducimus omnis id voluptatum. Fugit optio ducimus sequi cum.</p>
        </div>
      <div
        className="relative h-[260px] flex w-full items-center justify-center overflow-hidden bg-background p-10 py-20"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row justify-between">
            <div ref={div1Ref} className="bg-white z-50 border p-5 rounded-md">
              <h1 className="font-bold text-3xl">Information</h1>
              <p className="text-slate-500">Enter your details.</p>
            </div>
            <div ref={div2Ref} className="bg-white z-50 border p-5 rounded-md">
              <h1 className="font-bold text-3xl">Data Secure</h1>
              <p className="text-slate-500">Enter your details.</p>
            </div>
            <div ref={div3Ref} className="bg-white z-50 border p-5 rounded-md">
              <h1 className="font-bold text-3xl">Add Cards</h1>
              <p className="text-slate-500">Enter your details.</p>
            </div>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
          duration={3}
          curvature={200}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div3Ref}
          duration={3}
          curvature={-200}
        />
      </div>
    </section>
  );
};
