import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

const App = () => {
   return (
      <div>
         <Router>
            <Header />
            <Routes>
               <Route path="/" exact element={<Home />} />
               <Route path="/movie/:imdbID" element={<MovieDetails />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   );
};

export default App;
