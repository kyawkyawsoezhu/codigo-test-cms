import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ListVoucher from "./pages/list-voucher";
import CreateVoucher from "./pages/create-voucher";
import UpdateVoucher from "./pages/update-voucher";
import Login from './pages/login';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <div className="section has-background-light">
          <div className="container">
            <Switch>
              <PrivateRoute path="/vouchers/create">
                <CreateVoucher />
              </PrivateRoute>
              <PrivateRoute path="/vouchers/:id/update">
                <UpdateVoucher />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/">
                <ListVoucher />
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  const token = false;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
