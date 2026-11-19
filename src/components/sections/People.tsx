import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const mobileTiles = [
  {
    key: "74b",
    src: "/images-updated/Image_21.png",
    left: 22,
    top: 62.25,
    width: 72,
    height: 96,
  },
  {
    key: "349",
    src: "/images-updated/Image_22.png",
    left: 0,
    top: 166.25,
    width: 94,
    height: 129,
  },
  {
    key: "18c",
    src: "/images-updated/Image_23.png",
    left: 106,
    top: 0,
    width: 72,
    height: 106,
  },
  {
    key: "e31",
    src: "/images-updated/Image_24.png",
    left: 106,
    top: 114,
    width: 72,
    height: 107.5,
  },
  {
    key: "ccc",
    src: "/images-updated/Image_25.png",
    left: 106,
    top: 229.5,
    width: 72,
    height: 80,
  },
  {
    key: "34d",
    src: "/images-updated/Image_26.png",
    left: 190,
    top: 13,
    width: 72,
    height: 85.5,
  },
  {
    key: "875",
    src: "/images-updated/Image_27.png",
    left: 190,
    top: 106.5,
    width: 72,
    height: 86,
  },
  {
    key: "2bb",
    src: "/images-updated/Image_28.png",
    left: 190,
    top: 200.5,
    width: 72,
    height: 96,
  },
  {
    key: "171",
    src: "/images-updated/Image_29.png",
    left: 274,
    top: 45.75,
    width: 88,
    height: 127.5,
  },
  {
    key: "428",
    src: "/images-updated/Image_30.png",
    left: 274,
    top: 181.25,
    width: 72,
    height: 82.5,
  },
];

const desktopTiles = [
  {
    key: "74b",
    src: "/images-updated/Image_4.png",
    left: 35.31,
    top: 106.33,
    width: 102.72,
    height: 154.08,
  },
  {
    key: "349",
    src: "/images-updated/Image_5.png",
    left: 0,
    top: 273.26,
    width: 138.03,
    height: 207.05,
  },
  {
    key: "18c",
    src: "/images-updated/Image_6.png",
    left: 154.03,
    top: 25.68,
    width: 102.72,
    height: 170.13,
  },
  {
    key: "e31",
    src: "/images-updated/Image_7.png",
    left: 154.03,
    top: 208.65,
    width: 102.72,
    height: 172.54,
  },
  {
    key: "ccc",
    src: "/images-updated/Image_8.png",
    left: 154.03,
    top: 394.04,
    width: 102.72,
    height: 128.4,
  },
  {
    key: "34d",
    src: "/images-updated/Image_9.png",
    left: 272.76,
    top: 33.71,
    width: 102.72,
    height: 137.23,
  },
  {
    key: "875",
    src: "/images-updated/Image_10.png",
    left: 272.76,
    top: 183.78,
    width: 102.72,
    height: 138.03,
  },
  {
    key: "2bb",
    src: "/images-updated/Image_11.png",
    left: 272.76,
    top: 334.65,
    width: 102.72,
    height: 154.08,
  },
  {
    key: "171",
    src: "/images-updated/Image_12.png",
    left: 391.48,
    top: 86.27,
    width: 128.4,
    height: 204.64,
  },
  {
    key: "428",
    src: "/images-updated/Image_13.png",
    left: 391.48,
    top: 303.75,
    width: 102.72,
    height: 132.42,
  },
];

function Tile({
  tile,
}: {
  tile: (typeof mobileTiles)[number] | (typeof desktopTiles)[number];
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute overflow-hidden rounded-[5px]"
      style={{
        left: tile.left,
        top: tile.top,
        width: tile.width,
        height: tile.height,
      }}
    >
      <Image
        src={tile.src}
        alt=""
        fill
        sizes="(max-width: 767px) 94px, 138px"
        className="object-cover"
      />
    </div>
  );
}

export function People() {
  return (
    <section
      id="community"
      aria-labelledby="people-title"
      className="bg-page px-5 py-[60px] md:px-10 md:py-20 xl:px-20 xl:pt-[100px] xl:pb-[98px]"
    >
      <Container className="flex flex-col gap-8 xl:grid xl:grid-cols-[530px_530px] xl:items-center xl:gap-[60px]">
        <div className="flex min-h-0 flex-col items-start">
          <SectionHeading
            eyebrow="The people"
            title={<>Meet international students &amp; teachers</>}
            description="Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer."
            titleId="people-title"
            eyebrowClassName="text-xs leading-4 font-semibold tracking-[1.44px] text-primary uppercase"
            titleClassName="mt-2 max-w-[530px] font-heading text-[32px] leading-9 font-extrabold tracking-[-0.8px] text-ink xl:mt-2 xl:text-[48px] xl:leading-[56px] xl:tracking-[-1.2px]"
            descriptionClassName="mt-6 max-w-[530px] font-sans text-[16px] leading-6 font-normal text-muted xl:mt-8 xl:text-[18px] xl:leading-7"
          />
          <ButtonLink
            href="#contact"
            variant="secondary"
            className="mt-6 min-h-[54px] px-[29px] text-[14px] leading-6 xl:mt-8"
          >
            Explore teachers and students
          </ButtonLink>
        </div>

        <div
          role="img"
          aria-label="A collage of international students and teachers learning and collaborating"
          className="relative mx-auto h-[309.5px] w-full max-w-[362px] xl:h-[522.44px] xl:max-w-[530px]"
        >
          <div className="absolute left-4 top-[-10px] h-[330px] w-[330px] rounded-full bg-[#E8E4FF] xl:left-[15px] xl:top-[11.31px] xl:h-[500px] xl:w-[500px]" />
          <div className="absolute inset-0 xl:hidden">
            {mobileTiles.map((tile) => (
              <Tile key={tile.key} tile={tile} />
            ))}
          </div>
          <div className="absolute inset-0 hidden xl:block">
            {desktopTiles.map((tile) => (
              <Tile key={tile.key} tile={tile} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
