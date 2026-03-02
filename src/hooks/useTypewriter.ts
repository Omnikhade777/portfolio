import { useState, useEffect } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export function useTypewriter({ text, speed = 50, delay = 100 }: UseTypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeNextCharacter, speed);
      } else {
        setIsComplete(true);
      }
    };

    // Initial delay before typing starts
    timeoutId = setTimeout(typeNextCharacter, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
}
