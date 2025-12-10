import Nav from "../components/nav";
import bcg from "../assets/bcg.png";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import {
  ClockIcon,
  ShieldCheckIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function home() {
  const features = [
    {
      title: "تأجير مرن",
      description:
        "استأجر بالساعة أو اليوم أو الأسبوع. يمكنك الإلغاء أو التعديل في أي وقت.",
      icon: ClockIcon,
    },
    {
      title: "مؤمن عليه بالكامل",
      description: "تتمتع جميع المركبات بتغطية تأمينية شاملة.",
      icon: ShieldCheckIcon,
    },
    {
      title: "مواقع متعددة",
      description: "الاستلام والتوصيل في أي من مواقعنا المناسبة.",
      icon: MapPinIcon,
    },
    {
      title: "أفضل الأسعار",
      description: "أسعار تنافسية بدون رسوم خفية. ما تراه هو ما تدفعه.",
      icon: CurrencyDollarIcon,
    },
  ];
  const cards = [
    {
      title: "دراجات نارية",
      description:
        "من الدراجات النارية إلى الدراجات الرياضية، اعثر على الرحلة المثالية لمغامرتك.",
      price: " 600 جنيهًا في اليوم",
      image: "/src/assets/moto2.jpg",
    },
    {
      title: "دراجات",
      description:
        "استكشف المدينة على الدراجات الصديقة للبيئة المثالية للمغامرات الحضرية.",
      price: " 50 جنيهًا في اليوم",
      image: "/src/assets/bic1.jpg",
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      <div
        className="relative h-[130vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bcg})` }}
      >
        <Nav />
        <div className="container mx-auto flex flex-col px-4 justify-center items-center min-h-full gap-4">
          <h6 className="text-5xl text-white mb-1">رحلتك تبدأ هنا</h6>
          <h2 className="whitespace-pre-line text-white text-center">
            استكشف الطريق المفتوح على عجلتين. استأجر دراجات نارية و
            <br /> دراجات هوائية لمغامرتك القادمة.
          </h2>
          <div className="flex gap-5 text-white mt-6 items-center pb-10">
            <button
              onClick={() => navigate("/about")}
              className="opacity-90 shadow-2xl bg-transparent text-white border-2 border-white dark:hover:bg-black px-7 py-2.5 font-bold cursor-pointer rounded-lg"
            >
              أعرف أكثر
            </button>
            <button
              onClick={() => navigate("/moto")}
              className="bg-white text-black dark:text-white dark:bg-black px-7 py-3 font-bold cursor-pointer rounded-lg flex items-center justify-center gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 21 21"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.499 6.497L3.5 10.499l4 4.001m9-4h-13"
                  stroke-width="1"
                />
              </svg>
              تصفح المركبات
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 ">
          <section className="py-12 px-6 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-10">
              لماذا تختارنا؟
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map(({ title, description, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <Icon className="h-10 w-10 dark:text-white text-black mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-200">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
<div className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <section className="py-16 px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-4">اختر رحلتك</h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
            سواء كنت تبحث عن الإثارة أو الترفيه، فلدينا السيارة المثالية لك
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative h-90 rounded-lg overflow-hidden shadow-md group"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="absolute bottom-0 w-full text-white text-center px-4 pb-6 z-10">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="text-sm mt-1">{card.description}</p>
                  <p className="text-sm font-bold mt-1">
                    ابتداء من{card.price}
                  </p>
                  <button
                    onClick={() => navigate("/moto")}
                    className="mt-2 text-white underline font-medium"
                  >
                    استكشف →
                  </button>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
              </div>
            ))}
          </div>
        </section>
      </div>
      </div>
      <div className="bg-black">
        <section className="container mx-auto  text-white py-16 px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            هل أنت مستعد للانطلاق على الطريق؟
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            احجز دراجتك النارية أو الهوائية اليوم وابدأ مغامرتك غدًا
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/moto")}
              className="cursor-pointer bg-white text-black px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 21 21"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.499 6.497L3.5 10.499l4 4.001m9-4h-13"
                  stroke-width="1"
                />
              </svg>
              ابدأ الحجز
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="cursor-pointer border border-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition"
            >
              تواصل معنا
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
