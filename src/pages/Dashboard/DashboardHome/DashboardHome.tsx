import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { baseUrl } from "@/services/axios-client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
/* import OverviewCard from "@/components/OverviewCard";
import StatsCard from "@/components/StatsCard";
import TransactionTable from "@/components/TransactionTable"; */

const OverviewCard = ({ title, policies, color, textColor, buttonDesc, onClick }: {title: any, policies:any, color:any, textColor?:any, buttonDesc?:string, onClick?:any}) => (
    <div className={`relative p-4 text-white ${color}`}>
        <div className="flex items-center justify-between">
            <img src="/assets/images/fire-02.svg" alt="fire and special perils" className="w-10 h-10" />
            <div className={`text-center w-fit font-semibold`}>
                <h2 className="leading-3">{policies}</h2>
                <p className="" >Plan(s)</p>
            </div>
        </div>
        <p className="text-[#D3CDCD] text-xs mb-0.5" >3154770389</p>
        <h3 className={`text-lg font-semibold mb-1.5 ${textColor}`}>{title}</h3>
        <div className="mb-5">
            <button
                onClick={onClick}
                className="text-[#000000] bg-[#BBBFBD] text-[10px] px-2 py-0.5" >
                Buy New {buttonDesc}
            </button>
        </div>

        <div className="py-2.5 px-3 border-t border-t-[#D3CDCD] -mx-4" >
            <button className="text-sm">
                {`View more details here >>>>>`}
            </button>
        </div>
    </div>
);

const StatsCard = ({ title, value, icon }: {title:any,value:any,icon:any}) => (
  <div className="p-4 bg-white border border-[#D6DDEB] flex items-center space-x-4">
        {/* <span className="text-2xl">{icon}</span> */}
        <img src={icon} alt="" className="w-[80px] h-[80px]" />
    <div>
      <h4 className="font-semibold text-[#7C8493]">{title}</h4>
      <p className="">{value}</p>
    </div>
  </div>
);

/* const TransactionTable = () => (
  <div className="bg-white p-4 rounded-lg shadow overflow-x-scroll">
    <h3 className="text-lg font-semibold mb-4">Recent Online Transactions</h3>
    <table className="w-full text-left border-collapse overflow-x-scroll">
      <thead>
        <tr className="border-b">
          <th className="p-2">Date</th>
          <th className="p-2">Subsidiary</th>
          <th className="p-2">Activity</th>
          <th className="p-2">Amount (₦)</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-2">06 Feb, 2025</td>
          <td className="p-2">Motor Insurance</td>
          <td className="p-2">Premium Payment Travel Insurance</td>
          <td className="p-2">500,000.00</td>
          <td className="p-2 text-green-600">Successful</td>
        </tr>
      </tbody>
    </table>
  </div>
); */



