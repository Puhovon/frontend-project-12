import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import LogInForm from './Forms/LogInForm';
import SignupForm from './Forms/SignupForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInForm />} />
        <Route path="login" element={<LogInForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;