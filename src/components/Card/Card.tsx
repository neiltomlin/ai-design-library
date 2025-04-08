import React from "react";
import Button from "../Button/Button";

export interface CardProps {
  title: string;
  bodyText: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  showInfoIcon?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  bodyText,
  buttonText,
  onButtonClick,
  className = "",
  showInfoIcon = true,
}) => {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-md p-6
        flex flex-col gap-4 max-w-md
        ${className}
      `}
    >
      <div className="flex items-start gap-4">
        {showInfoIcon && (
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <span className="text-gray-900 font-semibold">i</span>
            </div>
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600 text-base leading-relaxed">{bodyText}</p>
        </div>
      </div>

      {buttonText && (
        <div className="mt-2">
          <Button variant="primary" onClick={onButtonClick} className="w-auto">
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};
