"use client";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Loader from "@/components/Loader";
import Work from "@/components/Work/Index";

const WorkHome = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>{loaderFinished ? <Work /> : <Loader timeline={timeline} />}</main>
  );
};

export default WorkHome;
