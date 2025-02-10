import { Route, Routes} from "react-router-dom";
import "./App.css";
import ButtonT from "@/pages/Ui/button";
import ExampleForm from "./pages/Ui/textinput";
import Home_page from './pages/home/home_page';
//import Insurance_quote from "./pages/Motor_insurance_quote/Motor_insurance_quote";
import Motor_insurance_quote from "./pages/Motor_insurance_quote/Motor_insurance_quote";
import Motor_insurance_quote_landing from "./pages/Motor_insurance_quote/Motor_insurance_quote_landing";
import About_page from "./pages/about/about_page";
import SuperBoard_page from "./pages/about/superboard_page";
import Contact_page from "./pages/contact/contactus_page";
import Fire_Specials_Service_Landing from "./pages/services/Fire_Specials_Service_Landing/Fire_Specials_Service_Landing";
import Motor_Insurance_Service_Landing from "./pages/services/Motor_Insurance_Service_Landing/Motor_Insurance_Service_Landing";
import Burglary_Theft_Service_Landing from "./pages/services/Burglary_Theft_Service_Landing/Burglary_Theft_Service_Landing";
import Plant_Service_Landing from "./pages/services/Plant_Service_Landing/Plant_Service_Landing";
import Public_Liability_Service_Landing from "./pages/services/Public_Liability_Service_Landing/Public_Liability_Service_Landing";
import Money_Service_Landing from "./pages/services/Money_Service_Landing/Money_Service_Landing";
import Claims_Management_Service_Landing from "./pages/services/Claims_Management_Service_Landing/Claims_Management_Service_Landing ";
import Group_Personal_Insurance_Service_Landing from "./pages/services/Group_Personal_Insurance_Service_Landing/Group_Personal_Insurance_Service_Landing";
import Occupiers_Liability_Service_Landing from "./pages/services/Occupiers_Liability_Service_Landing/Occupiers_Liability_Service_Landing";
import Privacy_policy from "./pages/privacy_policy/privacy_policy";
import Claims_page from "./pages/claims/claims_page";
import Machinery_Insurance_Service_Landing from "./pages/services/Machinery_Insurance_Service_Landing/Machinery_Insurance_Service_Landing ";


function App() {
  //this is for the loader to show when the page is loading across the app
  // const [loading, setLoading] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   setLoading(true);
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [location]);

  return (
      <main>
          <>
            <Routes>
              {/* <Route path="*" element={<NotFound />} /> */}
              <Route path="/" element={<Home_page />} />
              {/* Ui */}
              <Route path="/ui/button" element={<ButtonT />} />
              <Route path="/ui/textinput" element={<ExampleForm />} />
              <Route path="/motor-insurance-quote" element={<Motor_insurance_quote_landing />} />
              <Route path="/motor-insurance-quote-form" element={<Motor_insurance_quote />} />    
              <Route path="/about" element={<About_page />} />
              <Route path="/about/superboard" element={<SuperBoard_page />} />
              <Route path="/contact" element={<Contact_page />} />
              
              <Route path="/services" element={<Motor_Insurance_Service_Landing />} />
              <Route path="/services/fire-specials-insurance" element={<Fire_Specials_Service_Landing />} />
              <Route path="/services/motor-insurance" element={<Motor_Insurance_Service_Landing />} />
              <Route path="/services/burglary-theft-insurance" element={<Burglary_Theft_Service_Landing />} />
              <Route path="/services/plant-insurance" element={<Plant_Service_Landing />} />
              <Route path="/services/public-liability-insurance" element={<Public_Liability_Service_Landing />} />
              <Route path="/services/money-insurance" element={<Money_Service_Landing />} />
              <Route path="/services/machinery-insurance" element={<Machinery_Insurance_Service_Landing />} />
              <Route path="/services/claims-management" element={<Claims_Management_Service_Landing />} />
              <Route path="/services/group-personal-insurance" element={<Group_Personal_Insurance_Service_Landing />} />
              <Route path="/services/occupiers-liability-insurance" element={<Occupiers_Liability_Service_Landing />} />
              <Route path="/privacy-policy" element={<Privacy_policy />} />
              <Route path="/claims" element={<Claims_page />} />
            </Routes>
          </>
      </main>
  );
}

export default App;