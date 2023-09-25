import css from "./App.module.css";
import NavBarForm from "./components/NavBarForm";
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import RenderingLists from "./components/RenderingLists";
import ContentHooks from "./components/ContentHooks";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentHooks />
    </div>
  );
}

export default App;
