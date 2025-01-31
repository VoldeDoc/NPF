import { Route, Routes} from "react-router-dom";
import "./App.css";
import ButtonT from "@/pages/Ui/button";
import ExampleForm from "./pages/Ui/textinput";
import Home_page from './pages/home/home_page';
//import Insurance_quote from "./pages/Motor_insurance_quote/Motor_insurance_quote";
import Motor_insurance_quote from "./pages/Motor_insurance_quote/Motor_insurance_quote";
import Motor_insurance_quote_landing from "./pages/Motor_insurance_quote/Motor_insurance_quote_landing";
//import About_page from "./pages/about/about_page";
import SuperBoard_page from "./pages/about/superboard_page";


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
              {/* <Route path="/about" element={<About_page />} /> */}
              <Route path="/about/superboard" element={<SuperBoard_page />} />
            </Routes>
          </>
      </main>
  );
}

export default App;