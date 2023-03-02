import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Stack, TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import classes from "../../assets/styles/BuildingsAdd.module.css"
import "../../assets/styles/buildings.css"

// ----------------------------------------------------------------------
const ValidationAddCompany = Yup.object().shape({
    name: Yup.string()
        .required("Ism kiritilishi shart!")
        .min(3, "Ism kamida 3 ta harfdan iborat bo'lishi kerak!")
        .max(20, "Ism ko'pi bilan 20 ta harfdan iborat bo'lishi kerak!"),
    director: Yup.number()
        .required("Qavatlar soni kiritilishi shart!")
        .min(1, "Minimum 1 qavat")
        .max(30, "Bo'lishi mumkin amas"),
    accountant: Yup.number()
        .required("Har qavatdagi kvartiralar soni kiritilishi shart!")
        .max(20, "Ism ko'pi bilan 20 ta harfdan iborat bo'lishi kerak!"),
    companyPhone: Yup.string()
        .required("Bino manzili kiritilishi shart!")
        .min(7, "Telefon raqam noto'g'ri kiritildi!")
        .max(54, "Telefon raqam noto'g'ri kiritildi!"),
    accountantPhone: Yup.string()
        .required("Telefon raqam kiritilishi shart!")
        .min(7, "Telefon raqam noto'g'ri kiritildi!")
        .max(14, "Telefon raqam noto'g'ri kiritildi!"),
});
export default function BuildingAdd() {
    return (
        <div className={classes.contract_form}>
            <h1>Bino qo'shish</h1>
            <Formik
                initialValues={{
                    name: "",
                    director: "",
                    companyPhone: "",
                    accountant: "",
                    accountantPhone: "",
                }}
                onSubmit={(values, { resetForm }) => {
                    resetForm();
                }}
                validationSchema={ValidationAddCompany}
            >
                {({ values, handleChange, handleBlur, errors, touched }) => (
                    <Form>
                        <Stack style={{ marginBottom: 30 }} className={classes.flexx}>
                            <div>
                                <TextField
                                    autoComplete="username"
                                    type="text"
                                    label="Bino nomi"
                                    value={values.name}
                                    className={classes.contract_input}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="name"
                                    error={Boolean(touched.name && errors.name)}
                                />
                                <div className={classes.errors}>
                                    {errors.name && touched.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div>
                                <TextField
                                    autoComplete="username"
                                    type="text"
                                    label="Qavatlar soni"
                                    value={values.director}
                                    className={classes.contract_input}
                                    onChange={(e) => {
                                        handleChange
                                    }}
                                    onBlur={handleBlur}
                                    name="director"
                                    error={Boolean(touched.director && errors.director)}
                                />
                                <div className={classes.errors}>
                                    {errors.director && touched.director ? (
                                        <div>{errors.director}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div>
                                <TextField
                                    autoComplete="username"
                                    type="text"
                                    label="Har qavatdagi kvartiralar soni"
                                    value={values.companyPhone}
                                    className={classes.contract_input}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="companyPhone"
                                    error={Boolean(touched.companyPhone && errors.companyPhone)}
                                />
                                <div className={classes.errors}>
                                    {errors.companyPhone && touched.companyPhone ? (
                                        <div>{errors.companyPhone}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div>
                                <TextField
                                    autoComplete="username"
                                    type="text"
                                    label="Bino manzili"
                                    value={values.accountant}
                                    className={classes.contract_input}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="accountant"
                                    error={Boolean(touched.accountant && errors.accountant)}
                                />
                                <div className={classes.errors}>
                                    {errors.accountant && touched.accountant ? (
                                        <div>{errors.accountant}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div style={{ margin: "1rem" }}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Pastki qavati do'kon" />
                            </div>
                        </Stack>
                        <Button
                            size="large"
                            type="submit"
                            variant="contained"
                            style={{ marginLeft: "20px" }}
                        >
                            Ma'lumotlarni yuborish
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}