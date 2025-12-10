import Nav from "../components/nav";
import aboutus from "../assets/aboutus.png";
import middle from "../assets/middle.png";
import last from "../assets/last.png";
import { FaBicycle, FaMountain, FaBolt } from "react-icons/fa";
import { FaShieldAlt, FaHeart, FaLeaf, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
export default function about() {
  const navigate = useNavigate();
  const vehicleTypes = [
    {
      title: "دراجات المدينة",
      count: "50+",
      description:
        "تعتبر دراجاتنا في المدينة مثالية للاستكشاف الحضري، فهي مريحة وموثوقة وسهلة القيادة عبر الشوارع المزدحمة.",
      icon: <FaBicycle className="text-indigo-600 text-3xl" />,
    },
    {
      title: "دراجات جبلية",
      count: "30+",
      description:
        "استمتع بالمسارات والمناطق الوعرة مع دراجاتنا الجبلية المتميزة، المجهزة للمغامرة والمتانة.",
      icon: <FaMountain className="text-indigo-600 text-3xl" />,
    },
    {
      title: "دراجات نارية",
      count: "40+",
      description:
        "من الدراجات النارية إلى الدراجات الرياضية، يوفر أسطول الدراجات النارية المتنوع لدينا خيارات تناسب كل الأنماط ومستويات المهارة.",
      icon: <FaBolt className="text-indigo-600 text-3xl" />,
    },
  ];

  const values = [
    {
      title: "السلامة أولا",
      description:
        "تخضع كل مركبة لصيانة دقيقة وفحوصات سلامة دقيقة. يتم توفير الخوذات ومعدات السلامة، بالإضافة إلى جلسات إحاطة شاملة لضمان رحلة آمنة.",
      icon: (
        <FaShieldAlt className="text-indigo-600 dark:text-indigo-400 text-3xl" />
      ),
    },
    {
      title: "رعاية العملاء",
      description:
        "نحن نضع رضا العملاء في المقام الأول، حيث نقدم المساعدة على مدار الساعة طوال أيام الأسبوع من خلال فريق ودود للإجابة على الأسئلة وضمان أفضل تجربة.",
      icon: (
        <FaHeart className="text-indigo-600 dark:text-indigo-400 text-3xl" />
      ),
    },
    {
      title: "الاستدامة",
      description:
        "نحن نعمل على تقليل التأثير البيئي من خلال خيارات صديقة للبيئة مثل الدراجات النارية والكهربائية وممارسات الأعمال المستدامة.",
      icon: (
        <FaLeaf className="text-indigo-600 dark:text-indigo-400 text-3xl" />
      ),
    },
    {
      title: "مجتمع",
      description:
        "نحن نعمل على تعزيز مجتمع نابض بالحياة من الدراجين من خلال الرحلات الجماعية والأحداث والشراكات مع الشركات المحلية.",
      icon: (
        <FaUsers className="text-indigo-600 dark:text-indigo-400 text-3xl" />
      ),
    },
  ];
  return (
    <>
      <div
        className="h-[65vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutus})` }}
      >
        <Nav />
        <div className="container mx-auto flex flex-col items-center gap-5 px-4">
          <h3 className="mt-42 text-xl font-medium text-white ">
            Rideshare نبذة عن
          </h3>
          <h2 className="text-white text-shadow-lg/30 text-center">
            شريكك الموثوق به لمغامرات الدراجات ذات العجلتين منذ عام 2015
            <br />
          </h2>
        </div>
      </div>
      <section className="py-12 px-6 bg-white dark:bg-gray-900">
        <div className="container px-4 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-15">
          <div className="w-full lg:w-1/2">
            <img
              src={middle}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 text-right">
            <h2 className="text-2xl font-medium text-gray-800 dark:text-white mb-4 ">
              قصتنا
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">
              انطلقت رايد شير من شغف بسيط: حب الطرق المفتوحة والحرية التي
              تصاحبها. ما بدأ كمتجر دراجات صغير في وسط المدينة، نما ليصبح خدمة
              تأجير دراجات نارية ودراجات هوائية رائدة، تخدم آلاف المغامرين
              سنويًا.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">
              نؤمن بحق الجميع في الحصول على دراجات نارية ودراجات هوائية عالية
              الجودة، سواءً كنتَ راكبًا محترفًا يبحث عن ملاذ في عطلة نهاية
              الأسبوع أو سائحًا يرغب في استكشاف المدينة على دراجته. مهمتنا هي أن
              نجعل كل رحلة لا تُنسى، آمنة، وممتعة.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              على مر السنين، بنينا علاقات مع أفضل المصنّعين، ودربنا فريقنا على
              تقديم خدمة استثنائية، وأنشأنا مجتمعًا من الدراجين الذين يشاركوننا
              شغفنا بالمغامرة. لسنا مجرد خدمة تأجير، بل بوابتك لتجارب لا تُنسى.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white dark:bg-gray-900">
        <section className="container mx-auto py-16 px-6 md:px-12 text-gray-800 dark:text-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-right bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  {value.icon}
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </div>
                <p className="text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="py-12 px-6">
        <div className="container px-4 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img src={last} className="rounded-xl w-full h-auto object-cover" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-medium text-gray-800 dark:text-white mb-4">
              أسطولنا
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">
              نحافظ على أسطول متنوع وعالي الصيانة يضم أكثر من 120 دراجة هوائية
              ودراجة نارية. يتم اختيار كل مركبة بعناية فائقة لضمان الجودة
              والراحة والأداء، ثم تخضع لصيانتها بدقة لضمان سلامتكم ومتعتكم.
            </p>
            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right mt-4">
                {vehicleTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {type.icon}
                      <h3 className="text-xl font-semibold">
                        {type.title}{" "}
                        <span className="text-sm text-gray-500 dark:text-gray-300">
                          ({type.count})
                        </span>
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
      <div className="bg-blue-600">
        <section className=" text-white container mx-auto py-16 px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            هل أنت مستعد لبدء مغامرتك؟
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            سواء كنت تخطط لرحلة برية في عطلة نهاية الأسبوع أو جولة سريعة في
            المدينة، فلدينا الرحلة المثالية في انتظارك.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition"
            >
              تواصل معنا
            </button>
            <button
              onClick={() => navigate("/moto")}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition"
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
              تصفح أسطولنا
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
