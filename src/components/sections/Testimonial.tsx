import Image from "next/image";

const stats = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

function QuoteMark() {
  return (
    <Image
      src="/images-updated/Container_10.svg"
      alt=""
      aria-hidden="true"
      width={362}
      height={22}
      unoptimized
      className="h-[22px] w-[362px] max-w-full object-left object-contain"
    />
  );
}

export function Testimonial() {
  return (
    <section
      aria-label="Learner testimonial and Luma statistics"
      className="bg-white px-5 py-[60px] md:px-10 md:py-20 xl:px-0 xl:pt-[100px] xl:pb-[96px]"
    >
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-[60px] xl:grid-cols-[600px_minmax(0,1fr)] xl:items-center xl:gap-[135px]">
        <figure className="flex flex-col">
          <QuoteMark />
          <blockquote className="mt-4 max-w-[600px] font-heading text-[22px] leading-[1.3] font-semibold tracking-[-0.35px] text-ink xl:text-[30px] xl:leading-[1.45] xl:tracking-[-0.75px]">
            The lessons are short enough to fit into my week, but detailed
            enough that I actually leave with something I can use.
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 xl:mt-8">
            <Image
              src="/images-updated/Image__Alex_Morgan_.png"
              alt="Alex Morgan"
              width={48}
              height={48}
              sizes="48px"
              className="h-12 w-12 rounded-full object-cover xl:h-12 xl:w-12"
            />
            <span className="flex flex-col gap-1">
              <strong className="text-[15px] leading-[22.5px] font-semibold text-ink xl:text-[16px] xl:leading-6">
                Alex Morgan
              </strong>
              <span className="text-[13px] leading-[19.5px] text-muted xl:text-[14px] xl:leading-[21px]">
                Product Manager
              </span>
            </span>
          </figcaption>
        </figure>

        <div className="mt-0 grid grid-cols-3 gap-2 border-0 pt-0 xl:mt-0 xl:min-h-[325px] xl:grid-cols-1 xl:content-between xl:gap-0 xl:border-l xl:border-t-0 xl:py-0 xl:pl-12">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex min-w-0 flex-col items-center text-center xl:items-start xl:text-left"
            >
              <strong className="font-heading text-[42px] leading-[1.1] font-extrabold tracking-[-0.8px] text-primary xl:text-[68px] xl:leading-[1] xl:tracking-[-1.5px]">
                {stat.value}
              </strong>
              <span className="mt-1 text-[12px] leading-[1.5] text-muted xl:text-[14px] xl:leading-[21px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
