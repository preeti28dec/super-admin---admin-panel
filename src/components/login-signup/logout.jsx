
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai'
export default function Logout() {
  let navigate = useNavigate();
  function logOut() {
    navigate("/login");
  }
  return (
    <>
      <button onClick={logOut} className=" flex " >
      <span className="notification-icon">
      <AiOutlineLogout className='icon bg-purple-200 rounded-lg hover:bg-purple-600'/>
      </span>
      </button>
    </>
  );
}
