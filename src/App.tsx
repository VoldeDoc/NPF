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
            </Routes>
          </>
      </main>
  );
}

export default App;