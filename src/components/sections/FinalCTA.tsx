import { AvatarStack } from "@/components/ui/AvatarStack";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";

const avatars = [
  "Image_14.png",
  "Image_15.png",
  "Image_16.png",
  "Image_17.png",
];

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative isolate overflow-hidden bg-[#FFF1C2] px-5 py-[60px] md:px-10 md:py-20 xl:px-20 xl:pt-[100px] xl:pb-[99px]"
    >
      <div className="pointer-events-none absolute left-[22px] top-[16px] hidden h-[108px] w-[108px] rounded-full border border-[#FFCB9F] xl:block" />
      <div className="pointer-events-none absolute left-[56px] top-[373px] hidden h-[120px] w-[120px] rounded-full bg-[#FFCB9F] xl:block" />
      <div className="pointer-events-none absolute right-[-3px] top-[-24px] hidden h-[115px] w-[115px] rotate-[12deg] rounded-lg bg-[#FFCB9F] xl:block" />
      <div className="pointer-events-none absolute right-[40px] top-[429px] hidden h-8 w-8 rounded-full border border-[#FFCB9F] xl:block" />

      <Image
        src="/images-updated/Icon_2.svg"
        alt=""
        width={83}
        height={83}
        className="pointer-events-none absolute left-[293px] top-[360px] hidden h-[83px] w-[83px] object-contain xl:block"
      />
      <Image
        src="/images-updated/Icon_4.svg"
        alt=""
        width={32}
        height={32}
        className="pointer-events-none absolute left-[141px] top-[214px] hidden h-8 w-8 object-contain xl:block"
      />
      <div className="pointer-events-none absolute right-[30px] top-[190px] hidden h-40 w-40 xl:block">
        <Image
          src="/images-updated/Icon_3.svg"
          alt=""
          width={80}
          height={80}
          className="absolute left-10 top-10 h-20 w-20 object-contain"
        />
      </div>
      <Image
        src="/images-updated/Icon_5.svg"
        alt=""
        width={62}
        height={62}
        className="pointer-events-none absolute right-[173px] top-[82px] hidden h-[62px] w-[62px] object-contain xl:block"
      />
      <Image
        src="/images-updated/Icon_6.svg"
        alt=""
        width={48}
        height={48}
        className="pointer-events-none absolute right-[266px] top-[381px] hidden h-12 w-12 object-contain xl:block"
      />
      <div className="pointer-events-none absolute -left-[21px] top-[230px] hidden h-14 w-14 rotate-[12deg] rounded-lg bg-[#FFCB9F] xl:block" />
      <div className="pointer-events-none absolute right-[336px] top-[468px] hidden h-10 w-10 rounded-full bg-[#FFCB9F] xl:block" />
      <div className="pointer-events-none absolute left-[877px] top-[43px] hidden h-8 w-8 rounded-full border border-[#FFCB9F] xl:block" />
      <div className="pointer-events-none absolute left-[329px] top-[42px] hidden h-14 w-14 rotate-[12deg] rounded-md border border-[#FFCB9F] xl:block" />

      <div className="relative mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
        <AvatarStack
          images={avatars.map((avatar) => `/images-updated/${avatar}`)}
          size={40}
          sizes="40px"
          className="justify-center"
          imageClassName="h-10 w-10 rounded-full object-cover"
        />

        <h2
          id="final-cta-title"
          className="mt-0 h-[112px] max-w-[660px] pt-8 font-heading text-[36px] leading-10 font-extrabold tracking-[-0.9px] text-ink xl:h-[94px] xl:pt-8 xl:text-[56px] xl:leading-16 xl:tracking-[-1.4px]"
        >
          What will you learn next?
        </h2>
        <p className="mt-0 h-10 pt-4 text-[16px] leading-6 text-muted xl:h-[43px] xl:pt-4 xl:text-[18px] xl:leading-[27px]">
          Start with one course. Build from there.
        </p>
        <div className="mt-0 flex h-[157px] w-full flex-col items-center gap-3 pt-10 xl:h-[92.5px] xl:flex-row xl:justify-center xl:pt-10">
          <ButtonLink
            href="#courses"
            variant="primary"
            className="min-h-[52.5px] w-full px-7 text-[14px] leading-5 xl:w-auto"
          >
            Explore all courses
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="outline"
            className="min-h-[52.5px] w-full px-7 text-[14px] leading-5 xl:w-auto"
          >
            Join Luma
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
