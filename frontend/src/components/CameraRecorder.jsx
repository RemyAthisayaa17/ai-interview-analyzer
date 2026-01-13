import React, { useRef, useEffect } from "react";

const CameraRecorder = () => {
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Camera access error:", err));
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      className="camera-video"
    />
  );
};

export default CameraRecorder;
