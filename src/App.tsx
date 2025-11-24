
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { db } from "./firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from 'react';
function App() {
   const userCollectionRef = collection(db, "users")
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      console.log(data)
    }
    getUsers();
  }, [])
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
