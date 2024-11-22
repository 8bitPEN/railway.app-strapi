// src/admin/vite.configs.ts
import { mergeConfig } from "vite";

export default (config: any) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      cors: {
        origin: ["http://localhost:5174", "solanahungary.hu"],
        credentials: true,
      },
    },
  });
};
