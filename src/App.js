import SignInSide from "./component/SignInSide";
import Main from "./component/Main";
import { Route ,Routes} from "react-router-dom"; 

const App = () => {

  return (
    <>
    <Routes>
    <Route path="/" element={SignInSide}/>
    <Route path ="/home" element={Main}/>



    </Routes>
   
  
    </>
  )
}


export default App;
