import { useState } from "react";
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);

  const items = ["q1","q2","q3","q4","q5","q6","q7","q8"];

  return (
    <section
      id="faq"
      className="w-full bg-gray-50 dark:bg-black relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-black/5 dark:bg-white/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-black/5 dark:bg-white/5 blur-3xl rounded-full"></div>

      <div className="max-w-[900px] mx-auto px-6 md:px-8 py-24 relative">

        {/* TITLE */}
        <h2 className="text-[32px] md:text-[38px] font-semibold text-center text-black dark:text-white animate-fadeUp">
          {t("faq.title")}
        </h2>

        {/* LIST */}
        <div className="mt-12 space-y-4">

          {items.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className={`group rounded-2xl border transition-all duration-300
                ${
                  isOpen
                    ? "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 shadow-lg"
                    : "bg-white/80 dark:bg-gray-900/60 border-gray-200 dark:border-gray-800 hover:shadow-md"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="text-[15px] md:text-[16px] font-medium text-black dark:text-white">
                    {t(`faq.${item}.q`)}
                  </span>

                  {/* ICON */}
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER (ANIMATED) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-[14px] leading-[24px]">
                    {t(`faq.${item}.a`)}
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQ;