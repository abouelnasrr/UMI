import { useTranslation } from "react-i18next";

import restaurants from "../assets/images/restaurant.jpg";
import hotels from "../assets/images/hotels.jpg";
import salons from "../assets/images/salons.jpg";
import beauty from "../assets/images/beauty.jpg";
import dental from "../assets/images/dental.jpg";

function Industries() {
  const { t } = useTranslation();

  const industries = [
    { key: "restaurants", img: restaurants },
    { key: "hotels", img: hotels },
    { key: "salons", img: salons },
    { key: "beauty", img: beauty },
    { key: "dental", img: dental },
  ];

  return (
    <section id="industries" className="w-full bg-gray-50 dark:bg-black relative overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-black/5 dark:bg-white/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-black/5 dark:bg-white/5 blur-3xl rounded-full"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 relative">

        {/* HEADER */}
        <div className="max-w-[700px] animate-fadeUp">
          <h2 className="text-[34px] md:text-[40px] font-semibold tracking-tight text-black dark:text-white">
            {t("industries.title")}
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400 text-[16px] md:text-[17px] leading-[28px]">
            {t("industries.desc")}
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((item, i) => (
            <div
              key={i}
              className="group relative h-[280px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.key}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">

                {/* TITLE */}
                <h3 className="text-white text-[20px] font-semibold">
                  {t(`industries.items.${item.key}.title`)}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-white/80 text-[14px] leading-[22px] opacity-0 group-hover:opacity-100 transition duration-500">
                  {t(`industries.items.${item.key}.desc`)}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Industries;