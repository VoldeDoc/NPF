import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const statistics = [
  {
    title: "All Time Strategies",
    count: "76",
    bg: "bg-[#0C21C1]",
    text: "text-primary-500",
  },

  {
    title: "Live Matches today",
    count: "3",
    bg: "bg-[#97060B]",
    text: "text-primary-500",
  },
  {
    title: "Picks Today",
    count: "28867",
    bg: "bg-[#1F1F21]",
    text: "text-primary-500",
  },
];
const GroupCard = () => {
  return (
    <>
      {statistics.map((item, i) => (
        <div
          key={i}
          className={`${item.bg} flex justify-between items-center text-white rounded-md p-4 `}
        >
          <span className="block mb-6 text-sm text-slate-900 dark:text-white font-medium">
            {item.title}
          </span>
          <span className="block mb- text-2xl text-slate-900 dark:text-white font-medium mb-6">
            {item.count}
          </span>
          <div className="flex space-x-2 rtl:space-x-reverse">
            <div className={` flex-none text-xl  ${item.text} `}>
              <ArrowRightCircleIcon />
            </div>
            <div className="flex-1 text-sm"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GroupCard;
