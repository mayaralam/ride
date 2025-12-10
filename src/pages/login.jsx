import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function login() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("مطلوب")
      .test("is-valid", "أدخل بريدًا إلكترونيًا أو رقم هاتف صالحًا", (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }),
    password: yup.string().required("مطلوب"),
  });

  const handleLogin = (values, { resetForm }) => {
    const { email, password } = values;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => (u.email === email || u.phone === email) && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      toast.success("!تم تسجيل الدخول بنجاح");
      resetForm();
      navigate("/");
    } else {
      toast.error("بريد إلكتروني أو كلمة مرور غير صحيحة");
    }
  };
  return (
    <div className="text-right min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 p-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🚴‍♂️</div>
          <h1 className="text-2xl font-bold text-gray-800">
            RideShare Rentals
          </h1>
          <p className="text-sm text-gray-500">الدراجات النارية والهوائية</p>
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          مرحبًا بعودتك
        </h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
        >
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                البريد الإلكتروني
              </label>
              <Field
                type="email"
                name="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full p-3 border rounded mt-1 text-right"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                كلمة المرور
              </label>
              <Field
                type="password"
                name="password"
                placeholder="أدخل كلمة المرور الخاصة بك"
                className="w-full p-3 border rounded mt-1 text-right"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <a href="#" className="text-blue-600 hover:underline">
                هل نسيت كلمة السر؟
              </a>
              <label className="flex items-center gap-2">
                <Field type="checkbox" name="remember" />
                تذكرنى
              </label>
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700"
            >
              تسجيل الدخول
            </button>
          </Form>
        </Formik>
        <div className="text-center text-sm text-gray-600 mt-6">
          ليس لديك حساب؟{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            اشتراك
          </a>
        </div>
      </div>
    </div>
  );
}
