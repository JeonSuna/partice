interface labelProps {
  label: string;
}

export const StaticBtn = ({ label }: labelProps) => {
  return (
    <div className=" flex flex-col px-4 pt-2 pb-9 bg-gradient-white-0-100">
      <button className="flex flex-col w-full px-4 py-3 text-rd-500 items-center justify-between rounded-2xl bg-gr-600 text-center ">
        {label}
      </button>
    </div>
  );
};
/* 



1. background: var(--Gradient-Vertical-White_0_100, linear-gradient(180deg, rgba(252, 252, 255, 0.00) 0%, rgba(252, 252, 255, 0.80) 50%, var(--Colors-GrayScale-White, #FCFCFF) 90%));
#state=disabled: bg-gy-400
#state=default: bg-gr-600
#state=pressing: bg-gr-700
#state=clicked: bg-gr-600

//백그라운드 추가된 경우
 <div className=" flex flex-col px-4 pt-2 pb-9 bg-gradient-white-0-100">
      <button className="flex flex-col w-full px-4 py-3 items-center justify-between rounded-2xl bg-gy-400 text-center">
        {label}
      </button>
    </div>


2.box-shadow: 0 0 4px 0 rgba(18, 18, 18, 0.12);
#state=disabled: bg-gy-400
#state=default: bg-gr-600
#state=pressing: bg-700
#state=clicked: bg-gr-600

<button className="flex flex-col w-full px-4 py-3 items-center justify-between rounded-2xl bg-gy-400 text-center shadow-ds100">
        {label}
      </button>


 
3. 넓이 다른것 , width: 254px; 
#state=disabled: bg-gy-400
#state=default: bg-gr-600
#state=pressing: bg-[# 0A7456]
#state=clicked: bg-gr-600

<button className="flex flex-col w-64 px-4 py-3 items-center justify-between rounded-2xl bg-gy-400 text-center">
        {label}
      </button>


------------
 icon묶음 
 4.Btn Static red 


*/
