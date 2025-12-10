import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function Register() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup.string().email("البريد غير صالح").required("مطلوب"),
    password: yup.string().min(6, "الحد الأدنى 6 أحرف").required("مطلوب"),
    name: yup.string().min(3, "الحد الأدنى 3 أحرف").required("مطلوب"),
    phone: yup
      .string()
      .matches(/^[0-9]{10,15}$/, "أدخل رقم هاتف صحيح")
      .required("مطلوب"),
    agree: yup.boolean().oneOf([true], "يجب الموافقة على الشروط"),
  });
  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
      phone: values.phone,
    };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    toast.success("!التسجيل ناجح");
    resetForm();
    navigate("/login");
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 p-6 text-right">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-8">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🚴‍♀️</div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              RideShare Rentals
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">أنشئ حسابك وابدأ رحلتك</p>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            تسجيل حساب جديد
          </h2>
          <Formik
            initialValues={{ email: "", password: "", name: "", phone: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
              {() => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                  الاسم الكامل
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="أدخل اسمك"
                  className="w-full p-3 border rounded mt-1 text-right"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                  البريد الإلكتروني
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="أدخل بريدك"
                  className="w-full p-3 border rounded mt-1 text-right"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                  كلمة المرور
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="اختر كلمة مرور"
                  className="w-full p-3 border rounded mt-1 text-right"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                  رقم الهاتف
                </label>
                <Field
                  name="phone"
                  type="number"
                  placeholder="أدخل رقم هاتفك"
                  className="w-full p-3 border rounded mt-1 text-right"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-200">
                <Field type="checkbox" name="agree" />
                <span>أوافق على الشروط والأحكام</span>
              </div>
              <ErrorMessage
                name="agree"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <button
                type="submit"
                className="cursor-pointer w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700"
              >
                إنشاء حساب
              </button>
            </Form>
             )}
          </Formik>
          <div className="text-center text-sm text-gray-600 dark:text-gray-200 mt-6">
            لديك حساب بالفعل؟{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              تسجيل الدخول
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
