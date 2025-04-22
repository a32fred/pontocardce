import React, { useEffect, useRef } from 'react';
import ReactWebcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { motion } from 'framer-motion';

interface DemoWebcamAreaProps {
  isDemoActive: boolean;
  isRecognized: boolean;
  onStartDemo: () => void;
  onStopDemo: () => void;
}

export default function DemoWebcamArea({
  isDemoActive,
  isRecognized,
  onStartDemo,
  onStopDemo,
}: DemoWebcamAreaProps) {
  const webcamRef = useRef<ReactWebcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Carrega os modelos uma única vez
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        ]);
        console.log('✅ Modelos carregados com sucesso!');
      } catch (err) {
        console.error('Erro ao carregar modelos:', err);
      }
    };
    loadModels();
  }, []);

  // Detecta rosto em loop enquanto a demo estiver ativa
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const detectFace = async () => {
      const video = webcamRef.current?.video;
      const canvas = canvasRef.current;

      if (!video || !canvas) return;

      const context = canvas.getContext('2d');
      if (!context) return;

      faceapi.matchDimensions(canvas, {
        width: video.videoWidth,
        height: video.videoHeight,
      });

      const detection = await faceapi.detectSingleFace(
        video,
        new faceapi.TinyFaceDetectorOptions()
      );

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (detection) {
        const resized = faceapi.resizeResults(detection, {
          width: video.videoWidth,
          height: video.videoHeight,
        });
        faceapi.draw.drawDetections(canvas, resized);
      }
    };

    if (isDemoActive) {
      interval = setInterval(detectFace, 150);
    }

    return () => {
      clearInterval(interval);
      stopCamera(); // <- importante aqui também
    };
  }, [isDemoActive]);

  const stopCamera = () => {
    const video = webcamRef.current?.video;
    const stream = video?.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };


  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Teste de Reconhecimento Facial
        </h2>
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          Veja uma demonstração de como o reconhecimento facial pode funcionar em tempo real.
        </p>

        <div className="mb-6">
          {isDemoActive ? (
            <button
              onClick={() => {
                stopCamera();
                onStopDemo();
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
            >
              Parar Demonstração
            </button>
          ) : (
            <button
              onClick={onStartDemo}
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
            >
              Iniciar Demonstração
            </button>
          )}
        </div>

        <div className="relative h-96 sm:h-[30rem] bg-gray-900/50 rounded-xl overflow-hidden border-2 border-green-600/30">
          {isDemoActive ? (
            <>
              <ReactWebcam
                ref={webcamRef}
                className="w-full h-full object-cover"
                audio={false}
                videoConstraints={{ facingMode: 'user' }}
                screenshotFormat="image/jpeg"
              />
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full"
              />
              {isRecognized && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-green-900/60"
                >
                  <span className="text-6xl">✅</span>
                  <h3 className="mt-4 text-3xl text-white">Reconhecido</h3>
                </motion.div>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              [Área de Demonstração Interativa]
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
