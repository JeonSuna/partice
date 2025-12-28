import { StaticBtn } from "./components/staticBtn";
import { StaticBtn2 } from "./components/StaticBtn2";

export function App() {
  return (
    <div className="flex items-center justify-center">
      <main
        className="w-full max-w-[444px] pt-10 px-4 pb-8 bg-gray-100"
        style={{ maxWidth: "444px", minHeight: "100dvh" }}
      >
        <StaticBtn2 label="Btn" sState="default" surface="gradient" />
        {/* <StaticBtn label="Btn" /> */}
      </main>
    </div>
  );
}
