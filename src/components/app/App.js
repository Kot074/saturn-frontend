import './App.css';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Workspace from "../Workspace/Workspace";
import Login from "../Login/Login";

function App(props) {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Workspace data={props.state.workspace} dispatch={props.dispatch} />
    </div>

      // <div className='LoginWrapper'>
      //     <Login />
      // </div>
  );
}

export default App;
