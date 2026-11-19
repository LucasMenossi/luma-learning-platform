import Image from "next/image";
import { Container } from "@/components/ui/Container";

type ContactIconType = "message" | "clock";

const contactCards = [
  { label: "Email", value: "contact@luma.com", icon: "message" },
  {
    label: "Response Time",
    value: "Up to 24 hours on business days",
    icon: "clock",
  },
] satisfies Array<{ label: string; value: string; icon: ContactIconType }>;

function ContactIcon({ icon }: { icon: ContactIconType }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#EEF1FF] text-primary">
      {icon === "message" ? (
        <Image
          src="/images-updated/Icon.svg"
          alt=""
          width={24}
          height={24}
          className="h-6 w-6"
        />
      ) : (
        <Image
          src="/images-updated/Icon_Box.svg"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10"
        />
      )}
    </span>
  );
}

const inputClass =
  "mt-2 h-11 w-full rounded-md border border-[#E7E7EC] bg-[#F9F8F3] px-3 text-[12px] leading-5 text-ink outline-none placeholder:text-[#9E9FAA] focus:border-primary focus:ring-2 focus:ring-primary/15 md:h-12 md:text-[14px]";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-white px-5 py-[60px] md:px-10 md:py-20 xl:px-20 xl:pt-[100px] xl:pb-[101px]"
    >
      <Container className="grid grid-cols-1 gap-10 xl:grid-cols-[480px_540px] xl:items-center xl:gap-[100px]">
        <div className="flex flex-col">
          <p className="text-xs leading-4 font-semibold uppercase tracking-[1.1px] text-primary">
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-4 font-heading text-[32px] leading-10 font-extrabold tracking-[-0.8px] text-ink md:text-[48px] md:leading-[56px]"
          >
            Get in touch
          </h2>
          <p className="mt-4 max-w-[480px] text-[14px] leading-[22px] text-muted md:text-[18px] md:leading-7">
            Have a question? We’re here to help. Whether you’re looking for the
            right course, learning with your team or interested in teaching with
            Luma, we’d love to hear from you.
          </p>

          <div className="mt-8 flex flex-col gap-4 md:mt-[38px]">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="flex min-h-[82px] items-center gap-4 rounded-lg bg-page px-4 py-4 md:min-h-[92px] md:px-5"
              >
                <ContactIcon icon={card.icon} />
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-[12px] leading-6 font-semibold text-muted md:text-[14px]">
                    {card.label}
                  </span>
                  {card.label === "Email" ? (
                    <a
                      href="mailto:contact@luma.com"
                      className="text-[12px] leading-6 font-medium text-primary transition-colors duration-200 hover:text-[#2448df] hover:underline hover:underline-offset-4 md:text-[14px]"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <span className="text-[12px] leading-6 text-muted md:text-[14px]">
                      {card.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white px-4 py-5 shadow-[0_8px_28px_rgb(23_27_44_/_5%)] xl:px-10 xl:py-[37px]">
          <div className="min-h-16">
            <h3 className="font-sans text-[18px] leading-[26px] font-semibold text-ink md:text-[20px] md:leading-7">
              Contact us
            </h3>
            <p className="mt-1 text-[12px] leading-6 text-muted md:text-[14px]">
              Fill out the fields and we will get in touch.
            </p>
          </div>

          <form
            className="mt-5 flex flex-col gap-5 md:mt-[24px] md:gap-6"
            action="mailto:contact@luma.com"
            method="post"
            encType="text/plain"
          >
            <div className="flex flex-col gap-4 md:gap-[18px]">
              <label className="block text-[12px] leading-6 font-semibold text-ink md:text-[14px]">
                Full name
                <input
                  className={inputClass}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="block text-[12px] leading-6 font-semibold text-ink md:text-[14px]">
                Email
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="block text-[12px] leading-6 font-semibold text-ink md:text-[14px]">
                Your question
                <textarea
                  className="mt-2 h-[92px] w-full resize-none rounded-md border border-[#E7E7EC] bg-[#F9F8F3] px-3 py-3 text-[12px] leading-5 text-ink outline-none placeholder:text-[#9E9FAA] focus:border-primary focus:ring-2 focus:ring-primary/15 md:h-[112px] md:text-[14px]"
                  name="question"
                  placeholder="Tell us how we can help..."
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-primary px-5 text-[12px] leading-5 font-semibold text-white transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#2448df] hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 md:min-h-[52px] focus-visible:outline-offset-4 focus-visible:outline-primary md:text-[14px] cursor-pointer"
            >
              Send message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
