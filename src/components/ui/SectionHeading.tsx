import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  titleId,
}: SectionHeadingProps) {
  return (
    <div className={`flex w-full flex-col ${className}`.trim()}>
      <p className={eyebrowClassName}>{eyebrow}</p>
      <h2 id={titleId} className={titleClassName}>
        {title}
      </h2>
      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </div>
  );
}
