import React from "react";
import DataPickerFormik from "./DataPickerFormik";

const DataNascimentoPicker = () => {
   return (
       <DataPickerFormik
           name="dataNascimento"
           dateFormat="dd/MM/yyyy"
           maxDate={new Date()}
       />

   )

}

export default DataNascimentoPicker;
