import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';

import ListVoucher from "./pages/list-voucher";
import CreateVoucher from "./pages/create-voucher";
import UpdateVoucher from "./pages/update-voucher";
import Login from './pages/login';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/vouchers/create">
            <CreateVoucher />
          </PrivateRoute>
          <PrivateRoute exact path="/vouchers/:id/update">
            <UpdateVoucher />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <ListVoucher />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
