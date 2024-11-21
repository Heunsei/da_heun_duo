"use client";
//library
import { useRef, useState } from "react";
//style
import style from "./page.module.css";
import RecordScreen from "./record-screen";
//component
//utils

export default function Page() {
  // 해당 값이 null -> 연결이 종료
  const [stream, setStream] = useState<MediaStream | null>(null);
  // 녹화되는 화면을 표시해주는 듯한 느낌을 줄 ref
  const mirrorVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={style.container}>
      <div className={style.mirror_container}>
        <RecordScreen
          stream={stream}
          setStream={setStream}
          mirrorRef={mirrorVideoRef}
        />
      </div>
    </div>
  );
}
