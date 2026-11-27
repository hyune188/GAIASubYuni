// import UserManagement from "./components/UserManagement"
// import NewsAggregator from "./components/NewsAggregator"
import WeatherApp from "./components/WeatherApp";

function App () {
  return (
    <div className="user-management">
      {/* <UserManagement></UserManagement> */}
      {/* <NewsAggregator></NewsAggregator> */}
      <WeatherApp/>
    </div>
  );
}

export default App;

// curl -H "Authorization: Bearer nquFDXtickbXItdIOUevnekPd-q-HliGNbEvz6j-bWsDdB_A" "https://api.currentsapi.services/v1/latest-news?language=en"