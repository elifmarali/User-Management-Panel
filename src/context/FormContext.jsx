import { createContext, useState } from "react";

const FormContext = createContext();

function FormProvider({ children }) {
  const [open, setOpen] = useState(false);
  console.log(open);
  const data = { open, setOpen };
  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
}
export default FormContext;
export { FormProvider };
