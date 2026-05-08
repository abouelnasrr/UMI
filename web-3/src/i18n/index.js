import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero: {
        title: "Build better digital experiences",
        desc: "Empower your business with smart solutions designed to scale and simplify your workflow.",
        get_started: "Get Started",
        learn_more: "Learn More",
      },

      features: {
        title: "Powerful features to grow your business",
        desc: "Everything you need to manage, scale, and optimize your workflow.",
        items: [
          {
            title: "Smart Automation",
            desc: "Automate repetitive tasks and improve efficiency.",
          },
          {
            title: "Analytics & Insights",
            desc: "Track performance with real-time data and reports.",
          },
          {
            title: "Cloud Integration",
            desc: "Seamlessly connect with modern cloud services.",
          },
        ],
      },
      problem: {
        title: "Growth doesn’t stop because of lack of customers",
        desc: "In many businesses, growth slows down not because customers are missing — but because visibility is missing. Issues go unnoticed, patterns are unclear, and decisions are made based on assumptions rather than evidence.",

        p1: "What issues are repeating?",
        p2: "Where are they happening?",
        p3: "What is causing them?",
        p4: "Who is responsible for resolving them?",
        p5: "Were they actually resolved?",
        p6: "Did performance improve after action was taken?",
      },

      solutions: {
        title: "Solutions tailored for your business",
        desc: "Discover solutions designed to meet your business needs.",
        items: [
          {
            title: "E-commerce Solutions",
            desc: "Build scalable online stores with seamless user experience.",
          },
          {
            title: "Business Automation",
            desc: "Streamline operations with smart automation tools.",
          },
          {
            title: "Customer Engagement",
            desc: "Enhance user interaction and retention with smart tools.",
          },
        ],
      },

      "contact": {
        "title": "Let’s build something impactful",
        "desc": "Tell us about your business and we’ll design a solution tailored to your needs.",
        "company": "Company Name",
        "name": "Your Name",
        "email": "Email Address",
        "whatsapp": "WhatsApp Number",
        "branches": "Number of Branches",
        "business_desc": "Describe your business",
        "note": "Note to our team (optional)",
        "send": "Request a Quote",
        "trust1": "Tailored solutions based on your needs",
        "trust2": "Fast response from our team",
        "trust3": "No commitment required"
      },
      core: {
        "badge": "Operational insights in real-time",
        title: "Monitor events. Detect patterns. Act early.",
        desc: "UMI is designed to help businesses move from scattered daily events to clear operational intelligence. Instead of reacting late, teams gain the ability to understand what is happening, why it is happening, and what to do next.",

        p1: "Every review, complaint, task, message, and interaction becomes part of a unified operational picture.",

        p2: "Recurring issues are identified early, before they turn into costly patterns.",

        p3: "Events across branches and teams are connected, making it easier to track, assign, and resolve.",

        p4: "Decisions are guided by clear indicators, not assumptions or delayed reports.",
    },
      services: {
        title: "UMI Services",
        desc: "A complete suite of tools designed to help service-based businesses operate with clarity, consistency, and measurable growth.",

        learn_more: "Learn more",

        items: {
            reputation: {
            title: "UMI Reputation",
            desc: "Collect customer feedback, understand satisfaction drivers, and resolve negative experiences early before they impact your brand.",
            result: "Clearer visibility into customer sentiment and faster response to issues.",
            },

            flow: {
            title: "UMI Flow",
            desc: "Transform daily operations into structured workflows with requests, approvals, tracking, and automated processes.",
            result: "More organized operations with fewer errors and better accountability.",
            },

            loyalty: {
            title: "UMI Loyalty",
            desc: "Build measurable loyalty programs that encourage customers to return through well-designed experiences.",
            result: "Stronger customer relationships and higher return rates.",
            },

            reach: {
            title: "UMI Reach",
            desc: "Send targeted messages, reminders, and campaigns based on customer behavior and context.",
            result: "More relevant communication and better customer engagement.",
            },

            intelligence: {
            title: "UMI Intelligence",
            desc: "Turn scattered data into dashboards, insights, and actionable intelligence for decision making.",
            result: "Better decisions based on clear and unified business data.",
            },
        },
      },
      "pricing": {
        "title": "Flexible pricing built around your business",
        "desc": "Every business operates differently. UMI adapts to your structure, scale, and goals.",
        "custom_note": "All plans are customizable based on your needs, number of branches, and required services.",

        "most_popular": "Most Popular",
        "cta_main": "Get a Custom Quote",

        "plans": {
            "starter": {
            "title": "Starter",
            "desc": "For small teams starting to structure operations",
            "f1": "Basic reputation tracking",
            "f2": "Simple workflow automation",
            "f3": "Limited reporting",
            "f4": "Email support"
            },
            "growth": {
            "title": "Growth",
            "desc": "For growing businesses scaling operations",
            "f1": "Full reputation & feedback system",
            "f2": "Advanced workflows & automation",
            "f3": "Loyalty & engagement tools",
            "f4": "Advanced analytics dashboard"
            },
            "enterprise": {
            "title": "Enterprise",
            "desc": "For multi-branch and complex operations",
            "f1": "Full platform access",
            "f2": "Custom integrations",
            "f3": "Multi-location intelligence",
            "f4": "Dedicated support & onboarding"
            }
        }
      },
      faq: {
        title: "Frequently asked questions",

        q1: {
            q: "Is UMI one platform or multiple services?",
            a: "UMI is a modular SaaS platform with multiple services that can be used independently or combined.",
        },

        q2: {
            q: "Can I start with one service only?",
            a: "Yes. You can start with a single service and expand later as your needs grow.",
        },

        q3: {
            q: "Is UMI suitable for small businesses?",
            a: "Yes. UMI supports both single-location businesses and multi-branch operations.",
        },

        q4: {
            q: "Does UMI support Arabic and English?",
            a: "Yes. Both languages are supported with proper localization.",
        },

        q5: {
            q: "Are prices fixed?",
            a: "No. Pricing depends on your business size, services, and customization level.",
        },

        q6: {
            q: "Can I add services later?",
            a: "Yes. UMI is designed to scale with your business.",
        },

        q7: {
            q: "Does UMI guarantee revenue growth?",
            a: "UMI helps improve visibility, decision-making, and customer experience, which supports growth.",
        },

        q8: {
            q: "Is UMI suitable for all industries?",
            a: "UMI is best suited for service-based businesses where customer experience matters.",
        },
      },
      nav: {
        home: "Home",
        problem: "Problem",
        services: "Services",
        industries: "Industries",
        pricing: "Pricing",
        contact: "Contact",
      },
      industries: {
        title: "Built for service-based businesses",
        desc: "UMI is designed for businesses where customer experience, response time, and operational clarity directly impact growth.",

        items: {
            restaurants: {
            title: "Restaurants & Cafés",
            desc: "Understand guest experience, identify dissatisfaction drivers, manage reviews, and turn customer satisfaction into repeat visits.",
            },

            hotels: {
            title: "Hotels & Hospitality",
            desc: "Monitor guest experience, capture feedback early, improve service quality, and ensure consistent performance across locations.",
            },

            salons: {
            title: "Salons & Grooming",
            desc: "Encourage repeat bookings, track satisfaction, deliver targeted offers, and build long-term customer relationships.",
            },

            beauty: {
            title: "Beauty Clinics",
            desc: "Improve post-visit follow-ups, enhance communication, measure satisfaction, and deliver a more structured client experience.",
            },

            dental: {
            title: "Dental Clinics",
            desc: "Manage reminders, track patient satisfaction, improve recurring visits, and optimize the overall clinic experience.",
            },
        },
      },
    },
  },

  ar: {
    translation: {
      hero: {
        title: "قم ببناء تجارب رقمية أفضل",
        desc: "قم بتمكين عملك بحلول ذكية مصممة للتوسع وتبسيط سير العمل.",
        get_started: "ابدأ الآن",
        learn_more: "اعرف المزيد",
      },
      nav: {
        home: "الرئيسية",
        problem: "المشكلة",
        services: "الخدمات",
        industries: "القطاعات",
        pricing: "الأسعار",
        contact: "تواصل معنا",
      },
      "pricing": {
        "title": "باقات مرنة مصممة حسب احتياج نشاطك",
        "desc": "كل نشاط يعمل بطريقة مختلفة. لذلك يتم تصميم UMI ليتكيف مع هيكل عملك وحجم التشغيل وأهدافك.",
        "custom_note": "جميع الباقات قابلة للتخصيص حسب عدد الفروع، طبيعة التشغيل، والخدمات المطلوبة.",

        "most_popular": "الأكثر استخداماً",
        "cta_main": "اطلب عرض سعر مخصص",

        "plans": {
            "starter": {
            "title": "البداية",
            "desc": "للمنشآت الصغيرة التي تبدأ في تنظيم العمليات",
            "f1": "متابعة أساسية للسمعة",
            "f2": "أتمتة بسيطة للعمليات",
            "f3": "تقارير محدودة",
            "f4": "دعم عبر البريد الإلكتروني"
            },
            "growth": {
            "title": "النمو",
            "desc": "للمنشآت التي تتوسع وتحتاج إلى تنظيم أكبر",
            "f1": "نظام متكامل لإدارة السمعة",
            "f2": "أتمتة متقدمة للعمليات",
            "f3": "أدوات ولاء وتفاعل",
            "f4": "لوحات تحليلية متقدمة"
            },
            "enterprise": {
            "title": "المؤسسات",
            "desc": "للشركات متعددة الفروع أو العمليات المعقدة",
            "f1": "الوصول الكامل إلى المنصة",
            "f2": "تكاملات مخصصة",
            "f3": "إدارة متعددة المواقع",
            "f4": "دعم مخصص وتفعيل احترافي"
            }
        }
      },
      faq: {
        title: "الأسئلة الشائعة",

        q1: {
            q: "هل UMI منصة واحدة أم عدة خدمات؟",
            a: "UMI منصة SaaS تضم عدة خدمات يمكن استخدامها بشكل مستقل أو دمجها معاً.",
        },

        q2: {
            q: "هل يمكن البدء بخدمة واحدة فقط؟",
            a: "نعم، يمكن البدء بخدمة واحدة ثم التوسع لاحقاً حسب الحاجة.",
        },

        q3: {
            q: "هل تناسب UMI المنشآت الصغيرة؟",
            a: "نعم، يمكن استخدامها سواء لنشاط بفرع واحد أو عدة فروع.",
        },

        q4: {
            q: "هل تدعم العربية والإنجليزية؟",
            a: "نعم، يتم دعم اللغتين بشكل كامل مع مراعاة أسلوب كل لغة.",
        },

        q5: {
            q: "هل الأسعار ثابتة؟",
            a: "لا، يتم تحديد الأسعار بناءً على احتياج كل نشاط.",
        },

        q6: {
            q: "هل يمكن إضافة خدمات لاحقاً؟",
            a: "نعم، يمكن توسيع استخدام المنصة بسهولة مع نمو النشاط.",
        },

        q7: {
            q: "هل تضمن UMI زيادة الإيرادات؟",
            a: "UMI تساعد على تحسين الرؤية واتخاذ القرار وتجربة العميل، مما يدعم فرص النمو.",
        },

        q8: {
            q: "هل تناسب UMI جميع القطاعات؟",
            a: "UMI مناسبة بشكل أكبر للأنشطة التي تعتمد على تجربة العميل والتفاعل المستمر.",
        },
      },
      industries: {
        title: "مصممة للمنشآت الخدمية",
        desc: "تم تصميم UMI للأنشطة التي تعتمد نتائجها بشكل مباشر على تجربة العميل، سرعة الاستجابة، وضوح التشغيل، وجودة القرار.",

        items: {
            restaurants: {
            title: "المطاعم والمقاهي",
            desc: "فهم تجربة الضيف، تحليل أسباب عدم الرضا، إدارة التقييمات، وتحويل رضا العملاء إلى زيارات متكررة.",
            },

            hotels: {
            title: "الفنادق والضيافة",
            desc: "متابعة تجربة النزيل، استقبال الملاحظات مبكراً، تحسين جودة الخدمة، وضمان اتساق الأداء بين الفروع.",
            },

            salons: {
            title: "الصوالين ومراكز التجميل",
            desc: "تعزيز الحجز المتكرر، متابعة رضا العملاء، تقديم عروض موجهة، وبناء علاقة طويلة المدى.",
            },

            beauty: {
            title: "عيادات التجميل",
            desc: "تحسين المتابعة بعد الزيارة، تطوير التواصل مع العملاء، قياس الرضا، وتقديم تجربة أكثر احترافية.",
            },

            dental: {
            title: "عيادات الأسنان",
            desc: "تنظيم التذكيرات، متابعة رضا المراجعين، دعم الزيارات الدورية، وتحسين تجربة المرضى.",
            },
        },
      },
      core: {
        "badge": "رؤية تشغيلية واضحة مدعومة ببيانات لحظية",
        title: "راقب الأحداث. اكشف الأنماط. تصرّف مبكراً.",
        desc: "تم تصميم UMI لمساعدة المنشآت على الانتقال من متابعة أحداث متفرقة إلى فهم تشغيلي واضح. بدلاً من التأخر في الاستجابة، تمنحك المنصة القدرة على فهم ما يحدث، ولماذا يحدث، وما الإجراء المناسب.",

        p1: "كل تقييم، شكوى، مهمة، رسالة، أو تفاعل يصبح جزءاً من صورة تشغيلية متكاملة.",

        p2: "يتم اكتشاف المشكلات المتكررة مبكراً قبل أن تتحول إلى أنماط مكلفة.",

        p3: "يتم ربط الأحداث بين الفروع والفرق لتسهيل المتابعة والتوجيه والمعالجة.",

        p4: "تُبنى القرارات على مؤشرات واضحة، لا على الانطباعات أو التقارير المتأخرة.",
      },
      services: {
        title: "خدمات UMI",
        desc: "مجموعة متكاملة من الأدوات المصممة لمساعدة المنشآت الخدمية على العمل بوضوح وانضباط وتحقيق نمو قابل للقياس.",

        learn_more: "اعرف المزيد",

        items: {
            reputation: {
            title: "UMI Reputation",
            desc: "جمع آراء العملاء، فهم أسباب الرضا وعدم الرضا، ومعالجة التجارب السلبية مبكراً قبل أن تؤثر على سمعة النشاط.",
            result: "رؤية أوضح لصوت العميل واستجابة أسرع للمشكلات.",
            },

            flow: {
            title: "UMI Flow",
            desc: "تحويل العمليات اليومية إلى مسارات عمل منظمة تشمل الطلبات، الموافقات، المتابعة، والأتمتة.",
            result: "تشغيل أكثر انضباطاً وأخطاء أقل ومتابعة أوضح.",
            },

            loyalty: {
            title: "UMI Loyalty",
            desc: "بناء برامج ولاء مدروسة تشجع العملاء على العودة من خلال تجارب قابلة للقياس.",
            result: "علاقة أقوى مع العملاء وزيادة في فرص العودة.",
            },

            reach: {
            title: "UMI Reach",
            desc: "إرسال رسائل وتنبيهات موجهة بناءً على سلوك العميل وتوقيت التفاعل.",
            result: "تواصل أكثر دقة وتفاعل أفضل مع العملاء.",
            },

            intelligence: {
            title: "UMI Intelligence",
            desc: "تحويل البيانات المتفرقة إلى لوحات مؤشرات ورؤية واضحة تدعم اتخاذ القرار.",
            result: "قرارات أفضل مبنية على بيانات واضحة ومترابطة.",
            },
        },
      },
      problem: {
        title: "النمو لا يتوقف بسبب نقص العملاء فقط",
        desc: "في كثير من المنشآت، لا يكون التحدي في غياب العملاء، بل في غياب الرؤية. مشاكل تتكرر دون ملاحظة، تجارب سلبية لا يتم اكتشافها مبكراً، وقرارات تُبنى على الانطباع بدلاً من البيانات.",

        p1: "ما المشكلة التي تتكرر؟",
        p2: "أين تحدث داخل النشاط؟",
        p3: "ما السبب المحتمل؟",
        p4: "من المسؤول عن المعالجة؟",
        p5: "هل تمت المعالجة فعلاً؟",
        p6: "هل تحسن الأداء بعد الإجراء؟",
      },

      features: {
        title: "ميزات قوية لتنمية عملك",
        desc: "كل ما تحتاجه لإدارة وتوسيع وتحسين عملك.",
        items: [
          {
            title: "أتمتة ذكية",
            desc: "أتمت المهام المتكررة وزد من الكفاءة.",
          },
          {
            title: "تحليلات وتقارير",
            desc: "تابع الأداء ببيانات وتقارير فورية.",
          },
          {
            title: "تكامل سحابي",
            desc: "اتصل بسهولة مع الخدمات السحابية الحديثة.",
          },
        ],
      },

      solutions: {
        title: "حلول مصممة لعملك",
        desc: "اكتشف حلولًا تلبي احتياجات عملك.",
        items: [
          {
            title: "حلول التجارة الإلكترونية",
            desc: "أنشئ متاجر إلكترونية قابلة للتوسع بسهولة.",
          },
          {
            title: "أتمتة الأعمال",
            desc: "بسّط العمليات باستخدام أدوات ذكية.",
          },
          {
            title: "تفاعل العملاء",
            desc: "حسّن تجربة المستخدم وزد من التفاعل.",
          },
        ],
      },

      "contact": {
        "title": "لنبدأ ببناء تجربة أفضل لنشاطك",
        "desc": "شاركنا تفاصيل نشاطك لنصمم لك حلاً يناسب احتياجك الفعلي.",
        "company": "اسم المنشأة",
        "name": "اسمك",
        "email": "البريد الإلكتروني",
        "whatsapp": "رقم واتساب",
        "branches": "عدد الفروع",
        "business_desc": "وصف النشاط التجاري",
        "note": "ملاحظات للفريق (اختياري)",
        "send": "اطلب عرضاً مخصصاً",
        "trust1": "حلول مصممة حسب احتياج نشاطك",
        "trust2": "استجابة سريعة من فريقنا",
        "trust3": "بدون أي التزام"
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;