import React, {useState, useEffect} from "react";
import * as zxing from "@zxing/library";
import "./video.css";

const Video = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const hints = new Map();
    hints.set(zxing.DecodeHintType.TRY_HARDER, true);
    const reader = new zxing.BrowserMultiFormatReader(hints, 1000);

    const start = () => {
        const p1 = new Promise((resolve, reject) => {
            reader.decodeOnceFromVideoDevice(null, document.getElementById(
                "video"
            ))
                .then(resolve)
                .catch(reject);
        })
            .then((result: zxing.Result) => {
                document.getElementById("idcanvas").style.display = "none";
                alert(result.getText());
                start();
                var video = document.getElementById('video');
                video.addEventListener('loadedmetadata', function(e){
                    document.getElementById("idcanvas").style.display = "block";
                });
            })
            .catch(err => {
                setErrorMessage(err.message);
            });
        p1.catch(error => {
            setErrorMessage(error.message);
        });

    };

    useEffect(() => {
        startOnload();
    });

    function startOnload() {
        start();
    }

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: {facingMode: 'environment'}})
            .then( function(stream) {
                var video = document.getElementById('video');
                video.addEventListener('loadedmetadata', function(e){
                    drawImage();
                });
            }
        )
    };

    function addClassName() {
        let classes = "video ";
        return classes;
    }

    function drawImage() {
        var canvas = document.querySelector("#idcanvas");
        if (canvas !== null) {
            var ctsx = canvas.getContext('2d');
            ctsx.beginPath();
            canvas.width = window.screen.width;
            canvas.height = window.screen.height;
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            var faceArea = 300;
            var pX = canvas.width / 2 - faceArea / 2;
            var pY = canvas.height / 2 - faceArea / 2;
            ctsx.clearRect(0, 0, canvas.width, canvas.height);
            ctsx.rect(pX, pY, faceArea, faceArea);
            ctsx.lineWidth = "6";
            ctsx.strokeStyle = "#fe8e14";
            ctsx.stroke();
        }
    }

    return (
        <div className="container-fluid">
            <div className="dynam-info">
                <img src="https://www.centralgroup.com/themes/default/assets/static/images/logo/logo-white-gray.svg" alt="logo"/>
            </div>
            <div id="loading">
                <img id="loading-image" src={process.env.PUBLIC_URL + '/bike_loader.gif'} alt="Loading..." />
            </div>
            <div className="w-100 row align-items-center">
                <div className="row">{errorMessage}</div>
                <div className={addClassName()}>
                    <video id="video"/>
                    <canvas id="idcanvas"></canvas>
                </div>
            </div>
        </div>
    );
};

export default Video;
