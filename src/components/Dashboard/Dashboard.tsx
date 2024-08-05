import { AuthLayout } from "../Layout/layout";
import StackBarChart from "../Chart/stack-bar";
import SelectMonth from "../SelectMonth";
import PastResultChat from "../Chart/PastResultChat";
import Card from "../Ui/Card";
import { useState } from "react";
import GroupCard from "../Ui/GroupCard";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import {
  BsCalendar2Date,
  BsCaretDownFill,
  BsCaretUpFill,
} from "react-icons/bs";
import "flatpickr/dist/themes/airbnb.css";
import Flatpickr from "react-flatpickr";
import moment from "moment-timezone";
import { RootState } from "@/context/store/rootReducer";
import { useSelector } from "react-redux";

const timeZone = "Africa/Lagos";
const getGreeting = (timeZone: string) => {
  const now = moment().tz(timeZone);
  const hour = now.hour();

  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};
const today = new Date();
const fiveDaysAhead = new Date();
fiveDaysAhead.setDate(today.getDate() + 5);

const Dashboard = () => {
  const userdata = useSelector((state: RootState) => state.auth?.user);
  const username = userdata?.username;
  const [activeTab, setActiveTab] = useState("goals");
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    today,
    fiveDaysAhead,
  ]);

  const handleDateChange = (dates: Date[]) => {
    if (dates.length === 2) {
      setDateRange([dates[0], dates[1]]);
    }
  };

  // Function to handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "goals":
        return <StackBarChart />;
      case "corner":
        return <StackBarChart />;
      case "jobs":
        return <StackBarChart />;
      default:
        return <StackBarChart />;
    }
  };

  const formatDateRange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    if (!start || !end) return "Select a date range";

    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };

    return `${start.toLocaleDateString(
      "en-US",
      options
    )} - ${end.toLocaleDateString("en-US", options)}`;
  };

  return (
    <AuthLayout>
      <div className="p-4">
        <div className="flex md:flex-row gap-5 md:gap-0 flex-col justify-between mb-5">
          <div className=" space-y-2">
            <div className=" font-bold text-xl  md:text-3xl">{`${getGreeting(
              timeZone
            )}, ${username}`}</div>
            <p className="whitespace-normal break-words text-xs md:text-base">
              {dateRange[0] && dateRange[1]
                ? `Here is your Predictivo report from ${formatDateRange(
                    dateRange
                  )}.`
                : "Select a date range."}
            </p>
          </div>
          <div
            className="bg-white h-fit py-4 cursor-pointer scale-90 hover:scale-100 flex items-center justify-center px-3  md:w-fit shadow-lg"
     
          >
            <Flatpickr
              className=" outline-none cursor-pointer "
              options={{
                mode: "range",
                dateFormat: "M  j ", // Short month format
                disableMobile: false,
              }}
              value={dateRange}
              onChange={handleDateChange}
            />
            <BsCalendar2Date />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-8 col-span-12 space-y-5">
            <Card>
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 col-span-1 gap-3">
                <GroupCard />
              </div>
            </Card>
            <Card
              title="Advanced Features"
              subtitle="Showing Jobstatistic Jul 19-25"
              headerslot={<SelectMonth />}
            >
              <div className="flex md:flex-row flex-col items-start gap-5 w-[100%]">
                <div className="relative md:w-[70%] ">
                  {/* Tab headers */}
                  <div className="flex border-b border-gray-200 mb-4">
                    <button
                      className={`py-2 px-4 text-sm font-medium ${
                        activeTab === "goals"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabClick("goals")}
                    >
                      Goals Stats
                    </button>
                    <button
                      className={`py-2 px-4 text-sm font-medium ${
                        activeTab === "corner"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabClick("corner")}
                    >
                      Corner Stats
                    </button>
                    <button
                      className={`py-2 px-4 text-sm font-medium ${
                        activeTab === "jobs"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleTabClick("jobs")}
                    >
                      Jobs Applied
                    </button>
                  </div>

                  {/* Tab content */}
                  <div className="p-4 bg-white border border-gray-200 rounded-lg">
                    {renderContent()}
                  </div>
                </div>

                <div className=" space-y-3 md:w-[30%] w-full mt-10 ">
                  <Card
                    className="border"
                    title="Total Matches"
                    titleClass="text-base font-bold "
                    headerslotClass="bg-primary-3 p-3 rounded-full text-white font-bold"
                    headerslot={<IoEyeOutline />}
                  >
                    <div className="flex flex-col justify-start items-start">
                      <div className=" font-bold text-2xl">0</div>
                      <div className=" flex items-center gap-3">
                        <span className="text-base">This Week </span>
                        <div className=" flex items-center gap-1 text-green-500">
                          <span>6.4%</span>
                          <span>
                            <BsCaretUpFill />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card
                    className="border"
                    title="Strategies"
                    titleClass="text-base font-bold "
                    headerslotClass="bg-primary-2 p-3 rounded-full text-white font-bold"
                    headerslot={<FaRegCalendarCheck />}
                  >
                    <div className="flex flex-col justify-start items-start">
                      <div className=" font-bold text-2xl">0</div>
                      <div className=" flex items-center gap-3">
                        <span className="text-base">This Week </span>
                        <div className=" flex items-center gap-1 text-red-500">
                          <span>6.4%</span>
                          <span>
                            <BsCaretDownFill />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-4 col-span-12 space-y-5">
            <Card title="Corner Statistic">
              <div className="flex items-end">
                <span className="text-7xl font-bold">0</span>
                <span className="text-lg text-gray-500">Arsenal</span>
              </div>
            </Card>
            <Card title="Past Results">
              <div>
                <div className="flex items-end">
                  <span className="text-6xl font-bold">0</span>
                  <span className="text-lg text-gray-500">Matches</span>
                </div>
                <PastResultChat />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
