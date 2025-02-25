"use client";
import React from "react";
import ReactWebcam, { WebcamProps } from "react-webcam";

// Define o valor padrão para o formato de screenshot com uma const assertion.
const defaultScreenshotFormat = "image/jpeg" as const;

// Defina valores padrão para as props que estão faltando.
const defaultProps: Partial<WebcamProps> = {
  disablePictureInPicture: false,
  forceScreenshotSourceSize: false,
  imageSmoothing: true,
  mirrored: false,
};

export default function WebcamWrapper(props: WebcamProps) {
  const combinedProps = {
    ...defaultProps,
    ...props,
    screenshotFormat: props.screenshotFormat || defaultScreenshotFormat,
  };

  return <ReactWebcam {...combinedProps} />;
}
