import React, { lazy, Suspense, useState, useEffect } from "react";
import "./cameraHandler.css";

const Video = lazy(() => import("../Video"))

const CameraHandler = () => {
  const [isCameraSupported, setCameraSupported] = useState(false);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setCameraSupported(true);
    }
    console.log("did mounted");
  }, []);

  return (
    <>
      {isCameraSupported ? (
        <Suspense fallback={<div>Loading...</div>}>
		  <Video />
        </Suspense>
      ) : (
        ""
      )}
      {!isCameraSupported ? (
        <div className="cameraHandler__unsopported">
          <div>
            <p>
              Your device does not support/enabled camera access or something
              went wrong{" "}
              <span role="img" aria-label="thinking-face">
                🤔
              </span>
            </p>
            <p>You can enter the barcode below</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CameraHandler;
