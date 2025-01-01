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
        "z-10 flex md:size-24 size-20 items-center justify-center rounded-full p-3",
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
  const laravelRef = useRef(null);
  const nestJsRef = useRef(null);
  const jsRef = useRef(null);
  const skillsRef = useRef(null);
  const reactRef = useRef(null);
  const tsRef = useRef(null);
  const figmaRef = useRef(null);
  const tailwindRef = useRef(null);
  const phpRef = useRef(null);

  return (
    <div className="mt-20">
      <div
        className="relative flex h-auto w-full items-center justify-center overflow-hidden bg-gradient-to-b from-dark to-primary p-10"
        ref={containerRef}
      >
        <div className="flex size-full flex-col md:max-w-4xl w-full max-h-fit items-stretch justify-between gap-14">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={laravelRef}>
              <Icons.laravel />
            </Circle>
            <Circle ref={reactRef}>
              <Icons.react />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-8">
              <Circle ref={nestJsRef}>
                <Icons.nestjs />
              </Circle>
              <Circle ref={tailwindRef}>
                <Icons.tailwind />
              </Circle>
            </div>
            <div
              ref={skillsRef}
              className="z-10 border border-white rounded-md p-3 bg-gradient-to-r from-orange-500 to-blue-20 shadow-inner"
            >
              <p
                data-aos="zoom-in"
                className="text-white font-bold md:text-4xl text-2xl "
              >
                SKILLS
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <Circle ref={phpRef}>
                <Icons.php />
              </Circle>
              <Circle ref={tsRef}>
                <Icons.typescript />
              </Circle>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle title="JavaScript" ref={jsRef}>
              <Icons.javascript />
            </Circle>
            <Circle title="Figma" ref={figmaRef}>
              <Icons.figma />
            </Circle>
          </div>
        </div>

        {/* laravel */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={laravelRef}
          toRef={skillsRef}
          curvature={30}
          pathColor="#fff"
        />
        {/* nestjs */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={nestJsRef}
          toRef={skillsRef}
          curvature={30}
          pathColor="#fff"
        />
        {/* js */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={jsRef}
          toRef={skillsRef}
          curvature={-30}
          pathColor="#fff"
        />
        {/* react */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={reactRef}
          toRef={skillsRef}
          curvature={-30}
          pathColor="#fff"
          reverse
        />
        {/* ts */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={tsRef}
          toRef={skillsRef}
          pathColor="#fff"
          curvature={-30}
          reverse
        />
        {/* figma */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={figmaRef}
          toRef={skillsRef}
          curvature={-30}
          pathColor="#fff"
          reverse
        />
        {/* tailwind */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={tailwindRef}
          toRef={skillsRef}
          curvature={-30}
          pathColor="#fff"
          reverse
        />
        {/* php */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={phpRef}
          toRef={skillsRef}
          curvature={30}
          pathColor="#fff"
          reverse
        />
      </div>
    </div>
  );
}
