// import React, { useId } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
// import { nanoid } from "nanoid";
// import s from "./ContactForm.module.css"

const ContactForm = ({ onAdd }) => {
    const schema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required'),
        number: Yup.string()
            .min(5, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
    });

    const handleSubmit = (values, actions) => {
        onAdd(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label>Name:</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </div>
                <div>
                    <label>Number:</label>
                    <Field type="text" name="number" />
                    <ErrorMessage name="number" component="div" />
                </div>
                <button type="submit">Add Contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;