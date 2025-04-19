// components/ui/use-toast.ts

import { useCallback } from "react";

export function useToast() {
  const toast = useCallback((message: string) => {
    alert(message); // Production me replace karo better UI toast se
  }, []);

  return { toast };
}
