import { debounce } from "lodash";
import { useEffect, useMemo } from "react";

export interface UseDebounceProps<F extends (...args: any[]) => any> {
  callback: F;
  wait: number;
  options?: Parameters<typeof debounce>[2];
}

export const useDebounce = <F extends (...args: any[]) => any>({
  callback,
  wait,
  options,
}: UseDebounceProps<F>) => {
  const debouncedCallback = useMemo(() => {
    return debounce(callback, wait, options);
  }, [callback, wait, options]);

  useEffect(() => {
    return () => debouncedCallback.cancel();
  }, [debouncedCallback]);

  return debouncedCallback;
};
