import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { PersonDetails } from "../Pages/PersonDetails";
import { ListPerson } from "../Pages/ListPerson";

export default function RoutesApp() {
  return (

    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/a7Rb2CkL9pI3qY8" element={<PersonDetails/>} />
        <Route exact path="/x5aGv9Qr2eKl7tJ" element={<ListPerson/>} />
    </Routes>
  )
}
