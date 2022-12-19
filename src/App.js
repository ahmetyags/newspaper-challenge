import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchNewsProvider from "./components/context/SearchNews";
import "./App.css";
import SearchWordProvider from "./components/context/SearchWord";

function App() {
  return (
    <div className="app-style">
      <SearchNewsProvider>
        <SearchWordProvider>
          <AppRouter />
        </SearchWordProvider>
      </SearchNewsProvider>
    </div>
  );
}

export default App;
