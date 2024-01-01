import React, { useEffect, useState } from "react";
import { Patient } from "../models/Patient";


type Props = {
  selectedItem?: string;
  onSelectedItemChange?: (newItem: string) => void;
};

const PatientSelector = ({ selectedItem, onSelectedItemChange }:Props) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selected, setSelected] = useState<Patient[]>([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "patients")
      .then((response) => response.json())
      .then((res) => setPatients(res))
  }, []);


  return (
    <div>
      <select
        onChange={(e) => {
          onSelectedItemChange?.(e.target.value);
          const c = patients?.find((x) => x.id === e.target.value) as Patient;
          setSelected([...selected, c]);
          selectedItem = c.id;
        }}
        defaultValue=""
      >
        <option value="">Choose a patient</option>
        {patients
          ? patients.map((patient) => {
            return (
              <option key={patient.id} value={patient.id}>
                {patient.firstName + " " + patient.lastName}
              </option>
            );
          })
          : null}
      </select>
    </div>
  );
};
export default PatientSelector;