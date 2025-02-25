import { motion } from "framer-motion";

import ReactWebcam from "react-webcam";

export const DemoWebcamArea = ({
  isDemoActive,
  isRecognized,
}: {
  isDemoActive: boolean;
  isRecognized: boolean;
}) => (
  <div className="relative h-96 bg-gray-900/50 rounded-xl overflow-hidden border-2 border-green-600/30">
    {isDemoActive ? (
      <>
        <ReactWebcam
          className="w-full h-full object-cover"
          audio={false}
          videoConstraints={{ facingMode: "user" }}
          screenshotFormat="image/jpeg"
        />
        {isRecognized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
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
);