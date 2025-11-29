import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login.jsx'
import Home from './HOme.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import NotFound from './NotFound.jsx';
import Counter from './Counter.jsx';
import Post from './post.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element : <Home/>,
    errorElement: <NotFound/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/Counter',
    element:<Counter/>
  },
  {
    path:'/post/:id',
    element: <Post/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
