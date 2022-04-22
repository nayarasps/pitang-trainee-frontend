import React from "react";
import DataPickerFormik from "./DataPickerFormik";

const DataAgendadaPicker = () => {
    return (
        <DataPickerFormik
            name="dataAgendada"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
        />

    )

}

export default DataAgendadaPicker;
