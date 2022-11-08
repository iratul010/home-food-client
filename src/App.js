import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-200   ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
