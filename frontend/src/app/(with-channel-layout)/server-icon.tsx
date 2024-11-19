"use client";
//library
import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
//style
import temp_img from "@/images/shark.webp";
import style from "./server-icon.module.css";
//component
//utils

export default function ServerIcon({ iconName }: { iconName: string }) {
  // TODO : 추후 iconName을 serverName으로 변경
  // TODO : serverId 를 prop으로 전달받아 routing에 이용

  const router = useRouter();
  const pathName = usePathname();
  const iconRef = useRef<HTMLDivElement>(null);
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  let isVisited = pathName === `/channels/${iconName}`;

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
    if (pathName === `/channels/${iconName}`) return;
    router.push(`/channels/${iconName}`);
  };

  // TODO : 추 후 서버의 id를 받아오는 과정에서 currentPath 값과 비교 후
  // wrapper를 수정하는 로직 필요.

  return (
    <div className={style.container}>
      {isVisited && <div className={style.wrapper}></div>}
      {!isVisited && (
        <div
          className={`${style.semi_wrapper} ${
            isTooltipVisible ? style.visible : ""
          }`}
        ></div>
      )}
      <div className={style.icon} ref={iconRef} onClick={handleClickIcon}>
        <Image src={temp_img} width={48} height={48} alt="" />
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
            {iconName}
          </div>,
          document.body // body에 렌더링
        )}
    </div>
  );
}
