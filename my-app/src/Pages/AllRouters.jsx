import { Route, Routes } from "react-router-dom";
import { Company } from "./Company";
import { Home } from "./Home";
import { Pricing } from "./Pricing";
import { Product } from "./Product";
import { Resources } from "./Resources";

export function AllRouters(){
    return <Routes>
        <Route path="/" element={ <Home></Home> } >HOME</Route>
        <Route path="/product" element={ <Product></Product> } >HOME</Route>
        <Route path="/resources" element={ <Resources></Resources> } >HOME</Route>
        <Route path="/company" element={ <Company></Company> } >HOME</Route>
        <Route path="/pricing" element={ <Pricing></Pricing> } >HOME</Route>
    </Routes>
}