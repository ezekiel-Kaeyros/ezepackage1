import { configureStore, createSlice } from "@reduxjs/toolkit";
export type Step1T = {
  toLowerCase(): { type: any; };
  categorie: string;
  type: string;
};
export type Step2T = {
  author:string;
  title: string;
  firstName: string;
  lastName: string;
  description: string;
  coverImage: any;
  url:string
};

type AddDocumentState = {
  step1: Step1T;
  step2: Step2T;
  step3: {
    file: File | undefined;
    urlFile: string;
  };
  step4: string;
  arrayDocs: {
    id: string;
    categorie: string;
    type: string;
    title:string;
    author: string;
    // name: string;
    firstName:string;
    lastName:string;
    description: string;
    coverImage: any;
    // ibsn: string;
    url: string;
    num?: number;
    save?: boolean;
    img?: any;
    confidentiality: string;
    // document: File | undefined;
    file: File | undefined;
    urlFile: string;
  }[];
  id: string;
};

const initialState: AddDocumentState = {
  step1: {
    categorie: "", type: "",
    toLowerCase: function (): {
      type // const arraytest = [
      : any;
    } {
      throw new Error("Function not implemented.");
    }
  },
  step2: {
    title: "",
    firstName: "",
    description: "",
    author:"",
    coverImage: undefined,
    url: "",
    lastName: "",
  },
  step3: { file: undefined , urlFile:''},
  step4: "",
  arrayDocs: [],
  id: "",
};

export const addDocument = createSlice({
  name: "auth",
  initialState,
  reducers: {
    step1Handler: (state, action) => {
      state.step1 = action.payload;
    },
    step2Handler: (state, action) => {
      state.step2 = action.payload;
    },
    step3Handler: (state, action) => {
      state.step3 = action.payload;
      
        // console.log(
        //   "111111111111",
        //   URL.createObjectURL(state.step2.coverImage)
        // );
        
    },
    step4Handler: (state, action) => {
      state.arrayDocs = [
        ...state.arrayDocs,
        {
          ...state.step1,
          ...state.step2,
          confidentiality: action.payload,
          ...state.step3,
          id: (state.arrayDocs.length + 1).toString(),
          num: 0,
          save: false
        },
      ];
      
    //   state.step4 = action.payload;
      (state.step1 = { categorie: "", type: "", toLowerCase: function (): {
        type // const arraytest = [
        : any;
      } {
        throw new Error("Function not implemented.");
      } }),
        (state.step2 = {
          title: "",
          firstName: "",
          description: "",
          author:"",
          coverImage: undefined,
          lastName: "",
          url: "",
        }),
        (state.step3 = { file: undefined, urlFile: "" }),
        (state.step4 = "");
    },
    idHandler: (state, action) => {
      state.id = action.payload
      
    }
  },
});

export const { step1Handler, step2Handler, step3Handler, step4Handler,idHandler } =
  addDocument.actions;
export default addDocument.reducer;
