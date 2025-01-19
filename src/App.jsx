
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './Root'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contect from '../src/pages/Contact'

const router=createBrowserRouter([
  {
    path : '/',
    element: <Root/>,
    children :[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contect/>
      }
    ]
  }
])
function App() {
 

  return (
    <>
<RouterProvider router={router}/>
    </>
  )
}

export default App
