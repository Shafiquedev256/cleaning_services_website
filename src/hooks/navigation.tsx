import { useRef } from "react";

export const useScroll = () => {
  const testimonial = useRef<HTMLDivElement | null>(null);
  const about = useRef<HTMLDivElement | null>(null);
  const cleaningProcess = useRef<HTMLDivElement | null>(null);
  const pricing = useRef<HTMLDivElement | null>(null);

  return { testimonial, about, cleaningProcess, pricing };
};
