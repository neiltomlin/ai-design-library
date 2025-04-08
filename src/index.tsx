import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        AI Design Library
      </h1>
      <p className="text-gray-600">
        This is a design system library. Run Storybook to see the components.
      </p>
    </div>
  </React.StrictMode>
);
