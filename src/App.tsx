import OpenedFilesBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
// import FolderComponent from "./components/FolderComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="border-r border-white">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <OpenedFilesBar />
      </div>
    </>
  );
}

export default App;
