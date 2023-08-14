import { useEffect, useCallback, useRef } from "react";

type OneOrMore<T> = T | T[];

export interface UseOutsideClickProps {
  container: OneOrMore<HTMLElement | null>;
  callback: () => void;
}
/**
 * @description
 * 입력한 컨테이너 밖의 요소에서 클릭 이벤트가 발생하였을때 콜백을 호출합니다.
 */

export const useOutsideClick = ({
  container,
  callback,
}: UseOutsideClickProps) => {
  const containers = useRef<HTMLElement[]>([]);

  /**
   * @description
   * Container가 배열이라면 할당합니다. 아니라면 배열로 감싼다음 할당합니다
   */
  useEffect(() => {
    containers.current = (
      Array.isArray(container) ? container : [container]
    ).filter((item) => item !== null) as HTMLElement[];
  }, [container]);

  /**
   * @description
   *  MouseEvent 또는 TouchEvent 이벤트 객체를 인자로 받으며 어디에서나 클릭 또는 터치 이벤트가 발생할 때 실행됩니다.
   */
  const handleClickOutside = useCallback(
    ({ target }: MouseEvent | TouchEvent) => {
      if (target === null) return;

      if (containers.current.length === 0) return;

      //containers 안에 있는 ref중 하나라도 클릭됐다면 callback을 실행시키지 않아요
      if (containers.current.some((item) => item.contains(target as Node)))
        return;

      callback();
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  });
};
