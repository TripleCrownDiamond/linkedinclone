import "./styles.css";
import "./index.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from './Feed';
import { selectUser } from './features/userSlice';
import { Login } from "@mui/icons-material";

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">

      <Header />

      { !user ? (
        <Login />
      ) : (
        <div className="app__body" >
            
            <SideBar />

            <Feed />

            {/* Widgets */}
        </div>
      ) }
        
    </div>
  );
}

export default App;
