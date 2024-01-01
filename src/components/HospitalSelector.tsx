import React, { useEffect, useState } from "react";
import { Hospital } from "../models/Hospital";

type Props = {
  selectedItem?: string;
  onSelectedItemChange?: (newItem: string) => void;
};

const HospitalSelector = ({ selectedItem, onSelectedItemChange }:Props) => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
    
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "hospitals")
      .then((response) => response.json())
      .then((res) => setHospitals(res))
  }, []);
    
    
  return (
    <div>
      <select
        onChange={(e) => {
          if (e.target.value !== "") {
            const c = hospitals?.find((x) => x.id === e.target.value) as Hospital;
            onSelectedItemChange?.(e.target.value);
            selectedItem = c.id;
          } else {
            onSelectedItemChange?.("");
            selectedItem = "";
          }
        }}
        defaultValue=""
      >
        <option value="">Choose a hospital</option>
        {hospitals
          ? hospitals.map((hospital) => {
              return (
                <option key={hospital.id} value={hospital.id}>
                  {hospital.name}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

export default HospitalSelector;
