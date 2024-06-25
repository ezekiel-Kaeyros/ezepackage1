import { Step1T, Step2T } from "@/redux/features/addDocument-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { ILoggedInUserReturnType } from "@/services/authService.d";
import { useDispatch, useSelector } from "react-redux";

export const useAddDocument = () => {
  const step1: Step1T = useSelector(
    (state: RootState) => state.AddDocument.step1
  );
  const step2: Step2T= useSelector(
    (state: RootState) => state.AddDocument.step2
  );
    
     const step3: { file: File|undefined; urlFile: string } = useSelector(
       (state: RootState) => state.AddDocument.step3
     );
     const step4: string = useSelector(
       (state: RootState) => state.AddDocument.step4
     );
  const idDoc: string = useSelector((state: RootState) => state.AddDocument.id);
    const arrayDoc: {
      id?: string;
      categorie?: string;
      type?: string;
      author?: string;
      name?: string;
      description?: string;
      coverImage?: any;
      ibsn?: string;
      url?: string;
      num?: number;
      save?: boolean;
      img?: any;
      confidentiality?: string;
      // document: File | undefined;
      file?: File | undefined;
      urlFile?: string;
    }[] = useSelector((state: RootState) => state.AddDocument.arrayDocs);
  const dispatch = useDispatch<AppDispatch>();

  return { step1, dispatch, step2,step3 ,step4,arrayDoc,idDoc};
};
