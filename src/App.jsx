// App.js
import { RouterProvider } from "react-router-dom";
import router from "./router"; // Import the router

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
