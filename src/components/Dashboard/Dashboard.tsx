import { AuthLayout } from "../Layout/layout";
import StackBarChart from "../Chart/stack-bar";
import SelectMonth from "../SelectMonth";
import PastResultChat from "../Chart/PastResultChat";
import Card from "../Ui/Card";
import { useState } from "react";
import GroupCard from "../Ui/GroupCard";

const Dashboard = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("goals");

  // Function to handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "goals":
        return <StackBarChart />;
      case "corner":
        return <StackBarChart />; // Replace with your actual component for Corner Stats
      case "jobs":
        return <StackBarChart />; // Replace with your actual component for Jobs Applied
      default:
        return <StackBarChart />;
    }
  };

  return (
    <AuthLayout>
      <div className="p-4">
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
              <div className="relative">
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
            </Card>
          </div>
          <div className="lg:col-span-4 col-span-12 space-y-5">
            <Card title="Corner Statistic">
              <div className="flex items-end">
                <span className="text-7xl font-bold">12</span>
                <span className="text-lg text-gray-500">Arsenal</span>
              </div>
            </Card>
            <Card title="Past Results">
              <div>
                <div className="flex items-end">
                  <span className="text-6xl font-bold">67</span>
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
