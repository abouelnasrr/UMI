import { useTranslation } from "react-i18next";
import { useState } from "react";

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    country_code: "+20",
    phone: "",
    branches: 0,
    business_description: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🌍 COUNTRIES
  const countries = [
    { code: "+20", label: "🇪🇬 +20 Egypt" },
    { code: "+966", label: "🇸🇦 +966 Saudi Arabia" },
    { code: "+971", label: "🇦🇪 +971 UAE" },
    { code: "+1", label: "🇺🇸 +1 USA" },
    { code: "+44", label: "🇬🇧 +44 UK" },
    { code: "+49", label: "🇩🇪 +49 Germany" },
    { code: "+33", label: "🇫🇷 +33 France" },
    { code: "+91", label: "🇮🇳 +91 India" },
    { code: "+81", label: "🇯🇵 +81 Japan" },
    { code: "+61", label: "🇦🇺 +61 Australia" },
  ];

  // HANDLE INPUTS
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/leads/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);

        setFormData({
          company: "",
          name: "",
          email: "",
          country_code: "+20",
          phone: "",
          branches: 0,
          business_description: "",
          note: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="w-full bg-white dark:bg-black relative overflow-hidden"
    >
      {/* BG EFFECT */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-black/5 dark:bg-white/5 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-black/5 dark:bg-white/5 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="animate-fadeUp">
            <h2 className="text-[38px] md:text-[44px] font-semibold text-black dark:text-white">
              {t("contact.title")}
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-400 text-[17px] leading-[30px] max-w-[500px]">
              {t("contact.desc")}
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <p>✔ {t("contact.trust1")}</p>
              <p>✔ {t("contact.trust2")}</p>
              <p>✔ {t("contact.trust3")}</p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-5 shadow-xl animate-fadeUp"
          >

            {/* COMPANY */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t("contact.company")}
              className="input"
              required
            />

            {/* NAME */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.name")}
              className="input"
              required
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.email")}
              className="input"
              required
            />

            {/* PHONE */}
            <div>
              <label className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">
                {t("contact.whatsapp")}
              </label>

              <div className="flex gap-3">
                <select
                  name="country_code"
                  value={formData.country_code}
                  onChange={handleChange}
                  className="input max-w-[170px]"
                >
                  {countries.map((c, i) => (
                    <option key={i} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="XXXXXXXX"
                  className="input flex-1"
                  required
                />
              </div>
            </div>

            {/* BRANCHES */}
            <input
              type="number"
              min="0"
              name="branches"
              value={formData.branches}
              onChange={handleChange}
              placeholder={t("contact.branches")}
              className="input"
            />

            {/* BUSINESS DESCRIPTION */}
            <textarea
              rows="3"
              name="business_description"
              value={formData.business_description}
              onChange={handleChange}
              placeholder={t("contact.business_desc")}
              className="input"
              required
            ></textarea>

            {/* NOTE */}
            <textarea
              rows="3"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder={t("contact.note")}
              className="input"
            ></textarea>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="bg-green-100 text-green-700 text-sm p-3 rounded-lg">
                Message sent successfully.
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white dark:bg-white dark:text-black py-3.5 rounded-lg text-sm font-medium hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              {loading ? "Sending..." : t("contact.send")}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;