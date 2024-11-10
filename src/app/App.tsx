import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { appRouter } from "app/appRouter";

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter()} />
    </div>
  );
}

export default App;
