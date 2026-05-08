"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    label: "About",
    href: "/",
    submenu: ["Our School", "The Making of Suchitra", "Leading from the front"],
  },
  { label: "Curriculum", href: "/" },
  { label: "Beyond Academics", href: "/" },
  { label: "Life With Us", href: "/" },
  { label: "Admissions", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Contact", href: "/" },
];

const heroSlides = [
  {
    image: "/hero-banners/home/1.jpeg",
    eyebrow: "Founded in 1986",
    titleLines: [
      [{ text: "Sri Chaitanya", bold: false }],
      [
        { text: "built for", bold: false },
        { text: " Ambition", bold: true },
      ],
      [
        { text: "driven by", bold: false },
        { text: " Scale", bold: true },
      ],
    ],
    description:
      "Official Sri Chaitanya materials trace the institution's beginnings to Vijayawada, where Dr. B.S. Rao and Dr. Jhansi Lakshmi Bai Boppana launched the first campus with a mission to widen access to quality education.",
    highlights: ["Vijayawada roots", "Vision-led growth", "Student-first culture"],
  },
  {
    image: "/hero-banners/home/2.jpeg",
    eyebrow: "41 Years of Excellence",
    titleLines: [
      [{ text: "India's", bold: false }, { text: " Largest", bold: true }],
      [{ text: "Academic", bold: false }, { text: " Network", bold: true }],
      [{ text: "for Future Leaders", bold: false }],
    ],
    description:
      "Sri Chaitanya's official admission pages highlight a national footprint with more than 9,50,000 students, 1,000+ schools and colleges, and presence across 26 states.",
    highlights: ["9,50,000+ students", "1,000+ institutions", "26 states"],
  },
  {
    image: "/hero-banners/home/5.jpeg",
    eyebrow: "Performance & Outcomes",
    titleLines: [
      [{ text: "Research-led", bold: false }, { text: " Learning", bold: true }],
      [{ text: "Focused on", bold: false }, { text: " Results", bold: true }],
      [{ text: "and Student Growth", bold: false }],
    ],
    description:
      "Official Sri Chaitanya pages also emphasize results-led positioning, including legacy claims around IIT and AIIMS outcomes, structured mentoring, and integrated preparation models.",
    highlights: ["Structured mentoring", "Integrated learning", "Results-led identity"],
  },
];

const announcementMessage =
  "Please be informed that all payment services will be temporarily blocked from Sunday (29-01-2026) to Monday (30-01-2026) due to scheduled maintenance and system upgrade activities. During this period, users may not be able to make online payments or access payment-related services.";

const isUnderMaintenance = false;

const legacyStats = [
  {
    value: "154+",
    label: "Programs",
    description: "Industry-Oriented Academic Programs",
  },
  {
    value: "980+",
    label: "Stalwarts",
    description: "Industry Stalwarts for Top-Tier Mentorship",
  },
  {
    value: "1350+",
    label: "Faculty",
    description: "Doctoral Faculty",
  },
  {
    value: "300+",
    label: "International Faculty",
    description: "Global Academic Expertise",
  },
  {
    value: "100000+",
    label: "Alumni",
    description: "Accomplished Alumni Across the Globe",
  },
];

const legacyStatTargets = legacyStats.map((stat) =>
  Number.parseInt(stat.value.replace(/\D/g, ""), 10),
);

const aboutExperiencePillars = [
  {
    label: "Collaborations",
    title: "Multicultural Campus",
    description:
      "A vibrant learning environment shaped by diverse peers, shared ambition, and a global outlook on education.",
    image: "/hero-banners/home/3.jpeg",
  },
  {
    label: "Degree Opportunities",
    title: "Dual-Degree Opportunities",
    description:
      "Pursue articulation programs, participate in study tours, and engage in cultural exchange pathways built around future-ready learning.",
    image: "/hero-banners/home/2.jpeg",
  },
  {
    label: "Language and Culture",
    title: "Language and Culture Immersion",
    description:
      "Build confidence through global communication, intercultural exposure, and programs that broaden both perspective and expression.",
    image: "/hero-banners/home/5.jpeg",
  },
  {
    label: "International Research Projects",
    title: "Research with Global Relevance",
    description:
      "Work on collaborative projects, inquiry-driven learning, and structured academic exploration that connect classroom learning to real-world problems.",
    image: "/hero-banners/home/1.jpeg",
  },
  {
    label: "Global Faculty",
    title: "Mentorship from Global Faculty",
    description:
      "Learn with expert mentors and visiting educators who bring diverse experience, academic rigor, and international perspective.",
    image: "/hero-banners/home/4.jpeg",
  },
  {
    label: "Career Pathways",
    title: "Career Pathways with Purpose",
    description:
      "Move from aspiration to direction with exposure to future careers, skill-building opportunities, and guided long-term planning.",
    image: "/hero-banners/home/4.png",
  },
];

const studentStories = [
  {
    name: "Shardul J.",
    role: "Competitive Scholar",
    thumb: "/imageSection/1.webp",
    image: "/imageSection/10.jpeg",
    quoteTitle: "Focused Learner to Confident Achiever",
    quote:
      "The academic discipline and supportive mentors at Sri Chaitanya helped me stay consistent, improve my performance, and build confidence for bigger goals.",
  },
  {
    name: "Anand B.",
    role: "Future Engineer",
    thumb: "/imageSection/2.jfif",
    image: "/imageSection/11.jpeg",
    quoteTitle: "Aspiring Engineer with a Strong Foundation",
    quote:
      "I gained clarity, routine, and the kind of academic preparation that helped me take on competitive exams with a stronger mindset.",
  },
  {
    name: "games",
    role: "Chess Compidition",
    thumb: "/imageSection/3.avif",
    image: "/imageSection/12.jfif",
    quoteTitle: "From an Aspiring Athlete to an International Cricketer",
    quote:
      "Lots of credit for my success in cricket goes to the school environment that helped me pursue my sports career alongside my academics.",
  },
  {
    name: "Vandana C.",
    role: "Global Research Student",
    thumb: "/imageSection/4.avif",
    image: "/imageSection/9.webp",
    quoteTitle: "From Curiosity to Global Exposure",
    quote:
      "The culture of mentorship, teamwork, and disciplined learning encouraged me to aim higher and explore new academic pathways with confidence.",
  },
];

const campusGalleryItems = [
  {
    title: "Baby League",
    image: "/blog/1.jpeg",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Academic Expo",
    image: "/blog/2.png",
    span: "lg:col-span-1 lg:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Cultural Showcase",
    image: "/blog/3.jpg",
    span: "lg:col-span-2 lg:row-span-3",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Creative Learning",
    image: "/blog/4.jpg",
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Sports Spirit",
    image: "/blog/5.webp",
    span: "lg:col-span-2 lg:row-span-1",
    aspect: "aspect-[16/7]",
  },
];

