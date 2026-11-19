import Image from "next/image";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Courses", "#courses"],
      ["Categories", "#categories"],
      ["Instructors", "#community"],
      ["For Teams", "#contact"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "#community"],
      ["Careers", "#contact"],
      ["Journal", "#community"],
    ],
  },
  {
    title: "Support",
    links: [
      ["Help Center", "#contact"],
      ["Contact", "#contact"],
      ["Terms", "#contact"],
      ["Privacy", "#contact"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#171B2C] px-5 pb-8 pt-[60px] text-white md:px-10 md:pb-10 md:pt-20 xl:px-20 xl:pb-10 xl:pt-20">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-3 md:gap-x-8 xl:grid-cols-[416px_208px_208px_208px] xl:gap-8">
          <div className="col-span-2 flex flex-col md:col-span-3 xl:col-span-1">
            <a
              href="#top"
              aria-label="Luma home"
              className="font-heading text-[18px] leading-none font-extrabold tracking-[-1px] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Image
                src="/images-updated/Logo-white.svg"
                alt="Luma"
                width={54}
                height={17}
              />
            </a>
            <p className="mt-2 max-w-none text-[14px] leading-[23.8px] text-white/60 md:mt-4 md:max-w-[240px]">
              Practical learning for curious people.
            </p>
          </div>

          {footerGroups.map((group) => (
            <nav
              key={group.title}
              aria-label={`${group.title} links`}
              className={
                group.title === "Support" ? "col-span-2 md:col-span-1 xl:col-span-1" : ""
              }
            >
              <h3 className="text-[12px] leading-4 font-semibold uppercase tracking-[1.2px] text-white">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[14px] leading-[21px] text-white/60 transition-colors duration-200 hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/20 pt-6">
          <p className="text-center text-[13px] leading-[19.5px] text-white md:text-left">
            © 2026 Luma Learning
          </p>
        </div>
      </div>
    </footer>
  );
}
