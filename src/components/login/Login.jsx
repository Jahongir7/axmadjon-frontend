import { Form, Formik } from "formik";
import { useState } from 'react';
import Button from '@mui/material/Button';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import "./Login.css";
import { Icon } from '@iconify/react';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';
import { Link } from "react-router-dom";
const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <div className="login">
      <div className="login_box">
        <Formik
          initialValues={{ userName: '', password: '' }}
          onSubmit={async (values) => {
            dispatch(login(values));
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <Stack spacing={3} style={{ marginBottom: 30 }}>
                <TextField
                  fullWidth
                  autoComplete="username"
                  name="userName"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Foydalanuvchi nomi"
                  value={values.userName}
                />

                <TextField
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  label="Yashirin so&#8216;z"
                  onChange={handleChange}
                  name="password"
                  onBlur={handleBlur}
                  value={values.password}
                  // {...getFieldProps('password')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Stack>
              <Link to="main/statistics">
                <Button fullWidth size="large" type="submit" variant="contained">
                  Kirish
                </Button>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;