import FolderIcon from "./SVG/FolderIcon";

interface IProps {
  folderName: string;
}

const FolderComponent = ({ folderName }: IProps) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">
        <FolderIcon />
      </span>
      <span>{folderName}</span>
    </div>
  );
};

export default FolderComponent;
