import "./App.css";
import Feed from "./components/feed";
import Header from "./components/header";

function App() {
  return (
    <div className="text-center px-4 pt-6 bg-slate-600 min-h-screen overflow-x-hidden">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
