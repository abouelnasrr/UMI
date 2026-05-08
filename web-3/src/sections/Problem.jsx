import { useTranslation } from "react-i18next";
import useReveal from "../hooks/useReveal";
import bg from "../assets/images/problem-bg.jpg";

function Problem() {
  const { t } = useTranslation();
  useReveal();

  const points = ["p1", "p2", "p3", "p4", "p5", "p6"];

  return (
    <section
      id="problem"
      className="relative w-full bg-gray-50 dark:bg-black overflow-hidden"
    >
      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={bg}
          alt="bg"
          className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.1] blur-[2px]"
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-black/70"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-24">

        {/* HEADER */}
        <div className="max-w-[720px] reveal">
          <h2 className="text-[32px] md:text-[42px] font-semibold tracking-tight text-black dark:text-white">
            {t("problem.title")}
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-[16px] md:text-[17px] leading-[28px] md:leading-[30px]">
            {t("problem.desc")}
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {points.map((p, i) => (
            <div
              key={i}
              className="reveal group relative border border-gray-200 dark:border-gray-800 rounded-2xl p-6 
                         bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg 
                         hover:shadow-xl transition-all duration-500 
                         hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* 🔥 subtle glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
                              bg-gradient-to-br from-black/5 to-transparent dark:from-white/5"></div>

              <p className="relative text-[15px] md:text-[16px] text-black dark:text-white font-medium leading-[26px]">
                {t(`problem.${p}`)}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Problem;