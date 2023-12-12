import './styles/styles.scss'
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/navigation/navbar/Navbar"
import Home from "./pages/Home"
import ProposalList from "./pages/proposals/proposalList/ProposalList"
import ProposalDetails from "./pages/proposals/proposalDetails/ProposalDetails"
import ProposalEdit from "./pages/proposals/proposalEdit/ProposalEdit"
import Signup from "./pages/auth/signUp/Signup"
import Login from "./pages/auth/login/Login"
import Profile from "./pages/auth/profile/Profile"
import Error from "./pages/errors/error/Error"
import NotFound from "./pages/errors/notFound/NotFound"


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
            <Route path='/proposal/:id/edit' element={<ProposalEdit />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />


            {/* Error Handling */}
            <Route path='/error' element={<Error />} />
            <Route path='/*' element={<NotFound />} />

          </Routes>

      </div>

    </div>
  );
}

export default App;
