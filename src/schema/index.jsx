import * as yup from "yup"
export let signin=yup.object({

name:yup.string().required('please enter your username'),
email:yup.string().required('please enter email').email("enter valid email"),
password:yup.string().required('please enter password').min(8),


})