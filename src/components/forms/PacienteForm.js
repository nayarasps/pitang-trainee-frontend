import { Formik } from 'formik';
import axios from '../../services/api.js'
import moment from "moment";
import * as Yup from 'yup';

import DataNascimentoPicker from "../datepicker/DataNascimentoPicker";
import DataAgendadaPicker from "../datepicker/DataAgendadaPicker";
import HoraAgendadaPicker from "../datepicker/HoraAgendadaPicker";

const formValidation = Yup.object().shape({

    nome: Yup.string()
        .nullable()
        .required('O nome é obrigatório!'),
    dataNascimento: Yup.string()
        .nullable()
        .required('A data de nascimento é obrigatória!'),
    dataAgendada: Yup.string()
        .nullable()
        .required('A data agendada é obrigatória!'),
    horaAgendada: Yup.string()
        .nullable()
        .required('A hora agendada é obrigatória!')
        .test('horaAgendada', "O agendamento deve ocorrer de 1 em 1 hora", function(value) {
            return new Date(value).getMinutes() === 0;
        })
        .test('horaAgendada', "A hora agendada é inválida", function(value) {
            return new Date(value).getHours() >= new Date().getHours()
        })
});

const inicialValoresForm = {
    nome: '',
    dataNascimento: '',
    dataAgendada: '',
    horaAgendada: '',
}


const handleSubmit = async (values, {resetForm}) => {

    // Formatar os valores para o padrao desejado
    values.dataNascimento = moment(values.dataNascimento).format("DD/MM/YYYY");
    values.dataAgendada = moment(values.dataAgendada).format("DD/MM/YYYY");
    values.horaAgendada = moment(values.horaAgendada).format("HH:mm");

    await axios.post("/agendamentos", values)
        .then((response) => {
            resetForm()
            alert(response.data.mensagem)})

        .catch((error) => {
            // Error
            if (error.response) {
                alert(error.response.data.mensagem);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error);
            }
            console.log(error.config)})
}

const PacienteForm = () => (
    <div className="patientForm">
        <Formik
            initialValues={inicialValoresForm}
            validationSchema={formValidation}
            onSubmit={handleSubmit}>

            {props => {
                const {isSubmitting, handleSubmit, handleChange, touched, errors, values } = props;

                return (
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="nome">Nome</label>
                        <input
                            name="nome"
                            type="text"
                            autoComplete="off"
                            onChange={handleChange}
                            value={values.nome}
                        />

                        {
                            errors.nome && touched.nome ? (<div>{errors.nome}</div>) : null
                        }

                        <label>Data Nascimento</label>
                        <DataNascimentoPicker/>
                        {
                            errors.dataNascimento && touched.dataNascimento ? (<div>{errors.dataNascimento}</div>) : null
                        }

                        <label>Data Agendada</label>
                        <DataAgendadaPicker/>
                        {
                            errors.dataAgendada && touched.dataAgendada ? (<div>{errors.dataAgendada}</div>) : null
                        }

                        <label>Hora Agendada</label>
                        <HoraAgendadaPicker/>
                        {
                            errors.horaAgendada && touched.horaAgendada ? (<div>{errors.horaAgendada}</div>) : null
                        }

                        <button type="submit" disabled={isSubmitting}>
                            Enviar
                        </button>
                    </form>
                );
            }}
        </Formik>
    </div>
);

export default PacienteForm;