export {};

declare global {
  interface Window {
    FilloutEmbed?: {
      refresh: () => void;
    };
  }
}
