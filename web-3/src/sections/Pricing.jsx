import { useTranslation } from "react-i18next";

function Pricing() {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      key: "starter",
      highlight: false,
    },
    {
      key: "growth",
      highlight: true, // ⭐ main plan
    },
    {
      key: "enterprise",
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full bg-white dark:bg-black relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-black/5 dark:bg-white/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-black/5 dark:bg-white/5 blur-3xl rounded-full"></div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-24 relative">

        {/* HEADER */}
        <div className="text-center max-w-[700px] mx-auto animate-fadeUp">
          <h2 className="text-[34px] md:text-[40px] font-semibold tracking-tight text-black dark:text-white">
            {t("pricing.title")}
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-[16px] md:text-[17px] leading-[28px]">
            {t("pricing.desc")}
          </p>

          {/* CUSTOM MESSAGE */}
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
            {t("pricing.custom_note")}
          </p>
        </div>

        {/* PLANS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
              ${
                plan.highlight
                  ? "bg-black text-white dark:bg-white dark:text-black border-transparent scale-[1.03]"
                  : "bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-800"
              }`}
            >

              {/* PLAN NAME */}
              <h3 className="text-[20px] font-semibold">
                {t(`pricing.plans.${plan.key}.title`)}
              </h3>

              {/* DESC */}
              <p
                className={`mt-3 text-sm ${
                  plan.highlight
                    ? "text-white/80 dark:text-black/70"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {t(`pricing.plans.${plan.key}.desc`)}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3 text-sm">
                {[1, 2, 3, 4].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span>✓</span>
                    {t(`pricing.plans.${plan.key}.f${f}`)}
                  </li>
                ))}
              </ul>

              {/* BADGE */}
              {plan.highlight && (
                <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-white text-black dark:bg-black dark:text-white">
                  {t("pricing.most_popular")}
                </div>
              )}

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center animate-fadeUp">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-black text-white dark:bg-white dark:text-black px-10 py-4 rounded-lg text-[15px] font-medium hover:scale-[1.05] transition-all duration-300 shadow-xl"
          >
            {t("pricing.cta_main")}
          </button>
        </div>

      </div>
    </section>
  );
}

export default Pricing;