const initialState = {
  company_name: "",
  company_website: "",
  company_contact: "",
};
const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    // clearState to reset the state
    clearState: (state) => {
      state.company_name = "";
      state.company_website = "";
      state.company_contact = "";
    },
  },
});
