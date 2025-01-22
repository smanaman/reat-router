
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './Root'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contect from '../src/pages/Contact'
import Services from './components/Services'

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
        path:'/services',
        element:<Services/>
      }
      ,
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
