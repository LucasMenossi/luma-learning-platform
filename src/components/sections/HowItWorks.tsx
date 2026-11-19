import Image from "next/image";

const steps = [
  {
    number: "Step 01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    shape: "square",
  },
  {
    number: "Step 02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who actually use these skills.",
    shape: "circle",
  },
  {
    number: "Step 03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    shape: "dot",
  },
] as const;

type StepShape = (typeof steps)[number]["shape"];

function StepIcon({ shape }: { shape: StepShape }) {
  const iconByShape: Record<StepShape, string> = {
    square: "/images-updated/Container_2.svg",
    circle: "/images-updated/Container_3.svg",
    dot: "/images-updated/Container_4.svg",
  };

  const src = iconByShape[shape];

  const isOrangeShape = shape === "circle";
  const iconSize = isOrangeShape ? 67 : 56;

  return (
    <span className="flex h-[67px] w-[67px] shrink-0 items-center justify-center">
      <Image
        src={src}
        alt=""
        width={iconSize}
        height={iconSize}
        className="h-auto w-auto"
      />
    </span>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="bg-page px-5 py-[60px] md:px-10 md:py-20 xl:px-20 xl:pt-[100px] xl:pb-[95px]"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <header className="flex flex-col items-center text-center">
          <p className="text-[11px] leading-4 font-semibold uppercase tracking-[1.1px] text-primary">
            How Luma works
          </p>
          <h2
            id="how-it-works-title"
            className="mt-4 max-w-[700px] font-heading text-[30px] leading-[1.2] font-extrabold tracking-[-0.8px] text-ink md:text-[40px] md:leading-[1.2] xl:text-[48px] xl:tracking-[-1.2px]"
          >
            Less browsing. More learning.
          </h2>
        </header>

        <div className="relative mt-10 grid grid-cols-1 gap-0 md:mt-14 md:grid-cols-3 md:gap-6 xl:mt-20 xl:grid-cols-[repeat(3,320px)] xl:justify-between xl:gap-0 xl:pt-7 xl:pb-7">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[33px] hidden h-px bg-[#E7E7EC] md:block xl:left-[28px] xl:right-auto xl:top-[56px] xl:w-[800px]" />
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`relative flex flex-col items-start md:min-h-[230px] md:items-center md:text-center xl:min-h-[206px] xl:items-start xl:text-left ${
                index < 2 ? "min-h-[271px]" : "min-h-[195px]"
              } ${
                index < 2
                  ? "after:absolute after:left-7 after:w-px after:bg-[#E7E7EC] after:content-[''] md:after:hidden"
                  : ""
              } ${
                index === 0
                  ? "after:top-[221px] after:h-[50px]"
                  : index === 1
                    ? "after:top-[224px] after:h-[47px]"
                    : ""
              }`}
            >
              <StepIcon shape={step.shape} />
              <p className="mt-4 text-[11px] leading-4 font-semibold uppercase tracking-[0.8px] text-[#9E9FAA]">
                {step.number}
              </p>
              <h3 className="mt-2 font-heading text-[20px] leading-7 font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 max-w-full text-[14px] leading-6 text-muted md:max-w-[230px] xl:max-w-[320px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
