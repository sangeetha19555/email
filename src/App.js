import "./App.css";
import HeaderBar from "./component/HeaderBar";
import SideBar from "./component/SideBar";

function App() {
  return (
    <div>
      <div className="App">
        <SideBar />
        <HeaderBar />
      </div>
    </div>
  );
}

export default App;
