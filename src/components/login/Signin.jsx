import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BsGoogle, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SignIn = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    }
    const onSubmit = (values) => console.log(values);

    const validationSchema = Yup.object({
        email: Yup.string().required('ایمیل نمیتواند خالی باشد !'),
        password: Yup.number().required('رمز عبور نمیتواند خالی باشد !'),
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    console.log(formik.errors);
    return (
            <form className='w-full flex flex-col items-center gap-y-4'>

                <div className="w-full h-auto mt-4 flex flex-col ">
                    <label className='text-slate-700 dark:text-text-gray'>ایمیل :</label>
                    <input className='outline-none border  px-4 py-2 mt-2 rounded-xl bg-white dark:border-slate-500 dark:text-text-gray dark:bg-gray-700' type="email" name='email' placeholder='ایمیل خودرا وارد کنید ...' {...formik.getFieldProps('email')} />
                    {formik.errors.email && formik.touched.email && (<div className='text-red-400 mt-2 ml-4'>{formik.errors.email}</div>)}
                </div>
                <div className="w-full h-auto mt-4 flex flex-col ">
                    <label className='text-slate-700 dark:text-text-gray'>رمز عبور :</label>
                    <input className='outline-none border dark:border-slate-500 px-4 py-2 mt-2 rounded-xl bg-white dark:text-text-gray dark:bg-gray-700' type="tel" name='password' placeholder='رمزعبور خود را وارد کنید ...' {...formik.getFieldProps('password')} />
                    {formik.errors.password && formik.touched.password && (<div className='text-red-400 mt-2 ml-4'>{formik.errors.password}</div>)}
                </div>

                <button type='submit' className='w-full py-2 text-slate-50 bg-gradient-to-r from-blue-300 to-purple-600 mt-10 rounded-xl dark:from-gray-500' onClick={formik.handleSubmit}>ورود</button>
                <span className='mt-12 text-sm text-slate-400'>Or signUp using  </span>
                <div className='flex mt-6 w-64 justify-between'>
                    <BsGoogle className='w-8 h-8 text-2xl text-white bg-red-600 rounded-lg p-2 cursor-pointer dark:bg-gradient-to-r dark:from-gray-700 dark:to-slate-500' />
                    <BsTwitter className='w-8 h-8 text-2xl text-white bg-blue-700 rounded-lg p-2 cursor-pointer dark:bg-gradient-to-r dark:from-gray-700 dark:to-slate-500' />
                    <FaFacebookF className='w-8 h-8 text-2xl text-white bg-gray-700 rounded-lg p-2 cursor-pointer dark:bg-gradient-to-r dark:from-gray-700 dark:to-slate-500' />
                </div>
            </form>
    );
}

export default SignIn;