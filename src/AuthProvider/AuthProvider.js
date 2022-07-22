import { createContext, useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Context = createContext({});

const AuthProvider = (props) => {

  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const item = localStorage.getItem("userRegister");
  const [auth, setAuth] = useState("");
  const Navigate = useNavigate()

  // const LoginValue = JSON.parse(localStorage.getItem("userRegister"));
  // const [auth, setAuth] = useState(LoginValue[0].roll);

  // useEffect(() => {
  //   console.log(auth);
  //   const logindata = auth;
  //   localStorage.setItem("logindata", JSON.stringify(logindata));
  // });

  // const onLogin = ({roll,name}) => {
  //   setAuth(true);
  //   setRoll(roll)
  // };

  const onLogout = () => {
    setAuth(false)
    setRoll("")

  }
  const onLogin = (roll,name) => {
    // setAuth(false)
    setRoll(roll)
    console.log("hello",roll,name);
    const parsedItem = JSON.parse(item);
    const checkedUser = parsedItem.filter((i) => i.name === name && i.roll === roll)[0];
    if (checkedUser.name === name) {
      if (checkedUser.roll === 'admin') {
        console.log("---------check", checkedUser.roll);
        setAuth("admin")
        Navigate('/')
        // localStorage.setItem('store', JSON.stringify(items));
        
      }
      else if (checkedUser.roll === 'super-admin') {
        console.log("super", checkedUser.roll);
        setAuth("super-admin")
        Navigate('/')
      }

      // onLogin({ roll: "", name: "" });
      // setName("");
      // setPassword("");
    }
   
  }
  console.log("++++++",auth);
    return (
      <>
        <Context.Provider value={{ auth,roll, onLogin, onLogout }}>
          {props.children}
        </Context.Provider>
      </>
    );

  };

  const useAuth = (props) => {
    const val = useContext(Context);
    return val;
  };

  export default AuthProvider;
  export { useAuth };
