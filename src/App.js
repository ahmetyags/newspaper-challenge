import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchNewsProvider from "./components/context/SearchNews";
import "./App.css";

function App() {
  return (
    <div className="app-style">
      <SearchNewsProvider>
        <AppRouter />
      </SearchNewsProvider>
    </div>
  );
}

export default App;
