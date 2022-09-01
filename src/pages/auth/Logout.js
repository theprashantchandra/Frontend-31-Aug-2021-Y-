import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { unsetUserToken } from '../features/authSlice';

const navigate = useNavigate()


const handleLogout1 = () => {
    dispatch(unsetUserToken({ token: null }))
    dispatch(unsetUserInfo({ name: "", email: "" }))
    removeToken('token')
    navigate('/login')
  }

  const token = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(token)

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.user.email,
        name: data.user.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  const dispatch = useDispatch()
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.user.email,
        name: data.user.name
      }))
    }
  }, [data, isSuccess, dispatch])

// const Logout = () => {
//     const navigate = useNavigate()

//   return (
//     <div>
//         <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
//     </div>
//   )
// }

// export default Logout
export default handleLogout1