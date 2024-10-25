import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.invernadero',
  appName: 'invernadero',
  webDir: 'www',
  server: {
    cleartext: true,  // Permite tráfico HTTP claro
  }
};

export default config;
