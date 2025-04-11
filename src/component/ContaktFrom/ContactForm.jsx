import React, { useId } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css"
function ContactForm({ addContact, setSearchQuery, searchQuery }) {
    const initialFormData = {
        username: '',
        number: '',
    };

    const nameId = useId();
    const numberId = useId();

    const FeedbackSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Имя слишком короткое!")
            .max(50, "Имя слишком длинное!")
            .required("Имя обязательно"),

        number: Yup.string()
            .matches(/^\+?[0-9]{10,15}$/, "Неверный формат номера телефона")
            .required("Номер телефона обязателен"),
    });

    const handleSubmit = (values, { resetForm }) => {
        addContact({
            username: values.username,
            number: values.number,
            id: nanoid(),
        });

        resetForm();
    };

    return (
        <>
            <Formik
                initialValues={initialFormData}
                validationSchema={FeedbackSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className={s.form}>
                        <h4>Name</h4>
                        <Field  className={s.formInput} name="username" id={nameId} />
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />

                        <h4>Number</h4>
                        <Field className={s.formInput} type="tel" name="number" id={numberId} />
                        <ErrorMessage name="number" component="div" style={{ color: 'red' }} />

                        <button className={s.formButton} type="submit">Apply</button>
                    </Form>
                )}
            </Formik>

            <div style={{ marginTop: "1rem" }}>
                <input
                    className={s.searchInput}
                    type="text"
                    placeholder="Поиск по имени"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </>
    );
}

export default ContactForm;