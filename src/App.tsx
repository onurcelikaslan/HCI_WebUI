import "./App.css";
import PatientSelector from "./components/PatientSelector";
import HospitalSelector from "./components/HospitalSelector";
import { VisitList } from "./components/VisitList";
import { useState } from "react";

function App() {
  const [hospitalId, setHospitalId] = useState<string>("");
  const [patientId, setPatientId] = useState<string>("");

  return (
    <div className="App">
      <header className="App-header">
        <p>HCI Patient/Hospital Search</p>
      </header>
      <div className="Components">
        <div className="Patient">
          <PatientSelector selectedItem={patientId} onSelectedItemChange={setPatientId}></PatientSelector>
        </div>
        <div className="Hospital">
          <HospitalSelector selectedItem={hospitalId} onSelectedItemChange={setHospitalId}></HospitalSelector>
        </div>
      </div>
      <div>
        <VisitList hospitalId={hospitalId} patientId={patientId}></VisitList>
      </div>
    </div>
  );
}

export default App;
