import { useState } from 'react';

interface ToastOptions {
  title: string;
  description: string;
}

export const useToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [options, setOptions] = useState<ToastOptions | null>(null);

  const toast = (options: ToastOptions) => {
    setOptions(options);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  };

  return { toast, isVisible, options };
};