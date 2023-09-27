import css from "./App.module.css";
import NavBarForm from "./components/NavBarForm";
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";

import ContentAPI from "./components/ContentAPI";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentAPI />
    </div>
  );
}

export default App;
