import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./componentes/RootLayout.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element : <RootLayout/>,
      children : [
        { path : '', element : <Dashboard/>},
        { path : '/add', element : <AddCustomer/>},
        { path : '/delete', element : <DeleteCustomer/>},
        { path : '/update', element : <UpdateCustomer/>}
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
