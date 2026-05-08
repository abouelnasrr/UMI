import { useTranslation } from "react-i18next";

import rep from "../assets/images/reputation.jpg";
import flow from "../assets/images/flow.jpg";
import loyalty from "../assets/images/loyalty.jpg";
import reach from "../assets/images/reach.jpg";
import intel from "../assets/images/intelligence.jpg";

function Services() {
  const { t } = useTranslation();

  const services = [
    { key: "reputation", img: rep },
    { key: "flow", img: flow },
    { key: "loyalty", img: loyalty },
    { key: "reach", img: reach },
    { key: "intelligence", img: intel },
  ];

  return (
    <section id="services" className="w-full bg-white dark:bg-black relative overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-black/5 dark:bg-white/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-black/5 dark:bg-white/5 blur-3xl rounded-full"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 relative">

        {/* HEADER */}
        <div className="max-w-[700px] animate-fadeUp">
          <h2 className="text-[34px] md:text-[40px] font-semibold tracking-tight text-black dark:text-white">
            {t("services.title")}
          </h2>

          <p className="mt-5 text-gray-500 dark:text-gray-400 text-[16px] md:text-[17px] leading-[28px]">
            {t("services.desc")}
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {services.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              
              {/* IMAGE */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.key}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                {/* TITLE ON IMAGE */}
                <h3 className="absolute bottom-4 left-6 text-white text-[20px] font-semibold">
                  {t(`services.items.${item.key}.title`)}
                </h3>
              </div>

              {/* CONTENT */}
              <div className="p-7">

                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-[26px]">
                  {t(`services.items.${item.key}.desc`)}
                </p>

                <p className="mt-4 text-sm font-medium text-black dark:text-white">
                  {t(`services.items.${item.key}.result`)}
                </p>

                {/* CTA */}
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white group-hover:gap-3 transition-all">
                  {t("services.learn_more")}
                  <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    →
                  </span>
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;