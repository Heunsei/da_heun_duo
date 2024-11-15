"use client";
//library
import { createPortal } from "react-dom";
import { ReactNode, RefObject, useEffect } from "react";
//style
import style from "./auth-modal.module.css";
//component
//utils

export default function AuthModal({
  dialogRef,
  close,
  children,
}: {
  dialogRef: RefObject<HTMLDialogElement>;
  close: () => void;
  children: ReactNode;
}) {
  if (typeof window === "undefined") return <></>;

  return createPortal(
    <dialog
      className={style.modal}
      ref={dialogRef}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          close();
        }
      }}
    >
      {children}
      <button onClick={() => close()}>확인</button>
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
