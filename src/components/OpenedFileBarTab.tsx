import { IFile } from "../interfaces";
import RenderFileIcon from "./SVG/RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFileAction } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
    clickedFile: { activeFileId },
  } = useSelector((state: RootState) => state.tree);
  // handlers

  const onClick = () => {
    dispatch(
      setClickedFileAction({
        filename: file.name,
        filecontent: file.content,
        activeFileId: file.id,
      })
    );
  };

  return (
    <div
      className={`max-w-screen-md flex items-center p-2 border-t-2 ${
        activeFileId === file.id ? "border-[#cf6ccf]" : "border-transparent"
      } `}
      onClick={onClick}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md" onClick={}>
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
