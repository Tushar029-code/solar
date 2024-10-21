import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./assets/Component/Home.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLevel from "./assets/Component/RootLevel.jsx";
import AddQuiz from "./assets/Component/AddQuiz.jsx";
import ViewQuiz from "./assets/Component/ViewQuiz.jsx";
import PlayQuiz from "./assets/Component/PlayQuiz.jsx";
import Login from "./assets/Component/Login.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLevel />}>
        <Route path="add-quiz" element={<AddQuiz/>}></Route>
        <Route path="Home" element={<Home/>}></Route>
        <Route path="view-quiz" element={<ViewQuiz/>}></Route>
        <Route path="play-quiz" element={<PlayQuiz/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="login-quiz" element={<Login/>}></Route>
    </Route>
  
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>
);
