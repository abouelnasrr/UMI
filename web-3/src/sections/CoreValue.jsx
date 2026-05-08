import { useTranslation } from "react-i18next";
import useReveal from "../hooks/useReveal";
import bg from "../assets/images/core-bg.jpg";

function CoreValue() {
  const { t } = useTranslation();
  useReveal();

  const points = ["p1", "p2", "p3", "p4"];

  return (
    <section
      id="core-value"
      className="relative w-full bg-white dark:bg-black overflow-hidden"
    >
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={bg}
          alt="bg"
          className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.1] blur-[2px]"
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-black/70"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="reveal">
          <h2 className="text-[32px] md:text-[42px] font-semibold tracking-tight text-black dark:text-white">
            {t("core.title")}
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-[16px] md:text-[17px] leading-[28px] md:leading-[30px]">
            {t("core.desc")}
          </p>

          {/* POINTS */}
          <div className="mt-10 space-y-5">

            {points.map((point, i) => (
              <div
                key={i}
                className="reveal flex items-start gap-4 rtl:flex-row-reverse group 
                           p-4 rounded-xl 
                           bg-gray-50 dark:bg-gray-900/70 
                           hover:shadow-lg transition-all duration-500"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* ICON DOT */}
                <div className="w-3 h-3 mt-2 rounded-full bg-black dark:bg-white group-hover:scale-125 transition"></div>

                <p className="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300 leading-[26px]">
                  {t(`core.${point}`)}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="reveal flex justify-center md:justify-end">

          <div className="relative animate-float">

            {/* GLOW */}
            <div className="absolute inset-0 bg-black/10 dark:bg-white/10 blur-2xl rounded-2xl"></div>

            {/* MAIN IMAGE */}
            <img
              src={bg}
              alt="core visual"
              className="relative w-[320px] sm:w-[420px] md:w-[520px] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800"
            />

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-lg backdrop-blur-md">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                📊 {t("core.badge")}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CoreValue;