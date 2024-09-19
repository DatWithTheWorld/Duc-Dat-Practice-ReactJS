
import { Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
function App() {

  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
    </Routes>
   </div>
  )
}

export default App
