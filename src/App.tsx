import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./componentes/RootLayout.tsx";
import {Add} from "./pages/Add.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Delete} from "./pages/Delete.tsx";
import {Update} from "./pages/Update.tsx";
import {CustomerProvider} from "./store/CustomerProvider.tsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element : <RootLayout/>,
      children : [
        { path : '', element : <Dashboard/>},
        { path : '/add', element : <Add/>},
        { path : '/delete', element : <Delete/>},
        { path : '/update', element : <Update/>}
      ]
    },
  ])
  return (
    <>
      <CustomerProvider>
        <RouterProvider router={routes}/>
      </CustomerProvider>
    </>
  )
}

export default App
