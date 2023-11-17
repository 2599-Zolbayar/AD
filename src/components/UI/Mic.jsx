import React, { useState, useRef, useEffect } from "react";
import { BiMicrophone } from "react-icons/bi";

const Mic = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording]);

  useEffect(() => {
    if (isRecording) {
      const timerInterval = setInterval(() => {
        if (startTime) {
          const now = new Date();
          const elapsed = now - startTime;
          setElapsedTime(elapsed);
        }
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [isRecording, startTime]);

  const toggleRecording = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording);

    if (!isRecording) {
      setStartTime(new Date());
    } else {
      setStartTime(null);
    }
  };

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunks.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          audioRef.current.src = URL.createObjectURL(audioBlob);
        };

        mediaRecorder.start();
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center cursor-pointer">
        <div
          className={`w-16 h-16 border-4  rounded-full flex items-center justify-center border-blue-500 ${
            isRecording ? "animate-pulse" : ""
          }`}
          onClick={toggleRecording}
        >
          <BiMicrophone size={32} className={`text-blue-500 `} />
        </div>
      </div>
      {audioChunks.length > 0 && (
        <div className="mt-2 text-center text-blue-500">
          Хугацаа: {formatTime(elapsedTime)}
        </div>
      )}
      <audio ref={audioRef} controls></audio>
    </>
  );
};

export default Mic;
