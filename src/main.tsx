import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";

// const AppLayout = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "#project",
//         element: <Projects />,
//       },
//     ],
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
