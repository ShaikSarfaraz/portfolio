"use client"

import Lottie from "lottie-react"

interface AnimationLottieProps {
  animationPath: object
  width?: string
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({ animationPath, width = "95%" }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width }}
    />
  )
}

export default AnimationLottie
