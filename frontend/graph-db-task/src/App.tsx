import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./provider";
import { Settings } from "./component/settings/settings";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Define your routes here */}
          <Route
            path="/settings"
            element={
              <>
                <Settings />
              </>
            }
          />
          <Route path="/data-upload" element={<></>} />
          {/* Add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
