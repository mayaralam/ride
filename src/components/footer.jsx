export default function Footer() {
  const sections = [
    {
      title: "الشركة",
      links: ["معلومات عنا", "وظائف", "الصحافة"],
    },
    {
      title: "الإيجارات",
      links: ["دراجات نارية", "دراجات", "التسعير"],
    },
    {
      title: "الدعم",
      links: ["التعليمات", "تواصل معنا", "الأمان"],
    },
    {
      title: "القانون",
      links: ["الشروط", "الخصوصية", "تأمين"],
    },
  ];

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="container mx-auto px-4 text-center grid grid-cols-2 sm:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-gray-400 text-center text-sm mt-12">
        © 2025 RideShare. All rights reserved.
      </div>
    </footer>
  );
}
