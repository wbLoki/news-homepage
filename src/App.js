import "./App.css";
import Feed from "./components/feed";
import Header from "./components/header";

function App() {
  return (
    <div className="text-center px-8 pt-6 sm:px-28 sm:pt-12 min-h-screen overflow-x-hidden">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
