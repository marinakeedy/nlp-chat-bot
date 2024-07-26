import { useEffect, useRef } from "react";

export default function useChatScroll<T>(
  dep: T
): React.MutableRefObject<HTMLDivElement> {
  const ref = useRef<any>();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}
