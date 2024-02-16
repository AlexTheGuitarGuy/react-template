/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_PORT: number
  VITE_APPLICATION_URL: string
  VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
