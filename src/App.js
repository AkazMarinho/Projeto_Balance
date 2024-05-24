import { useEffect } from "react";
import {Home} from "./Pages/Home";
import { Upside } from "./Pages/Upside";
import RoutesApp from "./routes/Routes";
import { Auth } from "./auth/Auth";


function App() {
  const authConfirm = localStorage.getItem("b3Cd8E5gHiJ2kLmN9oPqR6sTuV4wXyZ7")

  if(authConfirm === 'true'){
    return (
      <div style={{width: '100%'}}>

        <Upside/>
        
        <RoutesApp/>
      </div>
    );
  }
  return (
    <Auth/>
  )
}

export default App;
