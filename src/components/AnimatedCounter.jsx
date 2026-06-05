import { counterItems } from "../constants/index.js";
import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;

const AnimatedCounter = () => {
  return (
    <div className="padding-x-lg xl:mt-0 mt-30" id="counter">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex-col justify-center">
            <div
              key={item.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AnimatedCounter;
