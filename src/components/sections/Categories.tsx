import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const categories = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    number: "02",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    number: "03",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
];

function ArrowIcon() {
  return (
    <Image
      src="/images-updated/Arrow.svg"
      alt=""
      width={20}
      height={20}
      className="h-5 w-5 shrink-0"
    />
  );
}

export function Categories() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-title"
      className="bg-white px-5 pt-[44px] pb-[60px] md:px-10 md:py-20 xl:px-20 xl:pt-[100px] xl:pb-[92px]"
    >
      <Container className="flex flex-col gap-12 xl:gap-10">
        <SectionHeading
          eyebrow="FIND YOUR NEXT SKILL"
          title="Learn something worth knowing."
          description="Short, practical courses designed around skills you can put to work immediately."
          titleId="categories-title"
          className="max-w-[560px]"
          eyebrowClassName="text-xs leading-4 font-semibold tracking-[1.44px] text-primary"
          titleClassName="mt-4 font-heading text-[32px] leading-9 font-extrabold tracking-[-0.8px] text-ink xl:text-[48px] xl:leading-[56px] xl:tracking-[-1.2px]"
          descriptionClassName="mt-4 text-base leading-7 text-muted xl:text-[18px]"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {categories.map((category) => (
            <a
              key={category.number}
              href="#courses"
              className="group flex h-[220px] flex-col justify-between rounded-2xl border border-[#DBDFEB] bg-white p-5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary xl:h-[264.5px] xl:p-7"
            >
              <div className="flex flex-col">
                <span className="inline-flex h-6 w-8 items-center justify-center rounded-md bg-[#E2E8FF] text-[11px] leading-[16.5px] font-bold tracking-[1.1px] text-primary">
                  {category.number}
                </span>

                <h3 className="mt-4 font-heading text-xl leading-7 font-bold text-ink xl:mt-[22.5px] xl:leading-8">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6D7384] xl:mt-3">
                  {category.description}
                </p>
              </div>

              <span className="inline-flex h-9 items-center gap-2 text-[13px] leading-[19.5px] font-medium text-ink xl:h-11">
                Explore
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
