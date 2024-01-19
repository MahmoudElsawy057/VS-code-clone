import { IFile } from "../interfaces";

export const doesFileObjExist = (arr: IFile[], id: string) => {
  return arr.some((obj) => obj.id === id);
};
