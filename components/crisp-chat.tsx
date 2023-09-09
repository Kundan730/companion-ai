"use client"

import { useEffect } from "react"
import {Crisp} from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e8dacd71-8854-4fda-a2ee-f5607801acfa")
  }, []);

  return null
}