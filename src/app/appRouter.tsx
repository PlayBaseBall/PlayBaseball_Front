import { MainPage } from "pages/main";
import { createBrowserRouter } from "react-router-dom";

export function appRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <div>Page not found</div>,
    },
  ]);
}
