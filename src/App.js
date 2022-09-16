import AboutMe from "./components/aboutme/AboutMe";
import Header from "./components/header/Header"
import Main from "./components/mainarea/Main"

function App() {
  return (
    <div className="bg-[#f8f7f3]">
      <Header />
      <Main />
      <AboutMe />
    </div>
  );
}

export default App;
