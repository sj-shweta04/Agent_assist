import "./App.css";
import MainContent from "./components/Components/MainContent";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <>
    <div className="flex h-screen bg-gray-100">
      {/* <Navbar /> */}
      <Sidebar />
      <MainContent />
    </div>
    </>
  );
}

export default App;
