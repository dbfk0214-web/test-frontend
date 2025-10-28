import { lazy, Suspense } from "react";

const Main = lazy(() => import("../pages/MainPage"));
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
]);

export default root;
