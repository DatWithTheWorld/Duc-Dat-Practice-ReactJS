
import { Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Page from './pages/Pages/page';
function App() {

  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/page/*' element={<Page/>}/>
    </Routes>
   </div>
  )
}

export default App
