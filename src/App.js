import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchNewsProvider from "./components/context/SearchNews";


function App() {
  return (
    <div>
      <SearchNewsProvider>
        <AppRouter />
      </SearchNewsProvider>
    </div>
  );
}

export default App;
