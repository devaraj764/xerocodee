import React from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import FillRolePage from './pages/FillRolePage'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import LoginSuccessPage from './pages/LoginSuccessPage'
import { useQuery } from 'react-query'
import { getUser } from './api/user'
import { HStack, Spinner } from '@chakra-ui/react';
import FillHostingPage from './pages/FillHostingPage'

type UserType = {
  firstName: string
  lastName: string
  email: string
  _id: string
  role: string
  hostingPlan: string
}

type UserContextType = {
  user: UserType | undefined
  logout: () => void
}

export const UserContext = React.createContext<UserContextType>({ user: undefined, logout: () => { } });

const App: React.FC = () => {
  const [user, setUser] = React.useState<UserType | undefined>();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const { isLoading } = useQuery({
    queryKey: 'get-user-data',
    queryFn: getUser,
    onSuccess: (data: UserType) => {
      if (data) {
        setUser(data);
        if (!data.role || data.role === '') navigate('/details/select-role');
        else if (!data.hostingPlan || data.hostingPlan === '') navigate('/details/select-hosting');
        else navigate('/dashboard')
      }
    },
    onError: () => {
      if (pathname === '/login/success' || pathname === '/signup') return;
      navigate('/login');
    },
    retry: 0,
    refetchOnWindowFocus: false
  });

  const logout = async () => {
    localStorage.removeItem('token');
    setUser(undefined);
    navigate('/login');
  }

  return (
    <UserContext.Provider value={{ user, logout }}>
      <div className='App'>
        {
          isLoading ?
            <HStack w='full' h='full' alignItems={'center'} justifyContent={'center'}>
              <Spinner size={'md'} />
            </HStack>
            :
            <Routes>
              <Route path='/' Component={LandingPage} />
              <Route path='/dashboard' Component={Dashboard} />
              <Route path='/signup' Component={SignupPage} />
              <Route path='/login' Component={LoginPage} />
              <Route path='/login/success' Component={LoginSuccessPage} />
              <Route path='/details/select-role' Component={FillRolePage} />
              <Route path='/details/select-hosting' Component={FillHostingPage} />
            </Routes>
        }
      </div>
    </UserContext.Provider>
  )
}

export default App