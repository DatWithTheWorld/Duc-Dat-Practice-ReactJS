function App() {

  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/pages/*' element={<Page/>}/>
    </Routes>
   </div>
  )
}

export default App
