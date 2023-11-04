import "./App.css";
import ArkanSection from "./components/ArkanSection/ArkanSection";
import Email from "./components/Email/Email";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import PrayerTimings from "./components/PrayerTimings/PrayerTimings";
import TimeTable from "./components/TimeTable/TimeTable";

const App = () => {
  return (
    <div className="container">
      <Landing />
      <ArkanSection />
      <TimeTable />
      <PrayerTimings />
      <Email />
      <Footer />
    </div>
  );
};

export default App;
