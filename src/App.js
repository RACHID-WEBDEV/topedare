import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/global/Header";

import About from "./pages/About";
import Home from "./pages/Home";

export const NotFound = () => (
  <div className="m-20 text-center text-6xl text-gray-800">
    <h1>Page Coming Soon

    </h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
          //   <Route path="teams" element={<Teams />}>
          //   <Route path=":teamId" element={<Team />} />
          //  <Route path="new" element={<NewTeamForm />} />
          //     <Route index element={<LeagueStandings />} />
          //   </Route> 