import Image from "next/image";

const courseDetails = ["8 lessons", "2h 40min", "Intermediate"];

export function FeaturedCourse() {
  return (
    <section
      id="courses"
      aria-labelledby="featured-course-title"
      className="bg-primary px-5 pt-[60px] pb-[69px] text-white md:px-10 md:py-20 xl:px-20 xl:pt-[100px] xl:pb-[113px]"
    >
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-[38px] md:gap-10 xl:grid-cols-[538px_minmax(0,1fr)] xl:items-center xl:gap-[60px]">
        <div className="relative aspect-[362/280] w-full xl:aspect-[538/408]">
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <Image
              src="/images-updated/Image__Product_design_course___student_working_on_interface_designs_.png"
              alt="Student working on product design sketches and interface concepts"
              fill
              sizes="(max-width: 767px) 0px, 538px"
              className="object-cover max-[767px]:hidden"
            />
            <Image
              src="/images-updated/Image__Product_design_course___student_working_on_interface_designs__2.png"
              alt="Student working on product design sketches and interface concepts"
              fill
              sizes="(max-width: 767px) 362px, 0px"
              className="hidden object-cover max-[767px]:block"
            />
          </div>
          <span className="absolute -left-3 -top-3 z-10 flex h-[28px] w-[160px] items-center justify-center rounded-md bg-[#FFEE7E] px-3 font-sans text-[11px] leading-[16.5px] font-bold uppercase tracking-[1.32px] text-ink">
            Featured Course
          </span>
        </div>

        <div className="flex flex-col items-start">
          <p className="font-sans text-[12px] leading-4 font-semibold uppercase tracking-[1.44px] text-white">
            Most popular this month
          </p>
          <h2
            id="featured-course-title"
            className="mt-4 xl:mt-3 max-w-[540px] font-heading text-[30px] leading-[34.5px] font-extrabold tracking-[-0.75px] text-white md:text-[40px] md:leading-[1.15] xl:text-[48px] xl:leading-[55.68px] xl:tracking-[-1.2px]"
          >
            Designing products people understand.
          </h2>
          <p className="mt-5 max-w-[538px] font-sans text-[15px] leading-[26.25px] text-white md:text-[16px] md:leading-7">
            Learn how to turn complex workflows into simple, intentional product
            experiences through research, structure and thoughtful interaction
            design.
          </p>
          <p className="mt-6 font-sans text-[16px] leading-6 font-normal text-white">
            with Maya Chen · Senior Product Designer
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Course details">
            {courseDetails.map((detail) => (
              <li
                key={detail}
                className="rounded-md border border-white/40 px-3 py-2 font-sans text-[14px] leading-5 text-white"
              >
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex w-full flex-col items-center gap-6 xl:w-auto xl:flex-row xl:items-center xl:gap-5">
            <a
              href="#contact"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-md bg-[#FFEE7E] px-6 xl:w-auto text-[14px] leading-5 font-semibold text-ink transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#f8e46f] hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              View course
            </a>
            <a
              href="#categories"
              className="inline-flex min-h-5 items-center justify-center gap-2 text-[13px] leading-5 font-medium text-white xl:justify-start transition-[opacity,transform] duration-200 hover:translate-x-1 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Browse all courses
              <Image
                src="/images-updated/Arrow_10.svg"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
