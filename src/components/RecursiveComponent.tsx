import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrowIcon";
import BottomArrowIcon from "./SVG/BottonArrowIcon";
import RenderFileIcon from "./SVG/RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  setActiveFileId,
  setClickedFileAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import { doesFileObjExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  // Handlers
  const toggleOpenHandler = () => setIsOpen((prev) => !prev);

  const fileClickHandler = () => {
    const exist = doesFileObjExist(openedFiles, fileTree.id);
    dispatch(
      setClickedFileAction({
        filename: fileTree.name,
        filecontent: fileTree.content,
        activeFileId: fileTree.id,
      })
    );
    if (exist) {
      return;
    }
    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
  };

  return (
    <div className="my-2  ml-2 cursor-pointer">
      <div className="flex items-center">
        {fileTree.isFolder ? (
          <div className="flex items-center" onClick={toggleOpenHandler}>
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              filename={fileTree.name}
              isFolder={fileTree.isFolder}
              isOpen={isOpen}
            />
            <span>{fileTree.name}</span>
          </div>
        ) : (
          <div className="flex items-center" onClick={fileClickHandler}>
            <RenderFileIcon filename={fileTree.name} />
            <span>{fileTree.name}</span>
          </div>
        )}
      </div>
      {isOpen &&
        fileTree.children?.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
