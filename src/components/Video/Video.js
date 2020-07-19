import React, { useState } from "react";
import * as zxing from "@zxing/library";
import { Button } from "antd";
import "./video.css";

const Video = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const hints = new Map();
  hints.set(zxing.DecodeHintType.TRY_HARDER, true);
  const reader = new zxing.BrowserMultiFormatReader(hints, 1000);

  const start = (e) => {
    setRecording(true);
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reader.stopAsyncDecode();
      }, 160000 * 1);

      reader
          .decodeOnceFromVideoDevice(null, document.getElementById(
              "video"
          ))
          .then(resolve)
          .catch(reject);


    })
        .then((result: zxing.Result) => {
          alert(result.getText());
          stopStreamedVideo();
        })
        .catch(err => {
          console.log(err.message);
          if (
              err.message !==
              "Video stream has ended before any code could be detected."
          ) {
            setErrorMessage(
                "Video stream has ended before any code could be detected."
            );
          }
          stopStreamedVideo();
        });

    p1.catch(error => {
      console.log(error);
    });
  };

  const stop = (e) => {
    e.preventDefault();
    reader.stopAsyncDecode();
    stopStreamedVideo();
  };

  function stopStreamedVideo() {
    const videoElem: any = document.getElementById("video");
    setRecording(false);

    if (videoElem && videoElem.srcObject) {
      let stream = videoElem.srcObject;
      let tracks = stream.getTracks();

      tracks.forEach((track: MediaStreamTrack) => {
        track.stop();
      });

      videoElem.srcObject = null;
    }
  }

  return (
      <div className="container-fluid">
        <div className="w-100 row align-items-center">
          <div className="row">{errorMessage}</div>
          <div className="row">
            {!recording && (
                <Button
                    type="primary"
                    id="btnStart"
                    htmlType="submit"
                    onClick={e => start(e)}
                    style={{ marginTop: 10 }}
                >
                  Scan Code
                </Button>
            )}

            {recording && (
                <Button
                    type="primary"
                    id="btnStop"
                    htmlType="submit"
                    onClick={e => stop(e)}
                    style={{ marginTop: 10 }}
                >
                  Stop scanning
                </Button>
            )}
          </div>
          <div className="video">
            <video id="video" />
          </div>
        </div>
      </div>
  );
};

export default Video;
