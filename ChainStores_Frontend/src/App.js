import React from "react"
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Findstore from './pages/Findstore';
import Exportstocks from './pages/Exportstocks';
import Signup from "./pages/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import PrivateRoute from "./pages/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import UpdateProfile from "./pages/UpdateProfile"
import Footer from './components/Footercomponent/Footer';

function App() {
  return (
        <Router>
        <Navbar />
          <AuthProvider>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/about-us' component={AboutUs} />
              <Route path='/findstore' component={Findstore} />
              <PrivateRoute path="/exportStock" component={Exportstocks} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
          <Footer />
        </Router>

  )
}

export default App
