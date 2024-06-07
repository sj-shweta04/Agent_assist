import "./App.css";
import Question from "./components/Dashboard/QA";
import Response from "./components/Dashboard/Nbt";
import Transcription from "./components/Dashboard/Transcription";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import QA from "./components/Dashboard/QA";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-grow mr-1">
            <Transcription />
          </div>
          <div className="flex-grow mr-1">
            <QA />
          </div>
          <div className="flex-grow">
            <Response />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
