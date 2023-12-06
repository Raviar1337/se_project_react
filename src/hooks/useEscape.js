import { useEffect } from "react";
// custom hooks should start with verb `use` to let React know that it's a hook. React controls their calls
export function useEscape(closeModal) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    //  don't forget to remove the listener in the `clean up` function
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
    // here we watch closeModal to launch the effect only if the reference changes
  }, [closeModal]);
}

// useEscape(closeModal)