const branchLocations = [
  {
    name: "Sri Chaitanya Techno School - Ameerpet",
    address:
      "Near Metro Station, Ameerpet Main Road, Hyderabad, Telangana 500016, India",
    top: "30%",
    left: "36%",
  },
  {
    name: "Sri Chaitanya Olympiad School - Kukatpally",
    address:
      "KPHB Colony, Kukatpally, Hyderabad, Telangana 500072, India",
    top: "22%",
    left: "28%",
  },
  {
    name: "Sri Chaitanya School - Dilsukhnagar",
    address:
      "Dilsukhnagar Cross Road, Hyderabad, Telangana 500060, India",
    top: "66%",
    left: "59%",
  },
  {
    name: "Sri Chaitanya School - Miyapur",
    address: "Miyapur Main Road, Hyderabad, Telangana 500049, India",
    top: "26%",
    left: "22%",
  },
  {
    name: "Sri Chaitanya School - Vanasthalipuram",
    address:
      "Vanasthalipuram Ring Road, Hyderabad, Telangana 500070, India",
    top: "78%",
    left: "67%",
  },
  {
    name: "Sri Chaitanya School - Secunderabad",
    address:
      "Sardar Patel Road, Secunderabad, Telangana 500003, India",
    top: "16%",
    left: "48%",
  },
];

const featuredCities = [
  { name: "Delhi", image: "/admission-cities/delhi-city.webp" },
  { name: "Gurugram", image: "/admission-cities/gurugram-city.webp" },
  { name: "Hyderabad", image: "/admission-cities/hyderabad-city.webp" },
  { name: "Indore", image: "/admission-cities/indore-city.webp" },
  { name: "Jabalpur", image: "/admission-cities/jabalpur-city.webp" },
  { name: "Jaipur", image: "/admission-cities/jaipur-city.webp" },
  { name: "Jodhpur", image: "/admission-cities/jodhpur-city.webp" },
  { name: "Mumbai", image: "/admission-cities/mumbai-city.webp" },
  { name: "Pune", image: "/admission-cities/pune-city.webp" },
  { name: "Chennai", image: "/admission-cities/chennai-city.webp" },
  { name: "Kolkata", image: "/admission-cities/kolkata-city.webp" },
  { name: "Bhopal", image: "/admission-cities/bhopal-city.webp" },
  { name: "Nagpur", image: "/admission-cities/nagpur-city.webp" },
  { name: "Rohtak", image: "/admission-cities/rohtak-city.webp" },
  { name: "Sonipat", image: "/admission-cities/sonipat-city.webp" },
  { name: "Tumkur", image: "/admission-cities/tumkur-city.webp" },
  { name: "Ahmednagar", image: "/admission-cities/ahmednagar-city.webp" },
  { name: "Aurangabad", image: "/admission-cities/aurangabad-city.webp" },
];

const socialNewsItems = [
  {
    platform: "Instagram",
    handle: "@srichaitanya_schools",
    date: "New Update",
    title: "Campus moments from academic expo week",
    description:
      "Students showcased creative projects, interactive models, and collaborative learning highlights from across the campus.",
    image: "/hero-banners/home/2.jpeg",
    accent: "bg-[#40B9E9]",
  },
  {
    platform: "YouTube",
    handle: "Sri Chaitanya Schools",
    date: "Video Highlight",
    title: "Student success story and mentorship spotlight",
    description:
      "A featured story sharing how structured mentoring, discipline, and guidance shaped a high-achieving learner journey.",
    image: "/hero-banners/home/4.png",
    accent: "bg-[#379BD3]",
  },
  {
    platform: "Facebook",
    handle: "Sri Chaitanya Schools",
    date: "Community Post",
    title: "Celebrating sports, culture, and all-round growth",
    description:
      "Snapshots from inter-school events, cultural performances, and co-curricular achievements shared with our school community.",
    image: "/hero-banners/home/5.jpeg",
    accent: "bg-[#2ECAAD]",
  },
];

const whyChooseItems = [
  {
    number: "01",
    title: "High-Impact Networking Connections",
    description:
      "Connect with an extensive network of leaders, mentors, innovators, and academic experts for collaboration, guidance, and future-ready opportunities.",
    images: ["/hero-banners/home/3.jpeg", "/hero-banners/home/2.jpeg"],
  },
  {
    number: "02",
    title: "Tech-driven collaborative and fluid learning environments",
    description:
      "Experience smart classrooms, collaborative learning ecosystems, and flexible academic frameworks that help students learn with clarity, confidence, and consistency.",
    images: ["/hero-banners/home/1.jpeg", "/hero-banners/home/5.jpeg"],
  },
  {
    number: "03",
    title: "360-degree support in building a personal brand",
    description:
      "Carve out a niche in the professional arena by elevating your personal brand through leadership programs and personalised mentorship, gaining attributes like resilience, adaptability, and strategic foresight, and emerging as a goal-oriented individual.",
    images: ["/hero-banners/home/4.jpeg", "/hero-banners/home/4.png"],
  },
  {
    number: "04",
    title: "Multi-Disciplinary University",
    description:
      "Explore a learning ecosystem where academics, innovation, arts, research, and practical exposure work together to support broad-based student development.",
    images: ["/hero-banners/home/5.jpeg", "/hero-banners/home/3.jpeg"],
  },
  {
    number: "05",
    title: "Global Vision",
    description:
      "Develop the mindset, communication skills, and cultural awareness needed to thrive in an increasingly connected global learning environment.",
    images: ["/hero-banners/home/2.jpeg", "/hero-banners/home/1.jpeg"],
  },
];

const spotlightGalleryImages = [
  "/imageSection/1.webp",
  "/imageSection/2.jfif",
  "/imageSection/3.avif",
  "/imageSection/4.avif",
  "/imageSection/5.jpg",
  "/imageSection/6.webp",
  "/imageSection/7.jfif",
  "/imageSection/8.jfif",
  "/imageSection/9.webp",
  "/imageSection/10.jpeg",
  "/imageSection/11.jpeg",
  "/imageSection/12.jfif",
];

const footerQuickLinks = [
  "Home",
  "About Us",
  "Academics",
  "Admissions",
  "Branches",
  "Results",
  "Careers",
];

const footerCategories = [
  "CBSE Curriculum",
  "IIT-JEE Advanced",
  "NEET/Medical",
  "Foundation",
];

const footerBranches = [
  {
    name: "Madhapur Main Branch",
    area: "Kavuri Hills | 0.5 km",
    rating: "4.8",
    image: "/hero-banners/home/3.jpeg",
  },
  {
    name: "Hitech City Branch",
    area: "Hitech City | 1.2 km",
    rating: "4.7",
    image: "/hero-banners/home/5.jpeg",
  },
];

const footerBottomLinks = [
  "Terms & Conditions",
  "Privacy Policy",
  "Sitemap",
  "Contact",
  "Careers",
];

const footerSocialLinks = [
  { label: "f", href: "/" },
  { label: "ig", href: "/" },
  { label: "x", href: "/" },
  { label: "yt", href: "/" },
  { label: "in", href: "/" },
];

