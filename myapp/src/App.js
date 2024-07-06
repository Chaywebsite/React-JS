import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./Components/HIT/Header";
import Slider from "./Components/HIT/asset/Slider";
import Footer from "./Components/HIT/Footer";
import About from "./Components/HIT/About";
import Batches from "./Components/HIT/Batches";
import Courses from "./Components/HIT/Courses";
import Contact from "./Components/HIT/Contact";
import Routing from "./Components/HIT/Routing";
import LifeCycleEx from "./Components/LifeCycles/LifeCycleEx";
import BasicRead from "./Components/CrudClass/BasicRead";
import EmployeeData from "./Components/CrudClass/EmployeeData";
import AddEmployee from "./Components/CrudClass/AddEmployee";
import StateEx from "./Components/Hooks/StateEx";
import MemoEx from "./Components/Hooks/MemoEx";
import ContextEx from "./Components/Hooks/ContextEx";
import LargeData from "./Components/Hooks/LargeData";
import RefEx from "./Components/Hooks/RefEx";
import ApiData from "./Components/Hooks/ApiData";
import ParentComp from "./Components/LifeCycles/ParentComp";
import RBootstrap from "./Components/RBootstrap";
import CakeContainer from "./Redux/cakes/CakeContainer";
import { Provider } from 'react-redux';
import store from "./Redux/store";
import ReactBootstraEx from "./Components/UIExamples/ReactBootstraEx";
import SemanticEx from "./Components/UIExamples/SemanticEx";
import 'semantic-ui-css/semantic.min.css'



 
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routing></Routing>
      <Footer></Footer>
    </div>
  );
}

export default App;
