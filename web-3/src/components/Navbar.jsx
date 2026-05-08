import { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [dark, setDark] = useDarkMode();
  const {t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero"); // 🔥 ACTIVE SECTION

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  // 🔥 SCROLL EFFECT (blur navbar)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 SCROLL SPY (detect section in view)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleSection) {
          setActive(visibleSection.target.id);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // 🔥 SMOOTH SCROLL WITH OFFSET
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setActive(id);
      setOpen(false);
    }
  };
  

  const links = [
    { name: t("nav.home"), id: "hero" },
    { name: t("nav.problem"), id: "problem" },
    { name: t("nav.services"), id: "services" },
    { name: t("nav.industries"), id: "industries" },
    { name: t("nav.pricing"), id: "pricing" },
    { name: t("nav.contact"), id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-[72px] flex items-center justify-between px-6 md:px-8">

        {/* LOGO */}
        <div
          onClick={() => scrollTo("hero")}
          className="text-[22px] font-semibold tracking-tight cursor-pointer text-black dark:text-white hover:opacity-70 transition"
        >
          UMI
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          {links.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollTo(item.id)}
              className={`relative transition group ${
                active === item.id
                  ? "text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {item.name}

              {/* 🔥 UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-black dark:bg-white transition-all duration-300 ${
                  active === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* LANGUAGE */}
          <button
            onClick={toggleLanguage}
            className="text-[14px] text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            {i18n.language === "en" ? "AR" : "EN"}
          </button>

          {/* DARK MODE */}
          <button onClick={() => setDark(!dark)} className="text-[18px]">
            {dark ? "☀️" : "🌙"}
          </button>

          {/* CTA (DESKTOP) */}
          <button
            onClick={() => scrollTo("pricing")}
            className="hidden md:block bg-black dark:bg-white dark:text-black text-white text-[14px] px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
          >
            Get Started
          </button>

          {/* 🍔 MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-black dark:text-white"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-5 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">

          {links.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollTo(item.id)}
              className={`text-left text-[16px] transition ${
                active === item.id
                  ? "text-black dark:text-white font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* CTA MOBILE */}
          <button
            onClick={() => scrollTo("pricing")}
            className="mt-4 bg-black dark:bg-white dark:text-black text-white py-3 rounded-lg text-sm font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;