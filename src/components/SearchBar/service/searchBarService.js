import { object, string } from "yup";

export const initialValues = () => {
  return { 
    origin: "", 
    destination: "", 
    date: "", 
    load: "",
    };
};

export const searchShipmentSchema = object({
  load: string("Enter load").required("Load is required"),
});
