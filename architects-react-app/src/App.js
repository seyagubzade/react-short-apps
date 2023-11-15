import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <div >
      <Header />
      <div className="w3-content w3-padding">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
