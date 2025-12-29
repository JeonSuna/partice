import { cva, type VariantProps } from "class-variance-authority";
export const staticBtnStyles = cva(
  "flex flex-col items-center justify-center px-4 ",
  {
    variants: {
      //textL과 textS  분기
      intent: {
        BtnS: "py-2 rounded-lg",
        BtnL: "py-3 rounded-2xl text-white ",
      },
      size: {
        lg: "w-full",
        md: "w-64",
        sm: "w-42",
      },
      color: {
        red: "border border-rd-800",
        green: " border border-gr-600",
        grey: " border border-gy-800",
      },
      /*상태 */
      lState: {
        disabled: "bg-gy-400",
        default: "bg-gr-600",
        pressing: "bg-gr-700",
        clicked: "bg-gr-600",
      },

      /** 배경 타입 */
      surface: {
        solid: "",
        gradient: "bg-gradient-white-0-100",
      },

      /** 그림자 */
      elevation: {
        none: "",
        sm: "shadow-ds100",
      },
      /** BtnS 전용 상태 (의미만) */
      sState: {
        default: "",
        pressing: "",
        clicked: "",
        disabled: "",
      },
    },

    compoundVariants: [
      /** GREEN */
      {
        color: "green",
        intent: "BtnS",
        sState: "default",
        class: "bg-white text-gr-600",
      },
      {
        color: "green",
        intent: "BtnS",
        sState: "pressing",
        class: "text bg-gr-600",
      },
      {
        color: "green",
        intent: "BtnS",
        sState: "clicked",
        class: "bg-white text-gr-600",
      },
      /** red*/
      {
        color: "red",
        intent: "BtnS",
        sState: "default",
        class: "bg-white text-rd-500",
      },
      {
        color: "red",
        intent: "BtnS",
        sState: "pressing",
        class: "text bg-rd-500",
      },
      {
        color: "red",
        intent: "BtnS",
        sState: "clicked",
        class: "bg-white text-rd-500",
      },
      /** grey*/
      {
        color: "grey",
        intent: "BtnS",
        sState: "default",
        class: "bg-white text-gy-800",
      },
      {
        color: "grey",
        intent: "BtnS",
        sState: "pressing",
        class: "text bg-gy-800",
      },
      {
        color: "grey",
        intent: "BtnS",
        sState: "clicked",
        class: "bg-white text-gy-800",
      },
    ],

    defaultVariants: {
      intent: "BtnL",
      size: "lg",
      lState: "default",
      surface: "solid",
      elevation: "none",
    },
  }
);

export type StaticBtnVariants = VariantProps<typeof staticBtnStyles>;
