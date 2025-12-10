import Nav from "../components/nav";
import { useState } from "react";
import { toast } from "react-hot-toast";
import vi1 from "../assets/vi1.jpg";
import vi2 from "../assets/vi2.jpg";
import vi3 from "../assets/vi3.jpg";
import vi4 from "../assets/vi4.jpg";
import vi5 from "../assets/vi5.jpg";
import vi6 from "../assets/vi6.jpg";
import Footer from "../components/footer";
export default function moto() {
  const handleBooking = () => {
    toast.success("تم الحجز");
  };
  const products = [
    {
      name: "دراجة نارية رياضية",
      type: "دراجة نارية",
      description: "دراجة رياضية عالية الأداء مثالية لمحبي الإثارة",
      rate: "200 جنيهًا",
      image: vi1,
    },
    {
      name: "دراجة نارية في المناطق الحضرية",
      type: "دراجة نارية",
      description: "مثالية للتنقل داخل المدينة والرحلات السريعة",
      rate: "350 جنيهًا",
      image: vi3,
    },
    {
      name: "دراجة نارية كروزر",
      type: "دراجة نارية",
      description: "رحلة مريحة للرحلات الطويلة",
      rate: "300 جنيهًا",
      image: vi2,
    },
    {
      name: "الدراجة الجبلية",
      type: "دراجة",
      description: "دراجة متينة مصممة للمسارات والمغامرات على الطرق الوعرة",
      rate: "100 جنيهًا",
      image: vi4,
    },
    {
      name: "سكوتر كهربائي",
      type: "سكوتر",
      description: "خيار صديق للبيئة للتنقلات الحضرية القصيرة",
      rate: "200 جنيهًا",
      image: vi6,
    },
    {
      name: "دراجة الطريق",
      type: "دراجة",
      description: "خفيف الوزن وسريع لمحبي ركوب الدراجات على الطرق",
      rate: "50 جنيهًا",
      image: vi5,
    },
  ];
  const categories = ["سكوتر", "دراجة", "دراجة نارية", "الجميع"];
  const [activeCategory, setActiveCategory] = useState("الجميع");
  const filteredProducts =
    activeCategory === "الجميع"
      ? products
      : products.filter((p) => p.type === activeCategory);
  return (
    <>
      <Nav />
      <section className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">اختر رحلتك</h2>
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "cursor-pointer bg-gray-200 text-gray-700 dark:text-gray-300 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div
                className="h-99 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {product.description}
                </p>
                <p className="text-indigo-600 font-bold mb-4">
                  سعر الساعة:
                  {product.rate}
                </p>
                <button
                  onClick={handleBooking}
                  className="cursor-pointer bg-black md:bg-white text-indigo-500 px-3 py-1.5 rounded-full border font-medium"
                >
                  احجز الأن
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
