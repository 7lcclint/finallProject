import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/MainPage/Home.jsx';
import Services from './components/MainPage/Services.jsx';
import Contact from './components/MainPage/Contact.jsx';
import About from './components/MainPage/About.jsx';
import Register from './components/Authentication/Register.jsx';
import Login from './components/Authentication/Login.jsx';
import Summary from './components/Dashboard/summary/Summary.jsx';
import DashBoard from './components/Dashboard/Board/Dashboard.jsx';
import SettingAccount from './components/Dashboard/settingAccount/SettingAccount.jsx';
import Calendar from './components/Dashboard/calendar/Calendar.jsx';
import EmployeeTable from './components/Dashboard/employeeTable/EmployeeTable.jsx';
import ReserveTable from './components/Dashboard/reserveTable/ReserveTable.jsx';
import RepairTable from './components/Dashboard/repairTable/RepairTable.jsx';
import Promotions from './components/Dashboard/promotionsTable/Promotions.jsx';
import Reports from './components/Dashboard/reports/Reports.jsx';
import ReportsPromotions from './components/Dashboard/reportsPromotions/ReportsPromotions.jsx';
import ReportsRevenue from './components/Dashboard/reportsRevenue/ReportsRevenue.jsx';

function App() {

  const isLoggedIn = window.localStorage.getItem('isLoggedIn');

  console.log('isLoggedIn : ', isLoggedIn);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      {isLoggedIn ? (
        <Route path="/dashboard/*" element={<DashBoard />}>
        <Route path="summary" element={<Summary />} />
        <Route path="setting" element={<SettingAccount />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="employee" element={<EmployeeTable />} />
        <Route path="allreserve" element={<ReserveTable />} />
        <Route path="repair" element={<RepairTable />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="reports" element={<Reports />} />
        <Route path="reportsPromotions" element={<ReportsPromotions />} />
        <Route path="reportsRevenue" element={<ReportsRevenue />} />
      </Route>
      ) : (
        <Route path="dashboard/*" element={<Home />}>
        <Route path="summary" element={<Home />} />
        <Route path="users" element={<Home />} />
        <Route path="products" element={<Home />} />
        <Route path="summary" element={<Home />} />
        <Route path="users/:id" element={<Home />} />
        <Route path="products/:id" element={<Home />} />
      </Route>
      )}
    </Routes>
    </BrowserRouter>
  )
}

export default App
