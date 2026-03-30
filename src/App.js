import './App.css';
import { UserProvider } from './context/UserContext';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <UsersPage />
      </UserProvider>
    </div>
  );
}

export default App;