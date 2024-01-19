import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFileBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighLighter";
const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );

  return (
    <div className="w-full">
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file) => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </div>
      <FileSyntaxHighlighter content={clickedFile.filecontent} />{" "}
    </div>
  );
};

export default OpenedFilesBar;
