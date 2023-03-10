declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_AWS_S3_FRONTEND_STATIC_HOSTNAME: string;
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_API_PORT: number;
      NEXT_PUBLIC_HTTP: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
