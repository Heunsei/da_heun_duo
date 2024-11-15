import { useRef } from "react";

export default function useModal() {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => {
    ref.current?.showModal();
  };
  const close = () => {
    ref.current?.close();
  };
  return {
    ref,
    open,
    close,
  };
}
