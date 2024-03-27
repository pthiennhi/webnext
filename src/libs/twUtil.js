
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfigFile from '../../tailwind.config';

export const tailwindConfig = () => {
    // Tailwind config
    return resolveConfig(tailwindConfigFile);
  }