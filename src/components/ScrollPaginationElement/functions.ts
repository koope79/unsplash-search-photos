export const throttle = (callback: () => void, timeout: number) => {
  let timer: NodeJS.Timeout | null = null;

  return () => {
    if (timer) return;

    timer = setTimeout(() => {
      callback();
      timer && clearTimeout(timer);
      timer = null;
    }, timeout);
  };
};
