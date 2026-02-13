import { ReactNode } from "react";
import { X } from "lucide-react";
import { useEffect } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Dialog({ open, onClose, children }: DialogProps) {
    useEffect(() => {
    if (!open) return; 
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 py-6 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title">
      <h2 id="dialog-title" className="sr-only">Informatie aanvragen</h2>
      <div className="relative w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 shadow-lg max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5 cursor-pointer" />
        </button>

        <div className="mt-0">{children}</div>
      </div>
    </div>
  );
}
