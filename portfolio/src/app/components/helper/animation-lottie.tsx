"use client"; 
import dynamic from "next/dynamic";
import Lottie from "lottie-react";

interface AnimationLottieProps {
  animationPath: object;
  width?: string;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({ animationPath, width = "95%" }) => {
  if (typeof window === "undefined") return null; // Prevents SSR issues

  return <Lottie animationData={animationPath} loop autoplay style={{ width }} />;
};

// Dynamically import with SSR disabled
export default dynamic(() => Promise.resolve(AnimationLottie), { ssr: false });
