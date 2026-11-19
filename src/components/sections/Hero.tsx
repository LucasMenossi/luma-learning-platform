import { AvatarStack } from "@/components/ui/AvatarStack";
import Image, { getImageProps } from "next/image";

export function Hero() {
  const heroAlt = "Person focused on learning at their laptop";
  const { props: desktopHeroImage } = getImageProps({
    src: "/images-updated/Image__Person_focused_on_learning_at_their_laptop_.png",
    alt: heroAlt,
    width: 500,
    height: 520,
    sizes: "(max-width: 900px) calc(100vw - 64px), (max-width: 1100px) 45vw, 500px",
    loading: "eager",
  });
  const { props: mobileHeroImage } = getImageProps({
    src: "/images-updated/Image__Person_focused_on_learning_at_their_laptop__2.png",
    alt: heroAlt,
    width: 346,
    height: 380,
    sizes: "(max-width: 760px) calc(100vw - 40px), 0px",
    loading: "eager",
  });

  return (
    <section
      className="relative min-h-[720px] overflow-hidden bg-page max-[900px]:min-h-0"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid min-h-[720px] w-[min(1120px,calc(100%-80px))] grid-cols-[560px_500px] items-center gap-x-[60px] max-[1100px]:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] max-[1100px]:gap-x-10 max-[1100px]:w-[calc(100%-80px)] max-[900px]:flex max-[900px]:min-h-0 max-[900px]:w-[calc(100%-64px)] max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-9 max-[900px]:py-12 max-[760px]:w-[calc(100%-40px)] max-[760px]:gap-10 max-[760px]:py-[60px]">
        <div className="flex min-w-0 flex-col items-start max-[900px]:order-2">
          <p className="relative top-2 mb-4 text-[12px] leading-4 font-bold tracking-[1.2px] text-primary max-[760px]:top-0 max-[760px]:mb-0 max-[760px]:text-[12px]">
            LEARN AT YOUR OWN PACE
          </p>
          <h1
            className="relative top-2 m-0 max-w-[560px] font-heading text-[64px] leading-[1.09375] font-bold tracking-[-1.6px] text-ink max-[1100px]:text-[clamp(44px,5.2vw,60px)] max-[760px]:top-0 max-[760px]:max-w-[362px] max-[760px]:text-[40px] max-[760px]:leading-[44px] max-[760px]:tracking-[-1px] max-[760px]:mt-5 max-[380px]:text-[36px] max-[380px]:leading-10"
            id="hero-title"
          >
            Build skills that actually move you forward.
          </h1>
          <p className="mt-8 max-w-[480px] text-[18px] leading-7 text-muted max-[760px]:mt-6 max-[760px]:min-h-[104px] max-[760px]:max-w-[362px] max-[760px]:text-base max-[760px]:leading-[26px]">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>
          <div className="mt-8 flex items-center gap-3 max-[760px]:mt-0 max-[760px]:h-[160px] max-[760px]:w-full max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-3 max-[760px]:pt-8">
            <a
              className="inline-flex min-h-[54px] min-w-[167px] items-center justify-center rounded-lg border border-primary bg-primary px-6 text-[15px] leading-[22px] font-semibold text-white transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#2448df] hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary max-[760px]:w-full max-[760px]:min-h-[52px]"
              href="#courses"
            >
              Explore courses
            </a>
            <a
              className="inline-flex min-h-[54px] min-w-[174px] items-center justify-center rounded-lg border border-border bg-white px-6 text-[15px] leading-[22px] font-semibold text-ink transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#eeeff5] hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary max-[760px]:w-full max-[760px]:min-h-[54px]"
              href="#how-it-works"
            >
              See how it works
            </a>
          </div>
          <div className="relative -top-[15px] mt-7 flex min-h-16 items-center gap-3 text-[14px] leading-5 text-muted max-[760px]:top-0 max-[760px]:mt-1 max-[760px]:h-16 max-[760px]:w-full max-[760px]:justify-center">
            <AvatarStack
              images={[
                "/images-updated/Image.png",
                "/images-updated/Image_2.png",
                "/images-updated/Image_3.png",
              ]}
              size={32}
              imageClassName="h-8 w-8 rounded-full object-cover"
              borderClassName="border-2 border-page"
            />
            <span>
              <strong className="font-semibold text-ink">
                Trusted by 24,000+
              </strong>{" "}
              learners
            </span>
          </div>
        </div>

        <div
          className="relative h-[520px] w-[500px] max-[1100px]:h-[500px] max-[1100px]:w-full max-[900px]:order-1 max-[900px]:h-[420px] max-[900px]:w-full max-[760px]:h-[380px]"
        >
          <div className="pointer-events-none absolute top-6 right-[-39px] z-0 h-[468px] w-[89px] rounded-2xl bg-peach max-[1100px]:right-[-18px] max-[900px]:right-auto max-[900px]:left-[min(100px,18%)] max-[900px]:h-[382px] max-[900px]:w-[min(500px,calc(100%-80px))] max-[760px]:left-[100.5px] max-[760px]:h-[342px] max-[760px]:w-[min(271.5px,calc(100%-90px))]" />
          <div className="pointer-events-none absolute bottom-[11px] left-[-45px] z-0 h-[106px] w-[106px] rounded-full bg-lavender max-[900px]:bottom-[150px] max-[900px]:left-[-12px] max-[900px]:h-20 max-[900px]:w-20 max-[760px]:bottom-[136px] max-[760px]:left-[-10px] max-[760px]:h-16 max-[760px]:w-16" />

          <div className="absolute inset-0 z-[1] overflow-hidden rounded-3xl max-[900px]:top-0 max-[900px]:left-2 max-[900px]:h-[420px] max-[900px]:w-[calc(100%-16px)] max-[760px]:h-[380px]">
            <picture className="block h-full w-full">
              <source
                media="(max-width: 760px)"
                srcSet={mobileHeroImage.srcSet}
                sizes={mobileHeroImage.sizes}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                {...desktopHeroImage}
                alt={heroAlt}
                className="h-full w-full object-cover object-center max-[900px]:object-top"
                fetchPriority="high"
              />
            </picture>
          </div>

          <div className="absolute top-4 left-[-22px] z-[2] flex h-14 w-[213px] items-center gap-3 rounded-xl bg-white px-4 py-3 text-ink shadow-[0_4px_24px_rgb(0_0_0_/_10%)] max-[900px]:top-[6px] max-[900px]:left-0">
            <span
              className="grid h-8 w-[42px] shrink-0 place-items-center rounded-lg bg-[#eef1ff] text-[15px] leading-[18px] font-bold text-primary"
              aria-hidden="true"
            >
              120+
            </span>
            <span className="whitespace-nowrap text-[14px] leading-5 text-ink">
              expert-led courses
            </span>
          </div>

          <div className="absolute right-[-57px] bottom-[35.5px] z-[2] flex h-12 w-[209px] items-center gap-2 rounded-xl bg-white px-4 py-3 text-[12px] whitespace-nowrap text-ink shadow-[0_4px_24px_rgb(0_0_0_/_10%)] max-[1100px]:right-[-18px] max-[900px]:top-[330px] max-[900px]:right-[-10px] max-[900px]:bottom-auto max-[760px]:top-[296.5px] max-[760px]:right-[-11px] max-[380px]:w-[196px] max-[380px]:px-3">
            <span
              role="img"
              aria-label="5 out of 5 stars"
              className="text-[13px] tracking-[1px] text-[#f5a623]"
            >
              <Image
                src="/images-updated/Container.svg"
                alt=""
                width={78}
                height={14}
                className="h-[14px] w-[78px]"
              />
            </span>
            <span>4.9 avg rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
