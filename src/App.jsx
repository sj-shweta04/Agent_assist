import "./App.css";
import Center from "./components/Components/Center";
import Nbt from "./components/Components/Nbt";
import Transcription from "./components/Components/Transcription";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <>
    <div className="h-screen flex flex-col">
      <Navbar/>
 
    <div className="flex-1 flex">
      <Sidebar/>
    <Transcription />
    <Center/>
    <Nbt/>
      {/* <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-grow mr-1">
            <Transcription />
          </div>
          <div className="flex-grow w-72">
            <QA />
          </div>
          <div className="flex-grow">
            <Response />
          </div>
        </div>
      </div> */}
    </div>
    </div>
    </>
  );
}

export default App;
