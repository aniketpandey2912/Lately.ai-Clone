import { Route, Routes } from "react-router-dom";
import { Company } from "./Company";
import { Home } from "./Home";
import { Pricing } from "./Pricing";
import { Product } from "./Product";
import { Resources } from "./Resources";
import { PrivateRouting } from "./PrivateRouting";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { NotFoundPage } from "./NotFoundPage";

export function AllRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>
        HOME
      </Route>
      <Route
        path="/product"
        element={
          //   <PrivateRouting>
          <Product></Product>
          //   </PrivateRouting>
        }
      >
        PRODUCT
      </Route>
      <Route
        path="/resources"
        element={
          //   <PrivateRouting>
          <Resources></Resources>
          //   </PrivateRouting>
        }
      >
        RESOURCES
      </Route>
      <Route
        path="/company"
        element={
          //   <PrivateRouting>
          <Company></Company>
          //   </PrivateRouting>
        }
      >
        ABOUT COMPANY
      </Route>
      <Route
        path="/pricing"
        element={
          //   <PrivateRouting>
          <Pricing></Pricing>
          //   </PrivateRouting>
        }
      >
        PRICING
      </Route>

      <Route path="/signup" element={<Signup></Signup>}>
        SIGNUP
      </Route>

      <Route path="/login" element={<Login></Login>}>
        SIGNUP
      </Route>

      <Route path="*" element={<NotFoundPage></NotFoundPage>}>
        NOT FOUND PAGE
      </Route>
    </Routes>
  );
}
