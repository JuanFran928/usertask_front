import './App.css';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage';
import Header from './components/Header'
import PrivateRoute from './utils/PrivateRoute'
import {AuthProvider} from './context/AuthContext'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Switch>
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route exact path='/login' element={<LoginPage />} />
          </Switch>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;


//minuto 51
//https://www.youtube.com/watch?v=xjMP0hspNLE&t=6815s