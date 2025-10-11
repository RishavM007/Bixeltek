"use client";
import { useEffect } from "react";

export default function NoCopy() {
  useEffect(() => {
    const disable = (e: Event) => e.preventDefault();
    document.addEventListener("contextmenu", disable);
    document.addEventListener("copy", disable);
    document.addEventListener("cut", disable);

    return () => {
      document.removeEventListener("contextmenu", disable);
      document.removeEventListener("copy", disable);
      document.removeEventListener("cut", disable);
    };
  }, []);

  return null;
}
