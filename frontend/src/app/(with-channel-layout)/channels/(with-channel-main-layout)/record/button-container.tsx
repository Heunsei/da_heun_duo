"use client";
//library
import Image from "next/image";
import { Dispatch, useRef, useState } from "react";
//style
import style from "./button-container.module.css";
import recordIcon from "@/images/recordButton.png";
import recordStopIcon from "@/images/recordStopButton.png";
//component
//utils

export default function ButtonContainer({
  isRecording,
  setIsRecording,
  stream,
}: {
  isRecording: boolean;
  setIsRecording: Dispatch<React.SetStateAction<boolean>>;
  stream: any;
}) {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recordedBlobs, setRecordedBlobs] = useState<Blob[]>([]);

  const handleStartRecording = () => {
    setRecordedBlobs([]);
    try {
      mediaRecorderRef.current = new MediaRecorder(stream, {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: "video/webm",
      });
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          setRecordedBlobs((prev) => [...prev, event.data]);
        }
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (e) {
      console.log(`MediaRecorder error`, e);
      setIsRecording(false);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  return (
    <div className={style.button_container}>
      {isRecording ? (
        <button className={style.record_button} onClick={handleStopRecording}>
          <Image
            src={recordStopIcon}
            width={32}
            height={32}
            alt="stop record icon"
          />
        </button>
      ) : (
        <button className={style.record_button} onClick={handleStartRecording}>
          <Image
            src={recordIcon}
            width={32}
            height={32}
            alt="start record icon"
          />
        </button>
      )}
    </div>
  );
}
