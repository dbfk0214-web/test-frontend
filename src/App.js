import React from "react";
import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import EditLectureModal from "./components/EditLectureModal";

function App() {
  return (
    <>
      <RouterProvider router={root} />
      <EditLectureModal />
    </>
  );
}

export default App;