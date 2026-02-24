import { Routes, Route } from "react-router-dom";
import Page from "./components/dashboard/page";
import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";
function App() {
  return (
    <Routes>
      {/* Home Route*/}
      <Route path="/" element={<Page />} />
      {/* Static News Filters */}
      <Route path="/breakingnews" element={<Page />} />
      <Route path="trending" element={<Page />} />
      {/* Dynamic path routing */}
      <Route path="/category/:category" element={<Page />} />
      {/* Auth */}
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      {/* My News */}
      <Route path="/saved" element={<Page />} />
      <Route path="/history" element={<Page />} />
      {/* Setting Route */}
      <Route path="/profile" element={<Page />} />
      <Route path="/preferences" element={<Page />} />
      {/*Community */}
      <Route path="/community" element={<Page />} />
    </Routes>
  );
}
export default App;