const TransactionTable = ({ transactions }:{transactions:any}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow overflow-x-scroll">
      <h3 className="text-lg font-semibold mb-4">Recent Online Transactions</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Date</th>
            <th className="p-2">Subsidiary</th>
            <th className="p-2">Activity</th>
            <th className="p-2">Amount (₦)</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction:any) => (
            <tr key={transaction.id} className="border-b">
              <td className="p-2">
                {format(new Date(transaction.payment.created_at), "dd MMM, yyyy")}
              </td>
              <td className="p-2">{transaction.sub_category}</td>
              <td className="p-2 capitalize">{transaction.insurance_package}</td>
              <td className="p-2">
                {parseFloat(transaction.payment.amount).toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                })}
              </td>
              <td
                className={`py-2 flex items-center gap-1 lg:gap-2 ${
                  transaction.payment.status === "successful"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {transaction.payment.status.charAt(0).toUpperCase() +
                  transaction.payment.status.slice(1)}
                
                {
                  transaction.payment.status == "pending" && (
                    //navigate to motor-insurance-quote-form to reverify payemnt
                    <Link
                      className="p-1 bg-blue-500 block text-white text-sm rounded"
                      to={`/motor-insurance-quote-form?reference=${transaction.payment.reference}`} >
                      Reverify Payment
                    </Link>
                  )
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default function DashboardHomePage() {

    const userData = JSON.parse(sessionStorage.getItem("userData") || "{}");
    const token = sessionStorage.getItem("authToken");
    //console.log(token)
    //Fetch the transaction history from the API
    const [transactionHistory, setTransactionHistory] = useState([]);
    useEffect(() => {

        const fetchTransactionHistory = async () => {
            try {
                const response = await fetch(`${baseUrl}/payments/${userData.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                        "accept": "application/json",
                    },
                });
                //setTransactionHistory(response.data);
                const result = await response.json();
                console.log(result);

                if (response.ok) {
                    setTransactionHistory(result.payments.filter((item:any) => item.payment != null && item.payment));
                }
                //setTransactionHistory(result.data);
            } catch (error) {
                console.error('Error fetching transaction history:', error);
            }
        }

        fetchTransactionHistory();
    },[])

    const navigate = useNavigate();
    const handleBuyMotorInsurance = () => {
        // Remove vehicleData and documentData from session storage so you can add new vehicle
        sessionStorage.removeItem("vehicleData");
        sessionStorage.removeItem("documentData");
        // Navigate to motor insurance quote landing page
        navigate("/motor-insurance-quote");
    }
    return (
        <DashboardLayout>
            <div className="p-6 space-y-6">
                <div className="">
                    <h2 className="text-2xl font-semibold text-[#374557]">Overview</h2>
                    <p className="text-[#374557] " >Find all your updates here</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <OverviewCard
                        title="No Motor Insurance"
                        policies={0}
                        color="bg-[#AFB50F]"
                        textColor={"text-[#000000]"}
                        buttonDesc="Motor Insurance"
                        onClick={handleBuyMotorInsurance}
                    />

                    {/* Fire and specials with a different structure */}
                    <div className={`relative p-4 text-white bg-[#095A39]`}>
                        <div className="flex items-center justify-between">
                            <img src="/assets/images/fire-02.svg" alt="fire and special perils" className="w-10 h-10" />
                            <div className="text-center w-fit font-semibold">
                                <h2 className="leading-3">2</h2>
                                <p className="" >Policies</p>
                            </div>
                        </div>
                        <p className="text-[#D3CDCD] text-xs mb-0.5" >3154770389</p>
                        <h3 className="text-lg font-semibold mb-1.5">Fire & Special Perils</h3>
                        <div className="mb-5">
                            <p className="text-xs">Quick Access</p>
                        </div>

                        <div className="py-2.5 px-3 border-t border-t-[#D3CDCD] -mx-4" >
                            <button className="text-sm">
                                {`View more details here >>>>>`}
                            </button>
                        </div>
                    </div>
                    
                    <OverviewCard
                        title="Occupiers Liability"
                        policies={0}
                        color="bg-[#3C8725]"
                        buttonDesc="Occupiers Liability Policy"
                    />
                    <OverviewCard
                        title="Burglary/Theft"
                        policies={0}
                        color="bg-[#141B34]"
                        buttonDesc="Burglary/Theft Policy"
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                    <StatsCard title="Upcoming Renewal" value={1} /* icon="📅" */ icon="/assets/images/rectangle.svg" />
                    <StatsCard title="Total Insurance" value={1} /* icon="📊" */ icon="/assets/images/rectangle-2.svg" />
                    <StatsCard title="Expiry Date" value={356} /* icon="⏳" */ icon="/assets/images/rectangle.svg" />
                    <StatsCard title="Total Passed" value={1} /* icon="✅" */ icon="/assets/images/rectangle-2.svg" />
                </div>

                <TransactionTable transactions={transactionHistory} />
            </div>
        </DashboardLayout>
    );
}
