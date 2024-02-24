import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignInForm.scss';

function SignInForm () {
    return (

    <div className='container'>
        <div>
            <h1>Sign In</h1>

            <Formik
                initialValues={{
                email: '',
                password: '',
                }}
                
                validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required(''),
                password: Yup.string()                        
                    .min(8, 'Password must be at least 8 characters')
                    .required(''),
                })}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}>

                <Form>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>                            <Field type="password" name="password" />
                        <ErrorMessage name="password" />
                    </div>
                    <button type="submit">Submit</button>

                    <p>Create an account</p>
                </Form>

            </Formik>
        </div> 
    </div>
    )
}

export default SignInForm;