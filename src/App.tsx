import { Route, Routes} from "react-router-dom";
import "./App.css";
import ButtonT from "@/pages/Ui/button";
import ExampleForm from "./pages/Ui/textinput";
import Home_page from './pages/home/home_page';
import Insurance_quote from "./pages/Insurance_quote/Insurance_quote";


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
              <Route path="/insurance-quote" element={<Insurance_quote />} />
            </Routes>
          </>
      </main>
  );
}

export default App;