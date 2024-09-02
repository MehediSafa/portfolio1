import './App.css'
import Home from './pages/Home'
import { createBrowserRouter ,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}></Route>
    </Route>
  ))

  return (
    <>
    
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
