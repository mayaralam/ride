import Nav from "../components/nav";
import touch from "../assets/touch.png";
import { toast } from "react-hot-toast";
import Footer from "../components/footer";
export default function contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success(".تم ارسال رسالتك بنجاح! سنعود إليك قريبًا");
  };
  return (
    <>
     
      <div className="bg-white dark:bg-gray-900">
        <div
          className="h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${touch})` }}
        >
           <Nav />
          <div className="container mx-auto flex flex-col items-center text-center gap-5 px-4">
            <h3 className="mt-22 text-3xl  text-white text-shadow-lg/30">
              تواصل معنا
            </h3>
            <h2 className="text-white text-shadow-lg/30">
              هل لديك أسئلة حول تأجير الدراجات النارية أو الهوائية؟ نحن هنا
              لمساعدتك في التخطيط لمغامرتك القادمة.
            </h2>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 text-right gap-25 p-6 mb-7  rounded-lg shadow-lg">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">📞 الهاتف</h3>
              <p>+1 (555) 123-4567</p>
              <p>من الإثنين إلى الجمعة من الساعة 8 صباحًا حتى 6 مساءً</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">📧 البريد الإلكتروني</h3>
              <p>info@bikemotorental.com</p>
              <p>سوف نقوم بالرد خلال 24 ساعة</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">📍 الموقع</h3>
              <p>123 Adventure Drive</p>
              <p>الإسكندرية، مصر 94102</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">🕒 ساعات العمل</h3>
              <p>الأحد - الاثنين </p>
              <p>8:00 AM - 7:00 PM</p>
            </div>
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold text-red-600">
                🚨 المساعدة في حالات الطوارئ
              </h3>
              <p>هل تحتاج إلى مساعدة على الطريق أثناء استئجار سيارتك؟</p>
              <p>
                الخط الساخن على مدار الساعة طوال أيام الأسبوع: +1 (555) 999-9999
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="text-right w-full p-3 border rounded"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="text-right w-full p-3 border rounded"
              />
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="text-right w-full p-3 border rounded"
              />
              <select className="w-full p-3 border rounded text-right bg-white dark:bg-gray-900">
                <option>مهتم بـ</option>
                <option>الإيجار اليومي</option>
                <option>الإيجار الأسبوعي</option>
                <option>جولة إرشادية</option>
              </select>
              <textarea
                placeholder="رسالة"
                rows="4"
                className="text-right w-full p-3 border rounded"
              ></textarea>
              <button
                type="submit"
                className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
              >
                إرسال رسالة
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
