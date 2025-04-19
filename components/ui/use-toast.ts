// // components/ui/use-toast.ts

// import { useCallback } from "react";

// export function useToast() {
//   const toast = useCallback((message: string) => {
//     alert(message); // Production me replace karo better UI toast se
//   }, []);

//   return { toast };
// }


// components/ui/use-toast.ts

import { useCallback } from "react";

type ToastProps = {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function useToast() {
  const toast = useCallback((props: ToastProps) => {
    const { title, description, variant } = props;

    // For now, simple alert
    alert(`[${variant?.toUpperCase() || "INFO"}] ${title} - ${description}`);

    // TODO: Replace with actual toast library (like Sonner or Radix toast)
  }, []);

  return { toast };
}
