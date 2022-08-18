import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProposalList from "./pages/proposals/ProposalList"
import ProposalDetails from "./pages/proposals/ProposalDetails"
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/Login"
import Profile from "./pages/auth/Profile"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <div className="App">
      <header>

        <nav className='navbar'>
          <Navbar />

        </nav>

      </header>

      <div>

        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/proposals' element={<ProposalList />} />
            <Route path='/proposal/:id/details' element={<ProposalDetails />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile/:id' element={<Profile />} />


            {/* Error Handling */}
            <Route path='/' element={<Error />} />
            <Route path='/' element={<NotFound />} />

          </Routes>

      </div>

    </div>
  );
}

export default App;
