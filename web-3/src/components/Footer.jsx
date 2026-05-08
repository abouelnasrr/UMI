function Footer() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800">

      <div className="max-w-[1280px] mx-auto px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h3
              onClick={() => scrollTo("hero")}
              className="text-[20px] font-semibold text-black dark:text-white cursor-pointer hover:opacity-70 transition"
            >
              UMI
            </h3>

            <p className="mt-4 text-gray-500 dark:text-gray-400 text-[14px] leading-[24px]">
              A scalable SaaS platform designed to help service businesses turn operations, reputation, and customer experience into measurable growth.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold mb-4 text-black dark:text-white">
              Navigation
            </h4>

            <ul className="space-y-2 text-gray-500 dark:text-gray-400 text-[14px]">
              {[
                { name: "Home", id: "hero" },
                { name: "Problem", id: "problem" },
                { name: "Services", id: "services" },
                { name: "Industries", id: "industries" },
                { name: "Pricing", id: "pricing" },
                { name: "Contact", id: "contact" },
              ].map((item, i) => (
                <li
                  key={i}
                  onClick={() => scrollTo(item.id)}
                  className="cursor-pointer hover:text-black dark:hover:text-white transition"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4 text-black dark:text-white">
              Get Started
            </h4>

            <p className="text-gray-500 dark:text-gray-400 text-[14px] mb-4">
              Discover how UMI can support your business growth.
            </p>

            <button
              onClick={() => scrollTo("pricing")}
              className="bg-black dark:bg-white dark:text-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Request Pricing
            </button>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-[13px]">
          © 2026 UMI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;