export default function Home() {
  const legacyStatsRef = useRef<HTMLElement | null>(null);
  const featuredCitiesPerView = 7;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    "About",
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(2);
  const [activeWhyChooseIndex, setActiveWhyChooseIndex] = useState(0);
  const [activeAboutPillarIndex, setActiveAboutPillarIndex] = useState(1);
  const [featuredCityStartIndex, setFeaturedCityStartIndex] = useState(0);
  const [aboutPillarsIntroVisible, setAboutPillarsIntroVisible] = useState(false);
  const [legacyStatsVisible, setLegacyStatsVisible] = useState(false);
  const [animatedLegacyCounts, setAnimatedLegacyCounts] = useState(
    legacyStatTargets.map(() => 0),
  );

  const visibleFeaturedCities = Array.from(
    { length: Math.min(featuredCitiesPerView, featuredCities.length) },
    (_, offset) =>
      featuredCities[(featuredCityStartIndex + offset) % featuredCities.length],
  );

  const handleFeaturedCityPrev = () => {
    setFeaturedCityStartIndex((prev) =>
      (prev - 1 + featuredCities.length) % featuredCities.length,
    );
  };

  const handleFeaturedCityNext = () => {
    setFeaturedCityStartIndex((prev) => (prev + 1) % featuredCities.length);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setAboutPillarsIntroVisible(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const element = legacyStatsRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (!entry.isIntersecting) {
          setLegacyStatsVisible(false);
          setAnimatedLegacyCounts(legacyStatTargets.map(() => 0));
          return;
        }

        setLegacyStatsVisible(true);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!legacyStatsVisible) {
      return;
    }

    const duration = 1400;
    const startTime = performance.now();
    let frameId = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);

      setAnimatedLegacyCounts(
        legacyStatTargets.map((target) => Math.round(target * eased)),
      );

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [legacyStatsVisible]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-wave-reveal]"),
    );

    if (!elements.length) {
      return;
    }

    const revealIfInView = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= viewportHeight * 0.9 && rect.bottom >= 0) {
        window.setTimeout(() => {
          element.classList.remove("is-visible");
          void element.offsetWidth;
          element.classList.add("is-visible");
        }, 60);
        return true;
      }

      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (!entry.isIntersecting) {
            element.classList.remove("is-visible");
            return;
          }

          window.setTimeout(() => {
            element.classList.remove("is-visible");
            void element.offsetWidth;
            element.classList.add("is-visible");
          }, 40);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const frameId = window.requestAnimationFrame(() => {
      elements.forEach((element) => {
        element.classList.remove("is-visible");

        if (revealIfInView(element)) {
          observer.observe(element);
          return;
        }

        observer.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-reveal]"),
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (!entry.isIntersecting) {
            element.classList.remove("is-visible");
            return;
          }

          window.setTimeout(() => {
            element.classList.remove("is-visible");
            void element.offsetWidth;
            element.classList.add("is-visible");
          }, 40);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const frameId = window.requestAnimationFrame(() => {
      elements.forEach((element) => {
        observer.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const activeSlide = heroSlides[currentSlide];
  const activeStory = studentStories[activeStoryIndex];
  const headerIsSolid = true;
  const headerTextClass = headerIsSolid ? "text-black" : "!text-white";
  const logoTitleClass = headerIsSolid ? "text-[#379BD3]" : "text-white";
  const logoSubtitleClass = headerIsSolid ? "text-[#2ECAAD]" : "text-white/92";
  const headerEnterClass = headerIsSolid
    ? "translate-y-0 opacity-100"
    : "-translate-y-2 opacity-95";

  return (
    <main className="min-h-screen bg-[#f4f1ea]">
      <header
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 transform-gpu border-b transition-[clip-path,opacity,box-shadow,background-color,backdrop-filter] duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
            headerIsSolid
              ? "border-[#e6dfd2] bg-white/96 opacity-100 shadow-[0_14px_40px_rgba(25,34,48,0.07)] backdrop-blur-xl [clip-path:inset(0_0_0_0_round_0px)]"
              : "border-transparent bg-white/0 opacity-0 shadow-none [clip-path:inset(0_0_100%_0_round_0px)]"
          }`}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1510px] px-2 sm:px-2.5 lg:px-3">
          <div
            className={`flex items-center justify-between gap-4 py-3 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1317px]:grid min-[1317px]:grid-cols-[200px_minmax(0,1fr)] min-[1317px]:items-start min-[1317px]:gap-0 min-[1317px]:py-2 ${headerEnterClass}`}
          >
            <Link
              href="/"
              className="relative z-10 shrink-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1317px]:pt-1 min-[1317px]:pl-4"
              aria-label="Suchitra Academy Home"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/logos/logo_transparent_fixed.png"
                  alt="Suchitra Academy logo"
                  width={92}
                  height={92}
                  priority
                  className="h-[65px] w-auto"
                />
                <div className="flex min-w-[210px] flex-col leading-none">
                  <span
                    style={{ fontFamily: "var(--font-cinzel)" }}
                    className={`whitespace-nowrap text-[23px] font-semibold uppercase leading-none transition-colors duration-500 ${logoTitleClass}`}
                  >
                    Sri Chaitanya
                  </span>
                  <span
                    style={{ fontFamily: "Sora, system-ui, sans-serif" }}
                    className={`mt-1 text-[12px] font-semibold leading-none uppercase tracking-[0.30rem] transition-colors duration-500 ${logoSubtitleClass}`}
                  >
                    Schools
                  </span>
                </div>
              </div>
            </Link>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_6px_18px_rgba(28,77,147,0.10)] transition-all min-[1317px]:hidden ${
                headerIsSolid
                  ? "border-[#d8dee8] bg-white text-[#379BD3] hover:border-[#379BD3] hover:bg-[#f3fbff]"
                  : "border-white/35 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/16"
              }`}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-[2px] w-5 rounded-full bg-current" />
                <span className="block h-[2px] w-4 rounded-full bg-current" />
                <span className="block h-[2px] w-5 rounded-full bg-current" />
              </span>
            </button>

            <div className="hidden min-w-0 flex-1 flex-col items-end min-[1317px]:flex min-[1317px]:pt-1">
              <div className="flex w-full items-center justify-end gap-2 pt-[14px]">
                <nav
                  aria-label="Primary"
                  className="flex items-center justify-end"
                >
                  {navLinks.map((item, index) => (
                    <div
                      key={item.label}
                      className="group relative flex items-center"
                    >
                      <Link
                        href={item.href}
                        className={`px-[10px] text-[15px] font-medium leading-none tracking-[-0.01em] transition-colors hover:text-[#379BD3] ${headerTextClass}`}
                      >
                        {item.label}
                      </Link>
                      {item.submenu ? (
                        <div className="pointer-events-none absolute left-0 top-full z-30 pt-[14px] opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                          <div className="min-w-[250px] rounded-[8px] bg-white py-4 shadow-[0_18px_50px_rgba(17,24,39,0.16)]">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem}
                                href="/"
                                className="block px-8 py-3 text-[15px] font-normal text-black transition-colors hover:bg-[#f3fbff] hover:text-[#379BD3]"
                              >
                                {subItem}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : null}
                      {index < navLinks.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className={`px-[4px] text-[15px] font-normal leading-none ${headerTextClass}`}
                        >
                          |
                        </span>
                      ) : null}
                    </div>
                  ))}
                </nav>

                <Link
                  href="/"
                  className="group relative z-10 ml-[10px] inline-flex min-h-[44px] min-w-[186px] items-center justify-center overflow-hidden rounded-[6px] bg-[#40B9E9] px-6 py-3 text-[13px] font-extrabold uppercase leading-none tracking-[0.04em] !text-white shadow-[0_14px_28px_rgba(64,185,233,0.26)] transition-transform duration-300 ease-out hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-black/55 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-origin:left_center] scale-x-0 group-hover:scale-x-100" />
                  <span className="relative z-10 inline-flex items-center gap-4">
                    <span>APPLY NOW</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M3.75 10h12.5M11.25 5.5 16.25 10l-5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 min-[1317px]:hidden ${
              isMenuOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            onClick={closeMenu}
          />

          <aside
            aria-label="Mobile navigation"
            className={`fixed inset-y-0 left-0 z-50 flex w-[377px] max-w-[88vw] flex-col bg-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform duration-300 min-[1317px]:hidden ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-end border-b border-[#e7e7e7] px-5 py-4">
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e3e7ef] bg-[#f3fbff] text-[#379BD3] transition-all hover:border-[#379BD3] hover:bg-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="h-4.5 w-4.5"
                >
                  <path d="M6 6 18 18" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>
            </div>

            <nav
              aria-label="Primary mobile"
              className="flex flex-col px-5 py-4 text-[15px] font-semibold text-black"
            >
              {navLinks.map((item) =>
                item.submenu ? (
                  <div key={item.label} className="border-b border-[#efefef]">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileDropdown((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                      className="flex w-full items-center justify-between py-3 text-left font-semibold text-[#379BD3]"
                    >
                      <span>{item.label}</span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#eef9ff] text-[#40B9E9]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`h-4 w-4 transition-transform ${
                            openMobileDropdown === item.label
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        >
                          <path d="m6 14 6-6 6 6" />
                        </svg>
                      </span>
                    </button>

                    {openMobileDropdown === item.label ? (
                      <div className="bg-[#fafafa] pb-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem}
                            href="/"
                            onClick={closeMenu}
                            className="block px-6 py-3 text-[15px] font-medium text-black transition-colors hover:text-[#379BD3]"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="border-b border-[#efefef] py-3 transition-colors hover:text-[#379BD3]"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="px-5 pb-5 pt-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="group relative inline-flex min-h-[46px] w-full items-center justify-center overflow-hidden rounded-[6px] bg-[#40B9E9] px-6 py-3 text-[13px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_14px_28px_rgba(64,185,233,0.24)] transition-transform duration-300 ease-out hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-black/55 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-origin:left_center] scale-x-0 group-hover:scale-x-100" />
                <span className="relative z-10 inline-flex items-center gap-4">
                  <span>APPLY NOW</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3.75 10h12.5M11.25 5.5 16.25 10l-5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </aside>
        </div>

        {isUnderMaintenance ? (
          <div className="overflow-hidden border-t border-black bg-black py-2.5">
            <div className="flex w-max min-w-full animate-[marquee_26s_linear_infinite] whitespace-nowrap">
              <div className="flex shrink-0 items-center gap-12 pr-12 text-[15px] font-semibold tracking-[0.01em] text-[#ffd54a]">
                <span>{announcementMessage}</span>
                <span className="text-white/50">|</span>
              </div>
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-12 pr-12 text-[15px] font-semibold tracking-[0.01em] text-[#ffd54a]"
              >
                <span>{announcementMessage}</span>
                <span className="text-white/50">|</span>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative w-full overflow-hidden bg-white px-2 pb-5 pt-7 text-white sm:px-2.5 sm:pt-9 lg:px-3 lg:pt-11">
        <div className="mx-auto w-full max-w-[1860px] rounded-[30px] border border-[#dce8f3] bg-[linear-gradient(180deg,#ffffff_0%,#f8fcff_100%)] p-3 shadow-[0_22px_70px_rgba(17,34,68,0.10)] sm:p-4 lg:p-5">
          <div className="relative aspect-[1904/628] overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top,#f7fdff_0%,#eef9ff_24%,#ffffff_58%,#eefaf8_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[72px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0)_100%)]" />
            <div className="absolute inset-0">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.image}
                  className={`absolute inset-0 p-4 pt-6 transition-all duration-[1200ms] ease-out sm:p-5 sm:pt-7 lg:p-6 lg:pt-8 ${
                    index === currentSlide
                      ? "scale-100 opacity-100"
                      : "scale-[1.02] opacity-0"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-white/65 bg-white/30 shadow-[0_18px_40px_rgba(41,93,140,0.08)] backdrop-blur-[2px]">
                    <Image
                      src={slide.image}
                      alt={slide.description}
                      fill
                      priority={index === 0}
                      sizes="100vw"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-7 flex items-center justify-center gap-3 sm:bottom-9 lg:bottom-11">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full border border-white/50 transition-all duration-300 ${
                  index === currentSlide
                    ? "h-[10px] w-14 border-white bg-white shadow-[0_8px_18px_rgba(255,255,255,0.35)]"
                    : "h-[10px] w-[10px] bg-white/35 hover:bg-white/65"
                }`}
              />
            ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={legacyStatsRef}
        className="bg-white px-2 py-18 sm:px-2.5 sm:py-24 lg:px-3 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="mx-auto max-w-[980px] text-center">
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading text-[34px] font-medium leading-[0.98] tracking-[-0.05em] text-black sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-semibold">An</span>{" "}
              <span className="font-light">Illustrious</span>{" "}
              <span className="font-extrabold">Legacy we</span>
              <span className="block font-extrabold">continue to Shape</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-5">
            {legacyStats.map((stat, index) => (
              <article
                key={stat.label}
                className={`max-w-[250px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  legacyStatsVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <p
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  className="text-[48px] font-extrabold leading-none tracking-[-0.05em] text-[#40B9E9] sm:text-[56px]"
                >
                  {`${animatedLegacyCounts[index]}+`}
                </p>
                <h3 className="mt-2 text-[17px] font-extrabold uppercase tracking-[-0.02em] text-black">
                  {stat.label}
                </h3>
                <div className="mt-5 h-px w-10 bg-black" />
                <p className="mt-4 max-w-[220px] text-[15px] leading-6 text-[#282828]">
                  {stat.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-2 pb-28 pt-2 sm:px-2.5 sm:pb-24 sm:pt-12 lg:px-3 lg:pb-28 lg:pt-14">
        <div className="mx-auto w-full max-w-[1510px]">
          <div
            data-section-reveal
            className="section-reveal-up"
            style={{ animationDelay: "180ms" }}
          >
            <h3
              data-section-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="section-reveal-up text-center text-[30px] font-medium tracking-[-0.03em] text-[#1f2734] sm:text-[38px]"
            >
              Explore Admission Details in Your City
            </h3>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[24px] text-white transition-colors hover:bg-black/85"
                onClick={handleFeaturedCityPrev}
              >
                <span aria-hidden="true">←</span>
              </button>

              <div className="grid min-w-0 flex-1 gap-4 sm:grid-cols-3 xl:grid-cols-7">
                {visibleFeaturedCities.map((city, index) => (
                  <article
                    key={`${city.name}-${featuredCityStartIndex}-${index}`}
                    className="text-center"
                  >
                    <div className="relative mx-auto h-[96px] w-[116px] overflow-hidden rounded-[16px] bg-[#379BD3] shadow-[0_12px_26px_rgba(34,43,64,0.12)]">
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        sizes="116px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(125,16,26,0.25)_0%,rgba(125,16,26,0.58)_100%)]" />
                    </div>
                    <p className="mt-3 text-[16px] font-semibold text-[#1f2734]">
                      {city.name}
                    </p>
                  </article>
                ))}
              </div>

              <button
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[24px] text-white transition-colors hover:bg-black/85"
                onClick={handleFeaturedCityNext}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-2 pb-18 pt-4 sm:px-2.5 sm:pb-24 lg:px-3 lg:pb-28">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="mx-auto max-w-[1180px] text-center">
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading text-[34px] font-medium leading-[0.98] tracking-[-0.05em] text-black sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-light">Immerse yourself</span>{" "}
              <span className="font-extrabold">in a Global</span>
              <span className="block font-extrabold">
                Educational Experience with peers
              </span>
              <span className="block font-extrabold">accross states</span>
            </h2>
          </div>

          <div className="mt-14 flex flex-col gap-3 xl:flex-row xl:items-stretch">
            {aboutExperiencePillars.map((pillar, index) => {
              const isActive = index === activeAboutPillarIndex;

              return (
                <button
                  key={pillar.label}
                  type="button"
                  onMouseOver={() => setActiveAboutPillarIndex(index)}
                  className={`group relative overflow-hidden rounded-[18px] border text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "border-transparent bg-[#101726] shadow-[0_18px_50px_rgba(18,24,39,0.14)] xl:flex-[1.2]"
                      : "border-[#d9e1ec] bg-[#f7fbff] hover:bg-white xl:w-[74px] xl:flex-[0_0_74px]"
                  } ${
                    aboutPillarsIntroVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                  aria-pressed={isActive}
                >
                  <div
                    className={`relative min-h-[180px] xl:min-h-[560px] ${
                      isActive ? "" : "pointer-events-none"
                    }`}
                  >
                  <div
                    className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0 duration-300"
                    }`}
                  >
                      <div className="absolute inset-0">
                        <div
                          key={isActive ? pillar.image : `${pillar.image}-hidden`}
                          style={{
                            animation: isActive
                              ? "panelMediaReveal 680ms cubic-bezier(0.22,1,0.36,1) both"
                              : undefined,
                          }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={pillar.image}
                            alt={pillar.title}
                            fill
                            sizes="(max-width: 1279px) 100vw, 60vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.64)_100%)]" />
                      </div>
                      <div
                        style={{
                          animation: isActive
                            ? "panelContentReveal 720ms cubic-bezier(0.22,1,0.36,1) both"
                            : undefined,
                        }}
                        className="absolute inset-x-0 bottom-0 p-6 sm:p-8"
                      >
                        <h3
                          style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                          className="text-[34px] font-extrabold leading-none tracking-[-0.04em] text-white sm:text-[48px]"
                        >
                          {pillar.title}
                        </h3>
                        <div className="mt-4 h-px w-16 bg-white/70" />
                        <p className="mt-5 max-w-[560px] text-[15px] leading-6 text-white/82 sm:text-[17px]">
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`absolute inset-0 flex h-full w-full flex-col items-center justify-between px-2 py-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "translate-y-4 opacity-0 duration-300"
                          : "translate-y-0 opacity-100"
                      }`}
                    >
                      <span className="text-[36px] font-extralight leading-none text-[#5d7faa] transition-transform duration-500 group-hover:rotate-90">
                        +
                      </span>
                      <span
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          fontFamily: "var(--font-plus-jakarta-sans)",
                        }}
                        className="text-center text-[18px] font-medium tracking-[-0.02em] text-[#12263f] xl:text-[20px]"
                      >
                        {pillar.label}
                      </span>
                      <span className="h-5 w-px bg-[#d9e1ec]" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#40B9E9_0%,#379BD3_58%,#2ECAAD_100%)] px-2 py-16 text-white sm:px-2.5 sm:py-20 lg:px-3 lg:py-24">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(620px,1fr)] xl:items-center">
            <div
              data-section-reveal
              className="section-reveal-left max-w-[640px]"
            >
              <p
                data-section-reveal
                className="section-reveal-up text-[18px] font-medium text-white/92 sm:text-[22px]"
              >
                Students Speak
              </p>
              <h2
                data-wave-reveal
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="wave-reveal-heading mt-4 text-[34px] font-light leading-[0.94] tracking-[-0.055em] text-white sm:text-[46px] lg:text-[60px]"
              >
                Discover the inspiring stories{" "}
                <span className="font-extrabold">and gain</span>
                <span className="block font-extrabold">
                  valuable insights
                </span>
                <span className="block font-extrabold">
                  straight from our
                </span>
                <span className="block font-extrabold">
                  accomplished graduates
                </span>
              </h2>

              <div
                data-section-reveal
                className="section-reveal-up mt-12 flex flex-wrap items-center gap-5"
              >
                {/* <button
                  type="button"
                  onClick={() =>
                    setActiveStoryIndex(
                      (activeStoryIndex - 1 + studentStories.length) %
                        studentStories.length,
                    )
                  }
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/14 text-[28px] text-white transition-colors hover:bg-white/22"
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveStoryIndex(
                      (activeStoryIndex + 1) % studentStories.length,
                    )
                  }
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/14 text-[28px] text-white transition-colors hover:bg-white/22"
                >
                  <span aria-hidden="true">→</span>
                </button> */}

                <div className="flex flex-wrap items-start gap-4">
                  {studentStories.map((story, index) => (
                    <div key={story.name} className="flex w-[72px] flex-col items-center text-center">
                      <button
                        type="button"
                        onMouseOver={() => setActiveStoryIndex(index)}
                        className={`overflow-hidden rounded-[14px] border transition-all ${
                          index === activeStoryIndex
                            ? "border-white bg-white p-1"
                            : "border-white/18 bg-white/10 p-1 hover:bg-white/16"
                        }`}
                      >
                        <div className="relative h-[56px] w-[56px] overflow-hidden rounded-[10px]">
                          <Image
                            src={story.thumb}
                            alt={story.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                      </button>
                      <span className="mt-3 text-[12px] font-medium text-white/88">
                        {story.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                data-section-reveal
                href="/"
              className="section-reveal-up mt-12 inline-flex items-center gap-4 rounded-[10px] bg-white px-8 py-4 text-[16px] font-semibold uppercase tracking-[0.04em] !text-black transition-colors hover:bg-white/90"
              >
                Apply Now
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <article
              data-section-reveal
              className="section-reveal-right overflow-hidden rounded-[18px] bg-white shadow-[0_18px_60px_rgba(55,155,211,0.22)]"
            >
              <div className="grid min-h-[640px] xl:grid-cols-[1fr_0.95fr]">
                <div className="flex flex-col justify-center px-8 py-10 text-[#1f2734] sm:px-12 lg:px-14">
                  <p
                    data-section-reveal
                    className="section-reveal-up text-[72px] font-black leading-none text-[#2ECAAD]"
                  >
                    “
                  </p>
                  <h3
                    data-wave-reveal
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="wave-reveal-heading -mt-2 text-[34px] font-light leading-[0.96] tracking-[-0.045em] text-[#283140] sm:text-[48px]"
                  >
                    <span className="block">From an</span>
                    <span className="block font-extrabold">
                      {activeStory.quoteTitle}
                    </span>
                  </h3>
                  <p
                    data-section-reveal
                    className="section-reveal-up mt-8 max-w-[420px] text-[18px] leading-9 text-[#454f63]"
                  >
                    “{activeStory.quote}”
                  </p>
                </div>

                <div className="relative min-h-[360px] bg-[#111827]">
                  <Image
                    src={activeStory.image}
                    alt={activeStory.name}
                    fill
                    sizes="(max-width: 1279px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,20,0.02)_0%,rgba(3,8,20,0.18)_40%,rgba(3,8,20,0.78)_100%)]" />
                  <div
                    data-section-reveal
                    className="section-reveal-up absolute inset-x-0 bottom-0 p-8 sm:p-10"
                  >
                    <h4
                      style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                      className="text-[36px] font-extrabold leading-none tracking-[-0.04em] text-white sm:text-[48px]"
                    >
                      {activeStory.name.split(" ")[0]}
                      <span className="font-light">
                        {" "}
                        {activeStory.name.split(" ").slice(1).join(" ")}
                      </span>
                    </h4>
                    <div className="mt-5 h-px w-12 bg-white/60" />
                    <p className="mt-4 text-[18px] font-semibold text-white">
                      {activeStory.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-2 pb-18 pt-8 sm:px-2.5 sm:pb-24 sm:pt-12 lg:px-3 lg:pb-28 lg:pt-14">
        <div className="mx-auto w-full max-w-[1510px]">
          <div
            data-section-reveal
            className="section-reveal-up mx-auto max-w-[900px] text-center"
          >
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading text-[34px] font-light leading-[0.98] tracking-[-0.05em] text-[#252525] sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-light">Inside our </span>
              <span className="font-extrabold">Campus</span>
            </h2>
            <p
              data-section-reveal
              className="campus-description-reveal mx-auto mt-8 max-w-[560px] text-[18px] leading-8 text-[#555]"
              style={{ animationDelay: "140ms" }}
            >
              Experience a vibrant, safe and inspiring environment shaped by
              academics, arts, sports, and everyday student life.
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-5 lg:grid-rows-3">
            {campusGalleryItems.map((item, index) => (
              <article
                key={item.title}
                data-section-reveal
                className={`campus-card-reveal group relative overflow-hidden rounded-[8px] bg-[#101726] shadow-[0_14px_34px_rgba(20,30,48,0.10)] ${item.span}`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className={`relative h-full w-full ${item.aspect}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,24,0.02)_0%,rgba(10,15,24,0.08)_48%,rgba(10,15,24,0.78)_100%)]" />
                  <div
                    data-section-reveal
                    className="section-reveal-up absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5 sm:p-6"
                    style={{ animationDelay: `${index * 90 + 120}ms` }}
                  >
                    <h3
                      style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                      className="text-[22px] font-extrabold tracking-[-0.03em] text-white sm:text-[32px]"
                    >
                      {item.title}
                    </h3>
                    <span className="text-[30px] font-light leading-none text-white/92">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-2 py-18 sm:px-2.5 sm:py-24 lg:px-3 lg:py-28">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="mx-auto max-w-[980px] text-center">
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading text-[34px] font-light leading-[0.98] tracking-[-0.05em] text-[#1f2734] sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-light">Explore our</span>{" "}
              <span className="font-extrabold">Branch Network</span>
            </h2>
            <p
              data-section-reveal
              className="section-reveal-up mx-auto mt-6 max-w-[760px] text-[18px] leading-8 text-[#5a6572]"
            >
              Find Sri Chaitanya campuses by state and district, then browse
              schools, colleges, and coaching centers available in that region.
            </p>
          </div>

          <div
            data-section-reveal
            className="section-reveal-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "120ms" }}
          >
            <label className="block">
              <span className="sr-only">State</span>
              <select
                defaultValue="telangana"
                className="h-13 min-w-[260px] rounded-[14px] border border-[#d9e4ef] bg-white px-5 text-[16px] font-medium text-[#17314a] outline-none shadow-[0_10px_24px_rgba(17,37,63,0.06)]"
              >
                <option value="telangana">Telangana</option>
                <option value="andhra-pradesh">Andhra Pradesh</option>
                <option value="karnataka">Karnataka</option>
              </select>
            </label>
            <label className="block">
              <span className="sr-only">District</span>
              <select
                defaultValue="rangareddy"
                className="h-13 min-w-[260px] rounded-[14px] border border-[#d9e4ef] bg-white px-5 text-[16px] font-medium text-[#17314a] outline-none shadow-[0_10px_24px_rgba(17,37,63,0.06)]"
              >
                <option value="rangareddy">Rangareddy</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="medchal">Medchal</option>
              </select>
            </label>
          </div>


          <div className="mt-12 grid gap-5 xl:grid-cols-[minmax(0,1fr)_480px]">
            <article
              data-section-reveal
              className="section-reveal-left overflow-hidden rounded-[22px] bg-white shadow-[0_20px_50px_rgba(8,58,67,0.12)]"
              style={{ animationDelay: "220ms" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <iframe
                  title="Sri Chaitanya branches map demo"
                  src="https://www.google.com/maps?q=Hyderabad,+Telangana&z=11&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>

            <aside
              data-section-reveal
              className="section-reveal-right rounded-[22px] bg-white p-5 text-[#17314a] shadow-[0_20px_50px_rgba(8,58,67,0.12)] sm:p-6"
              style={{ animationDelay: "260ms" }}
            >
              <div
                data-section-reveal
                className="section-reveal-up flex flex-wrap gap-3"
                style={{ animationDelay: "300ms" }}
              >
                <button
                  type="button"
                  className="rounded-full bg-[#379BD3] px-6 py-3 text-[15px] font-semibold text-white"
                >
                  Schools
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#edf2f7] px-6 py-3 text-[15px] font-medium text-[#52687c]"
                >
                  Colleges
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#edf2f7] px-6 py-3 text-[15px] font-medium text-[#52687c]"
                >
                  Coaching Centers
                </button>
              </div>

              <div className="mt-6 max-h-[520px] space-y-4 overflow-y-auto pr-2">
                {branchLocations.map((branch, index) => (
                  <article
                    key={branch.name}
                    data-section-reveal
                    className="section-reveal-up rounded-[18px] bg-[#ecf3fb] px-5 py-5 transition-colors hover:bg-[#e4eef9]"
                    style={{ animationDelay: `${340 + index * 75}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[18px] font-extrabold text-[#1b2b39]">
                          {branch.name}
                        </h3>
                        <p className="mt-2 max-w-[360px] text-[15px] leading-7 text-[#30485f]">
                          {branch.address}
                        </p>
                      </div>
                      <span className="pt-1 text-[28px] leading-none text-[#1b2b39]">
                        
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-2 py-18 sm:px-2.5 sm:py-24 lg:px-3 lg:py-28">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#2ECAAD]">
              Stay Connected
            </p>
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading mt-5 text-[34px] font-light leading-[0.98] tracking-[-0.05em] text-[#1f2734] sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-light">Latest </span>
              <span className="font-extrabold">Social Media News</span>
            </h2>
            <p
              data-section-reveal
              className="section-reveal-up mx-auto mt-6 max-w-[760px] text-[18px] leading-8 text-[#5a6572]"
            >
              Catch the newest highlights from our social channels, including
              student achievements, campus events, academic milestones, and
              everyday stories from Sri Chaitanya life.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {socialNewsItems.map((item, index) => (
              <article
                key={`${item.platform}-${item.title}`}
                data-section-reveal
                className="section-reveal-up overflow-hidden rounded-[24px] bg-white shadow-[0_16px_40px_rgba(17,34,68,0.10)]"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,16,29,0.04)_0%,rgba(9,16,29,0.12)_45%,rgba(9,16,29,0.74)_100%)]" />
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7c8796]">
                    {item.handle}
                  </p>
                  <h3
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="mt-4 text-[28px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#1f2734]"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-8 text-[#5a6572]">
                    {item.description}
                  </p>
                  <Link
                    href="/"
                    className="mt-6 inline-flex items-center gap-3 text-[15px] font-semibold text-[#379BD3] transition-colors hover:text-[#2ECAAD]"
                  >
                    View Update
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="bg-white px-2 py-18 sm:px-2.5 sm:py-24 lg:px-3 lg:py-28">
        <div className="mx-auto w-full max-w-[1510px]">
          <div className="max-w-[980px]">
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              className="wave-reveal-heading text-[34px] font-light leading-[1.08] tracking-[-0.055em] text-black sm:text-[46px] lg:text-[60px]"
            >
              <span className="font-light">Why Should You Choose</span>
                <span className="mt-2 block font-extrabold">
                  Sri Chaitanya Schools?
                </span>
            </h2>
          </div>

          <div className="divide-y divide-[#1f2734]/18">
            {whyChooseItems.map((item, index) => {
              const isActive = index === activeWhyChooseIndex;

              return (
                <article
                  key={item.number}
                  data-section-reveal
                  className="section-reveal-up cursor-pointer py-8 transition-colors"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveWhyChooseIndex(index)}
                    className="grid w-full items-center gap-6 text-left sm:grid-cols-[110px_minmax(0,1fr)_48px]"
                  >
                    <div
                      style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                      className={`text-[60px] font-extrabold leading-none tracking-[-0.04em] transition-colors ${
                        isActive ? "text-[#d4d9df]" : "text-[#e5e7eb]"
                      }`}
                    >
                      {item.number}
                    </div>
                    <h3
                      style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                      className={`max-w-[760px] text-[24px] font-extrabold leading-[1.06] tracking-[-0.04em] transition-colors sm:text-[24px] ${
                        isActive ? "text-[#111827]" : "text-[#1f2734]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`justify-self-start text-[42px] font-light leading-none transition-all duration-500 ease-out sm:justify-self-end ${
                        isActive
                          ? "translate-x-1 scale-110 text-[#111827]"
                          : "translate-x-0 scale-100 text-[#111827]"
                      }`}
                    >
                      →
                    </span>
                  </button>

                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "mt-8 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-70"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="grid gap-8 xl:grid-cols-[110px_minmax(0,1fr)_540px] xl:items-center">
                        <div />
                        <div
                          className={`max-w-[620px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive ? "translate-y-0 opacity-100 delay-75" : "translate-y-3 opacity-0"
                          }`}
                        >
                          <div
                            className={`h-px w-14 origin-left bg-[#111827] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                              isActive ? "scale-x-100" : "scale-x-0"
                            }`}
                          />
                          <p className="mt-6 text-[18px] leading-8 text-[#505b6a]">
                            {item.description}
                          </p>
                        </div>

                        <div
                          className={`grid gap-4 sm:grid-cols-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive ? "translate-y-0 opacity-100 delay-150" : "translate-y-4 opacity-0"
                          }`}
                        >
                          {item.images?.map((image, imageIndex) => (
                            <article
                              key={`${item.number}-${image}`}
                              className="overflow-hidden rounded-[12px] bg-[#eef3f7] shadow-[0_14px_34px_rgba(17,34,68,0.10)]"
                            >
                              <div className="relative aspect-[4/5] w-full">
                                <Image
                                  src={image}
                                  alt={`Why choose Sri Chaitanya visual ${imageIndex + 1}`}
                                  fill
                                  sizes="(max-width: 1279px) 100vw, 24vw"
                                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                                />
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section> */}

      <section className="bg-white px-2 pb-20 sm:px-2.5 sm:pb-24 lg:px-3 lg:pb-28">
        <div className="mx-auto w-full max-w-[1350px] overflow-hidden rounded-[12px] bg-[#232323] text-white shadow-[0_18px_40px_rgba(15,15,18,0.16)]">
          <div className="grid items-center lg:grid-cols-[minmax(0,1fr)_520px_auto]">
            <div
              data-section-reveal
              className="section-reveal-left px-8 py-8 sm:px-10 lg:pr-4"
            >
              <h2
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[28px] font-light italic leading-[1.05] tracking-[-0.05em] text-white sm:text-[38px] lg:text-[46px]"
              >
                <span className="block">Admission Open for</span>
                <span className="block font-extrabold text-[#40B9E9]">
                  2026-2027
                </span>
              </h2>
            </div>

            <div
              data-section-reveal
              className="section-reveal-up relative h-[140px] overflow-hidden sm:h-[160px] lg:h-[124px]"
              style={{ animationDelay: "120ms" }}
            >
              <Image
                src="/hero-banners/home/2.jpeg"
                alt="Sri Chaitanya students"
                fill
                sizes="(max-width: 1023px) 100vw, 520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#232323_0%,rgba(35,35,35,0.2)_24%,rgba(35,35,35,0.05)_76%,#232323_100%)]" />
            </div>

            <div
              data-section-reveal
              className="section-reveal-right px-8 py-7 sm:px-10 lg:pl-5 lg:pr-10"
            >
              <Link
                href="/"
                className="inline-flex min-h-[46px] min-w-[176px] items-center justify-center gap-3 rounded-[10px] bg-[#40B9E9] px-7 text-[15px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#379BD3] hover:shadow-[0_16px_28px_rgba(64,185,233,0.28)]"
              >
                Apply Now
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-0 w-full overflow-y-visible [overflow-x:clip] bg-[#FFFFFF] pb-0 pt-6 sm:pt-8">
        <div className="px-0 pb-0">
          <div className="flex items-end justify-center overflow-visible px-4 sm:px-6">
            {spotlightGalleryImages.map((image, index) => (
              <article
                key={`${image}-${index}`}
                className={`group relative h-[174px] w-[138px] shrink-0 overflow-hidden rounded-[14px] border border-[#d7e4ef] bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_100%)] p-[6px] shadow-[0_16px_30px_rgba(15,23,42,0.12)] sm:h-[236px] sm:w-[178px] lg:h-[292px] lg:w-[222px] ${
                  index % 4 === 0
                    ? "-rotate-[9deg]"
                    : index % 4 === 1
                      ? "rotate-[3deg]"
                      : index % 4 === 2
                        ? "-rotate-[4deg]"
                        : "rotate-[6deg]"
                } origin-bottom transition-transform duration-500 hover:z-10 hover:-translate-y-10 hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_28px_50px_rgba(15,23,42,0.2)] ${
                  index === 0 ? "" : "-ml-9 sm:-ml-11 lg:-ml-12"
                }`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-white">
                  <img
                    src={image}
                    alt={`Sri Chaitanya spotlight ${index + 1}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_24%,rgba(9,18,32,0.06)_100%)]" />
                  <div className="absolute left-3 top-3 h-2.5 w-14 rounded-full bg-white/82 shadow-[0_4px_10px_rgba(255,255,255,0.4)]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 -mt-8 bg-[linear-gradient(180deg,#0d1f38_0%,#08152a_100%)] text-white sm:-mt-10 lg:-mt-12">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,transparent_0%,#40B9E9_18%,#2ECAAD_82%,transparent_100%)]" />

        <div className="mx-auto w-full max-w-[1510px] px-5 pt-16 sm:px-8 sm:pt-18 lg:px-10 lg:pt-20">
          <div className="grid gap-10 xl:grid-cols-[1.28fr_0.82fr_0.92fr_0.82fr]">
            <div className="w-full max-w-none">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#379BD3] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.05)]">
                  <span className="text-[18px] font-bold text-white">SC</span>
                </div>
                <div>
                  <h2
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="text-[24px] font-bold tracking-[-0.04em] text-white"
                  >
                    Sri Chaitanya
                  </h2>
                  <p className="text-[14px] font-medium text-white/80">
                    Madhapur, Hyderabad
                  </p>
                </div>
              </div>

              <p className="mt-7 text-[15px] leading-7 text-white/80">
                Transforming education since 1986. Shaping future leaders
                through innovation, excellence, and holistic development across
                156+ branches nationwide.
              </p>

              <div className="mt-7 space-y-3 text-[15px] leading-7 text-white/86">
                <p>
                  Sri Sai Plaza, Plot No. 80, Ayyappa Society Main Rd,
                  Madhapur, Hyderabad
                </p>
                <p>+91 1800-123-4567</p>
                <p>corporate@srichaitanya.edu</p>
              </div>

              <div className="mt-7 overflow-hidden rounded-[22px] border border-white/12 bg-white/[0.04] shadow-[0_14px_34px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#40B9E9]">
                      Campus Map
                    </p>
                    <p className="mt-1 text-[14px] font-medium text-white/86">
                      Madhapur, Hyderabad
                    </p>
                  </div>
                  <Link
                    href="https://www.google.com/maps?q=Sri+Sai+Plaza,+Plot+No.+80,+Ayyappa+Society+Main+Rd,+Madhapur,+Hyderabad"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[12px] font-semibold text-white/88 transition-all duration-300 hover:border-[#40B9E9]/60 hover:text-white"
                  >
                    Open Map
                  </Link>
                </div>
                <div className="relative h-[220px] w-full overflow-hidden bg-[#0b1930]">
                  <iframe
                    title="Sri Chaitanya Madhapur map"
                    src="https://www.google.com/maps?q=Sri+Sai+Plaza,+Plot+No.+80,+Ayyappa+Society+Main+Rd,+Madhapur,+Hyderabad&z=15&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {footerSocialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/16 bg-white/[0.04] text-[13px] font-semibold uppercase tracking-[0.04em] text-white/92 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#40B9E9]/60 hover:bg-white/[0.09]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[22px] font-bold tracking-[-0.03em] text-white"
              >
                Quick Links
              </h3>
              <div className="mt-4 h-1 w-10 rounded-full bg-[#40B9E9]" />
              <div className="mt-5 space-y-3.5">
                {footerQuickLinks.map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="flex items-center gap-3 text-[15px] text-white/86 transition-colors hover:text-white"
                  >
                    <span className="text-[#2ECAAD]">›</span>
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-4">
                <h3
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  className="text-[22px] font-bold tracking-[-0.03em] text-white"
                >
                  Nearby Branches
                </h3>
                <span className="text-[13px] font-semibold text-[#40B9E9]">
                  Hide
                </span>
              </div>
              <div className="mt-4 h-1 w-10 rounded-full bg-[#40B9E9]" />

              <div className="mt-5 flex items-center gap-3 text-[14px] text-white/84">
                <span className="inline-flex h-2.5 w-2.5 rounded-full border border-[#2ECAAD]" />
                <span>Near Hyderabad</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/88">
                  Popular
                </span>
              </div>

              <div className="mt-5 space-y-3.5">
                {footerBranches.map((branch) => (
                  <article
                    key={branch.name}
                    className="rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-[14px]">
                        <Image
                          src={branch.image}
                          alt={branch.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-[14px] font-semibold text-white">
                          {branch.name}
                        </h4>
                        <p className="text-[13px] text-white/68">
                          {branch.area}
                        </p>
                      </div>
                      <span className="text-[13px] font-semibold text-[#40B9E9]">
                        ? {branch.rating}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <Link
                href="/"
                className="mt-5 inline-block text-[14px] font-semibold text-[#40B9E9] transition-colors hover:text-[#2ECAAD]"
              >
                View all 6+ branches
              </Link>
            </div>

            <div>
              <h3
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[22px] font-bold tracking-[-0.03em] text-white"
              >
                Categories
              </h3>
              <div className="mt-4 h-1 w-10 rounded-full bg-[#40B9E9]" />
              <div className="mt-5 space-y-3.5">
                {footerCategories.map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="flex items-center gap-3 text-[15px] text-white/86 transition-colors hover:text-white"
                  >
                    <span className="text-[#2ECAAD]">›</span>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 bg-[#081220]/60">
          <div className="mx-auto flex w-full max-w-[1510px] flex-col gap-4 px-5 py-6 text-[13px] text-white/44 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <p>Copyright 2026 Sri Chaitanya Schools | All rights reserved</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerBottomLinks.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="transition-colors hover:text-white/70"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

