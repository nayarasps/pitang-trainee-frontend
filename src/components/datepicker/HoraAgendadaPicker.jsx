import React from "react";

import {setMinutes, setHours} from "date-fns";
import DataPickerFormik from "./DataPickerFormik";

const now = new Date();

const HoraAgendadaPicker = () => {
    return (
        <DataPickerFormik
            name="horaAgendada"
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            timeIntervals={60}
            dateFormat="HH:mm"
            minTime={setMinutes(now, 0)}
            maxTime={setHours(setMinutes(now, 45), 23)}
        />
    );
};

export default HoraAgendadaPicker;
