import { forwardRef, useRef } from "react";

import { cn } from "../../@/lib/utils";
import { AnimatedBeam } from "../../components/magicui/animated-beam";
import { Icons } from "./Icons";
const Circle = forwardRef(({ className, title, children }, ref) => {
  return (
    <div
      data-aos="zoom-in"
      ref={ref}
      title={title}
      // className={cn(
      //   "z-10 flex size-12 items-center justify-center rounded-full  bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
      //   className
      // )}
      className={cn(
        "z-10 flex size-20 items-center justify-center rounded-full p-3",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function Skills() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <div>
      <div
        className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-dark to-primary p-10"
        ref={containerRef}
      >
        <div className="flex size-full flex-col max-w-3xl max-h-[200px] items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <Icons.laravel />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.react />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <Icons.nestjs />
            </Circle>
            <div
              ref={div4Ref}
              className="z-10 rounded-md p-3 bg-gradient-to-r from-orange-500 to-blue-20 shadow-inner"
            >
              <p
                data-aos="zoom-in"
                className="text-white font-bold text-4xl border-white "
              >
                SKILLS
              </p>
            </div>

            <Circle ref={div6Ref}>
              <Icons.typescript />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle title="JavaScript" ref={div3Ref}>
              <Icons.javascript />
            </Circle>
            <Circle title="Figma" ref={div7Ref}>
              <Icons.figma />
            </Circle>
          </div>
        </div>

        {/* laravel */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={30}
          endYOffset={-10}
        />
        {/* nestjs */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        {/* js */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={-30}
          endYOffset={10}
        />
        {/* react */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-30}
          endYOffset={10}
          reverse
        />
        {/* ts */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        {/* figma */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={30}
          endYOffset={-10}
          reverse
        />
      </div>
    </div>
  );
}
