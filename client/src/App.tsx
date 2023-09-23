import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import FillRolePage from './pages/FillRolePage'
import { Heading, VStack } from '@chakra-ui/react'
// import axiosInstance from './helpers/axiosInstance'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<h1>Hello</h1>} />
        <Route path='/signup' Component={SignupPage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/login/success' Component={LoginSuccessPage} />
        <Route path='/details/select-role' Component={FillRolePage} />
        <Route path='/details/select-hosting' Component={FillRolePage} />
      </Routes>
    </div>
  )
}

const LoginSuccessPage: React.FC = () => {
  React.useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000)
  }, []);
  return (
    <VStack alignItems={'center'} justifyContent={'center'} minH={'100vh'}>
      <Heading>Login Successful</Heading>
    </VStack>
  )
}

export default App