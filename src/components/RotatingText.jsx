import { useEffect, useState } from "react";

const texts = [
  "Just Another WordPress Site",
  "Fresh Articles Every Day",
  "Your Daily Source of Fresh Articles",
  "Created By Royal Addons",
];

const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute">
      <h3 className="text-sm text-gray-300 font-bold">
        <span className="inline-block">
          {texts.map((text, index) => (
            <span
              key={text}
              className={`block transition-all duration-500 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "absolute opacity-0 -translate-y-4"
              }`}
            >
              {text}
            </span>
          ))}
        </span>
      </h3>
    </div>
  );
};

export default RotatingText;