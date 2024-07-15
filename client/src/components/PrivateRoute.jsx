import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
// making this private route to secure the admin dashboard section to not get public
export default function PrivateRoute() {
  const {currentUser} = useSelector((state) => state.user);
  return currentUser ? <Outlet/> : <Navigate to="/sign-in" />
}
