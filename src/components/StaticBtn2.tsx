import { staticBtnStyles, type StaticBtnVariants } from "./button.styles";
import { cn } from "../../src/lib/utils.ts";

interface StaticBtnProps extends StaticBtnVariants {
  label: string;
  withWrapper?: boolean;
}

export const StaticBtn2 = ({
  label,
  withWrapper = false,
  ...variants
}: StaticBtnProps) => {
  const button = (
    <button className={cn(staticBtnStyles(variants))}>{label}</button>
  );

  // gradient 배경 wrapper 대응
  if (withWrapper) {
    return <div className="flex flex-col px-4 pt-2 pb-9">{button}</div>;
  }

  return button;
};
