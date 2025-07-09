"use client";

import { useEffect, useState } from "react";

interface FilloutButtonProps {
  className?: string;
  buttonText?: string;
}

export default function FilloutButton({
  className = "",
  buttonText = "Open PWM Form",
}: FilloutButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scriptId = "fillout-embed-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://server.fillout.com/embed/v1/";
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  const handleClick = () => {
    if (isLoaded && (window as any).Fillout?.show) {
      (window as any).Fillout.show({
        formId: "mbSxjjkQMpus",
        options: {
          type: "popup",
          inheritParams: true,
        },
      });
    } else {
      alert("Please wait, loading form...");
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isLoaded}
      className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
        isLoaded
          ? "bg-white text-blue-900 hover:bg-gray-100"
          : "bg-gray-300 text-gray-600 cursor-not-allowed"
      } ${className}`}
    >
      {isLoaded ? buttonText : "Loading..."}
    </button>
  );
}
