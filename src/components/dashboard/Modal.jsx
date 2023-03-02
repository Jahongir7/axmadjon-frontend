import classes from "../../assets/styles/clients.module.css"
import { NumericFormat } from 'react-number-format';
import Button from '@mui/material/Button';
import { Stack, TextField } from '@mui/material';
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
const MyModal = ({ modalData }) => {
    return (
        <div className={classes.myModal}>
            <div className={classes.flex}>
                <h3>{modalData.name}</h3>
                <div className={classes.debt}>Qarz <b>
                    -<NumericFormat
                        value={modalData.debt}
                        displayType="text"
                        thousandSeparator={true}
                    />
                </b></div>
            </div>
            <div className={classes.flex}>
                <a href={`tel:${modalData.phone}`}>+998{modalData.phone}</a>
                <div className={classes.allPrice}>Jami <b>
                    <NumericFormat
                        value={modalData.allPrice}
                        displayType="text"
                        thousandSeparator={true}
                    />
                </b></div>
            </div>
            <Link to={`client/${modalData._id}`} style={{width:"100%", display:"inline-block"}}>
                <Button fullWidth size="large" type="button" variant="contained" style={{ margin: "1rem 0" }}>
                   <b> Batafsil</b> 
                </Button>
            </Link>
            <hr />

            {/* Pul o'tkazish qismi */}
            <h3>Pul o'tkazish</h3>
            <Formik
                initialValues={{ userName: '', password: '' }}
                onSubmit={async (values) => {
                    dispatch(login(values));
                }}
            >
                {({ values, handleChange, handleBlur }) => (
                    <Form>
                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                autoComplete="username"
                                name="To'lov miqdori"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="To'lov miqdori"
                                value={values.userName}
                            />

                            <TextField
                                fullWidth
                                autoComplete="current-password"
                                type="date"
                                onChange={handleChange}
                                name="password"
                                onBlur={handleBlur}
                                value={values.password}
                            // {...getFieldProps('password')}
                            />
                        </Stack>
                        <Button size="large" type="submit" variant="contained" style={{ marginTop: "1rem" }}>
                            Yuborish
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default MyModal;