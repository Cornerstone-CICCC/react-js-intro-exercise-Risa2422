import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Header logoText="My First React App" />
      <Welcome message="Hello!" />
      <Info firstname="Annna" lastname="Yamada" age={22} isStudent={true} />
    </>
  );
}

export default App;
