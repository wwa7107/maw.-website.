export const SITE = {
  name: "MAW",
  fullName: "Mohammed & Wajeeh",
  whatsappNumber: "966500000000", // placeholder — replace with real number
  email: "hello@maw-academic.sa", // placeholder
  phoneDisplay: "+966 50 000 0000",
  domain: "https://maw-academic.sa", // placeholder
};

export const NAV_ROUTES = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "pricing", href: "/pricing" },
  { key: "how", href: "/how-it-works" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
] as const;

export const testimonials = {
  en: [
    {
      name: "Sarah A.",
      role: "Business Administration, KSU",
      quote:
        "MAW delivered my research paper two days early, fully formatted in APA. The writer clearly understood my course material.",
      rating: 5,
    },
    {
      name: "Fahad M.",
      role: "Mechanical Engineering, KFUPM",
      quote:
        "My graduation project needed serious restructuring. The team rebuilt it and prepared my defense slides too — worth every riyal.",
      rating: 5,
    },
    {
      name: "Lama K.",
      role: "English Literature, PNU",
      quote:
        "Proofreading turnaround was under 24 hours and the feedback on my citations was more thorough than I expected.",
      rating: 5,
    },
    {
      name: "Abdullah S.",
      role: "Information Systems, IAU",
      quote:
        "Clear communication throughout, and the presentation deck they built looked genuinely professional.",
      rating: 5,
    },
  ],
  ar: [
    {
      name: "سارة أ.",
      role: "إدارة أعمال، جامعة الملك سعود",
      quote: "سلّمتني MAW بحثي قبل يومين من الموعد، بتنسيق APA كامل. الكاتب فهم مادة مقرري بوضوح.",
      rating: 5,
    },
    {
      name: "فهد م.",
      role: "هندسة ميكانيكية، جامعة الملك فهد",
      quote: "مشروع تخرجي احتاج إعادة هيكلة جدية. الفريق أعاد بناءه وجهّز شرائح المناقشة أيضًا — يستحق كل ريال.",
      rating: 5,
    },
    {
      name: "لمى ك.",
      role: "أدب إنجليزي، جامعة الأميرة نورة",
      quote: "التدقيق اللغوي استغرق أقل من 24 ساعة، والملاحظات على التوثيق كانت أدق مما توقعت.",
      rating: 5,
    },
    {
      name: "عبدالله س.",
      role: "نظم معلومات، جامعة الإمام عبدالرحمن",
      quote: "تواصل واضح طوال الوقت، والعرض التقديمي الذي أعدّوه بدا احترافيًا فعلًا.",
      rating: 5,
    },
  ],
};
