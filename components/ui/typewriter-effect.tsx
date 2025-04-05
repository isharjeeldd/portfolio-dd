"use client"

import { cn } from "@/lib/utils"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { useEffect, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  const [displayedText, setDisplayedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        if (currentWordIndex < words.length) {
          const word = words[currentWordIndex]
          if (currentCharIndex < word.text.length) {
            setDisplayedText(prev => prev + word.text[currentCharIndex])
            setCurrentCharIndex(prev => prev + 1)
          } else {
            setDisplayedText(prev => prev + " ")
            setCurrentWordIndex(prev => prev + 1)
            setCurrentCharIndex(0)
          }
        } else {
          clearInterval(interval)
        }
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isInView, words, currentWordIndex, currentCharIndex])

  const renderWords = () => {
    return displayedText.split(" ").map((word, idx) => {
      const originalWord = words[idx]
      return (
        <motion.span
          key={`word-${idx}`}
          className={cn("inline-block", originalWord?.className)}
        >
          {word}
          {idx < displayedText.split(" ").length - 1 ? "\u00A0" : ""}
        </motion.span>
      )
    })
  }
  
  return (
    <motion.div ref={scope} className={cn("text-center inline-block", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block w-[2px] h-[1em] align-middle",
          "bg-primary",
          cursorClassName
        )}
      />
    </motion.div>
  )
}

