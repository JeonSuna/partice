interface labelProps {
  label: string;
}

export const StaticBtn = ({ label }: labelProps) => {
  return (
    <div>
      <button className="flex flex-col w-full px-4 py-3 items-center justify-between rounded-2xl bg-[#C0C4CD] text-center">
        {label}
      </button>
    </div>
  );
};

/*
1. background: var(--Gradient-Vertical-White_0_100, linear-gradient(180deg, rgba(252, 252, 255, 0.00) 0%, rgba(252, 252, 255, 0.80) 50%, var(--Colors-GrayScale-White, #FCFCFF) 90%));
#state=disabled: bg-[#C0C4CD]
#state=default: bg-[#0B9A4E]
#state=pressing: bg-[# 0A7456]
#state=clicked: bg-[#0B9A4E]

2.box-shadow: 0 0 4px 0 rgba(18, 18, 18, 0.12);
#state=disabled: bg-[#C0C4CD]
#state=default: bg-[#0B9A4E]
#state=pressing: bg-[# 0A7456]
#state=clicked: bg-[#0B9A4E]
 
3. 넓이 다른것 , width: 254px; 
#state=disabled: bg-[#C0C4CD]
#state=default: bg-[#0B9A4E]
#state=pressing: bg-[# 0A7456]
#state=clicked: bg-[#0B9A4E]

4. 
------------

*/
