//library
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
//style
import style from "./record-screen.module.css";
import recordIcon from "@/images/recordButton.png";
import ButtonContainer from "./button-container";
import noDevice from "@/images/no_device.png";
//component
//utils

export default function RecordScreen({
  stream,
  setStream,
  mirrorRef,
}: {
  stream: MediaStream | null;
  setStream: Dispatch<SetStateAction<MediaStream | null>>;
  mirrorRef: RefObject<HTMLVideoElement>;
}) {
  // 녹화 상태를 나타낼 state
  const [isRecording, setIsRecording] = useState<boolean>(false);
  // 녹화를 저장할 blob
  const [recordedBlobs, setRecordedBlobs] = useState<Blob[]>([]);

  const getMedia = async () => {
    try {
      const constraints = {
        audio: true,
        video: {
          width: 1920,
          height: 1080,
        },
      };
      const mediaStream = await navigator.mediaDevices.getUserMedia(
        constraints
      );
      setStream(mediaStream); // 상태 업데이트
      if (mirrorRef.current) {
        mirrorRef.current.srcObject = mediaStream; // 비디오 요소에 스트림 연결
      }
    } catch (e) {
      setStream(null); // 상태 초기화
      console.log("Failed to get media stream", e);
    }
  };

  const handleDeviceChange = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );
      if (videoDevices.length === 0) {
        // 비디오 입력 장치가 없으면 스트림 초기화
        setStream(null);
        if (mirrorRef.current) {
          mirrorRef.current.srcObject = null;
        }
      } else if (!stream) {
        // 비디오 입력 장치가 있지만 스트림이 없으면 재시도
        getMedia();
      }
    } catch (e) {
      console.log("Error during device change handling:", e);
    }
  };

  useEffect(() => {
    // 초기 스트림 가져오기
    if (!stream) {
      getMedia();
    }

    // 장치 변경 이벤트 핸들러 등록
    navigator.mediaDevices.addEventListener("devicechange", handleDeviceChange);

    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      navigator.mediaDevices.removeEventListener(
        "devicechange",
        handleDeviceChange
      );
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  useEffect(() => {
    // stream이 갱신될 때마다 비디오 요소에 반영
    if (stream && mirrorRef.current) {
      mirrorRef.current.srcObject = stream;
    }
  }, [stream, mirrorRef]);

  return (
    <div className={style.container}>
      {stream ? (
        <div className={style.video_container}>
          <video
            ref={mirrorRef}
            autoPlay
            muted
            playsInline
            className={style.video_screen}
          ></video>
          <ButtonContainer
            isRecording={isRecording}
            setIsRecording={setIsRecording}
            stream={stream}
          />
        </div>
      ) : (
        <div className={style.no_device_screen}>
          <Image src={noDevice} width={128} height={128} alt="no device icon" />
          감지된 입력장치가 없습니다
        </div>
      )}
    </div>
  );
}
