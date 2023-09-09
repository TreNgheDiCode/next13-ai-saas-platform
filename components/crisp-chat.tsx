"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b7adaced-de24-4c74-8d8e-42c5610eb5e9");
  }, []);

  return null;
};
