// import { StaticBtn2 } from "./components/StaticBtn2";

import Button from "./components/Button";

export function App() {
  return (
    <div className="flex items-center justify-center">
      <main
        className="w-full max-w-[444px] pt-10 px-4 pb-8 bg-gray-100"
        style={{ maxWidth: "444px", minHeight: "100dvh" }}
      >
        <div className="flex gap-3 flex-wrap">
          {/* 기본 */}
          <Button size="md">btn1</Button>

          {/* text 색 덮어씀. =>tWMerge*/}
          <Button variant="grey" size="lg" className="text-red-600 px-10">
            btn2
          </Button>

          {/*cva만.. */}
          <Button variant="red" size="xl">
            btn3
          </Button>

          {/* clsx */}
          <Button disabled size="md">
            disabled
          </Button>
        </div>
      </main>
    </div>
  );
}
