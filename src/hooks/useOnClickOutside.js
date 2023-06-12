import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
   useEffect(() => {
      const listener = (event) => {
         //console.log("event.target", event.target);
         if(!ref.current || ref.current.contains(event.target)){ //현재선택된게없어도 선택된게있어도 return
            return;
         }
         handler();
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
         document.removeEventListener("mousedown",listener);
         document.removeEventListener("touchstart",listener);
      }
   }, [ref, handler])

}