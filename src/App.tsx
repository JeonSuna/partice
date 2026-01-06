// import { StaticBtn2 } from "./components/StaticBtn2";

import { Effect } from "./Effect";
import { Ref } from "./Ref";
import { State } from "./State";

// import Button from "./components/Button";

export function App() {
  return (
    <div className="flex items-center justify-center">
      <main
        className="w-full max-w-[444px] pt-10 px-4 pb-8 bg-gray-100"
        style={{ maxWidth: "444px", minHeight: "100dvh" }}
      >
        <div className="flex gap-3 flex-wrap">
          {/* 기본 */}
          {/* <Button size="md">btn1</Button> */}

          {/*cva만.. */}
          {/* <Button variant="red" size="xl">
            btn3
          </Button> */}

          {/* <State /> */}
          {/* <Effect /> */}
          <Ref />
        </div>
      </main>
    </div>
  );
}
