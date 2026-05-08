import { useTranslation } from "react-i18next";
import dashboard from "../assets/images/dashboard.png";

function Hero() {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-white dark:bg-black overflow-hidden"
    >
      {/* 🔥 BACKGROUND IMAGE (NEW) */}
      <div className="absolute inset-0 pointer-events-none">
  
        <img
          src={dashboard}
          alt="bg"
          className="w-full h-full object-cover 
                    opacity-[0.18] dark:opacity-[0.22] 
                    blur-[1.5px] animate-float 
                    brightness-110 dark:brightness-160 
                    contrast-110 dark:contrast-130"
        />

        {/* 🔥 MUCH LIGHTER OVERLAY */}
        <div className="absolute inset-0 bg-white/40 dark:bg-black/50"></div>

      </div>

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-black/5 dark:bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-black/5 dark:bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 pt-28 pb-20 flex flex-col items-center text-center">

        {/* TITLE */}
        <h1 className="max-w-[900px] text-[38px] md:text-[64px] leading-[48px] md:leading-[72px] font-semibold tracking-[-1px] text-black dark:text-white animate-fadeUp">
          {t("hero.title")}
        </h1>

        {/* DESC */}
        <p className="mt-6 max-w-[650px] text-[16px] md:text-[18px] text-gray-500 dark:text-gray-400 leading-[28px] md:leading-[30px] animate-fadeUp">
          {t("hero.desc")}
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fadeUp">

          <button
            onClick={() => scrollTo("contact")}
            className="bg-black text-white dark:bg-white dark:text-black px-8 py-3.5 rounded-lg text-[15px] font-medium hover:scale-[1.05] transition-all duration-300 shadow-lg"
          >
            {t("hero.get_started")}
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="border border-gray-300 dark:border-gray-700 dark:text-white px-8 py-3.5 rounded-lg text-[15px] font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            {t("hero.learn_more")}
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;