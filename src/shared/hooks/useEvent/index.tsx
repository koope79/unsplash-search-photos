import { useCallback, useLayoutEffect, useRef } from "react";

type UseEvent = (...args: unknown[]) => unknown;

const useEvent = <T extends UseEvent>(callback: T): T => {
  const callbackRef = useRef<T>(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback<T>(((...args) => {
    const fn = callbackRef.current;
    return fn(...args);
  }) as T, []);
};

export default useEvent;
