import { object, string } from 'yup'

let userPanelSchema = object({
    fullname: string('لطفا نام رو به درستی وارد کنید').min(3, 'نام حداقل باید 3 کاراکتر باشه').max(50, 'نام حداکثر باید 100 کاراکتر باشه').required('لطفا نام رو وارد کنید'),
    email: string('لطفا ایمیل رو به درستی وارد کنید').email("فرمت ایمیل درست نیست").min(5, 'ایمیل حداقل باید 5 کاراکتر باشه').max(100, 'ایمیل حداکثر باید 100 کاراکتر باشه').required('لطفا ایمیل رو وارد کنید'),
});

export default userPanelSchema;
