"use client";
//library
import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
//style
import style from "./setting-button.module.css";
import addIcon from "@/images/add_icon.png";
//component
//utils

// TODO : click시 서버를 생성하는 modal 생성.
// parallel route를 활용해 modal 생성 예정.
export default function AddChannelIcon() {
  const router = useRouter();
  const pathName = usePathname();
  const iconRef = useRef<HTMLDivElement>(null);
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const iconElement = iconRef.current;
    if (!iconElement) return;

    const handleMouseEnter = (event: MouseEvent) => {
      setTooltipVisible(true);

      // 툴팁 위치 계산
      const rect = iconElement.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + 8,
        left: rect.right + 20,
      });
    };

    const handleMouseLeave = () => setTooltipVisible(false);

    // 이벤트 리스너 추가
    iconElement.addEventListener("mouseenter", handleMouseEnter);
    iconElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      iconElement.removeEventListener("mouseenter", handleMouseEnter);
      iconElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClickIcon = () => {
    if (pathName === `/channels/add`) return;
    router.push(`/channels/add`);
  };

  return (
    <div className={style.container}>
      <div
        className={`${style.semi_wrapper} ${
          isTooltipVisible ? style.visible : ""
        }`}
      ></div>
      <div className={style.icon} ref={iconRef} onClick={handleClickIcon}>
        <Image
          src={addIcon}
          width={48}
          height={48}
          alt="add server icon image"
        />
      </div>
      {isTooltipVisible &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: tooltipPosition.top,
              left: tooltipPosition.left,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              color: "white",
              padding: "8px 12px",
              borderRadius: "4px",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              fontSize: "12px",
              pointerEvents: "none", // 마우스 이벤트 차단
              zIndex: 1000, // 최상단에 표시
            }}
          >
            add channel
          </div>,
          document.body // body에 렌더링
        )}
    </div>
  );
}
