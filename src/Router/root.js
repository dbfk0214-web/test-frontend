import { lazy, Suspense } from "react";
import LatureLayout from "../layout/Laturelayout";
import EditLectureModal from "../components/EditLectureModal";


const Main = lazy(() => import("../pages/MainPage"));
const Nav = lazy(() => import("../layout/nav"));
const Loading = () => <div>Loading...</div>;

const { createBrowserRouter } = require("react-router-dom");

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
  },
    {
    path: "test",
    element: (
      <Suspense fallback={<Loading />}>
        <LatureLayout />
      </Suspense>
    ),
  },
      {
    path: "components/LectureComponents",
    element: (
      <Suspense fallback={<Loading />}>
        <EditLectureModal/>
      </Suspense>
    ),
  },
        {
    path: "test",
    element: (
      <Suspense fallback={<Loading />}>
        <testcomponent/>
      </Suspense>
    ),
  },
]);

export default root;
