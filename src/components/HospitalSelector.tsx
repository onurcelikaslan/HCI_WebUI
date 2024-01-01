import React, { useEffect, useState } from "react";
import { Hospital } from "../models/Hospital";

type Props = {
  selectedItem?: string;
  onSelectedItemChange?: (newItem: string) => void;
};

const HospitalSelector = ({ selectedItem, onSelectedItemChange }:Props) => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [selected, setSelected] = useState<Hospital[]>([]);
    
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "hospitals")
      .then((response) => response.json())
      .then((res) => setHospitals(res))
  }, []);
    
    
  return (
    <div>
      <select
        onChange={(e) => {
          onSelectedItemChange?.(e.target.value);
          const c = hospitals?.find((x) => x.id === e.target.value) as Hospital;
          setSelected([...selected, c]);
          selectedItem = c.id;
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
