import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Note the use of BrowserRouter as Router

import Home from './routes/Home'

function App() {
  return (
    <div>
      <Router> {/* Use the Router component to wrap your Routes */}
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

