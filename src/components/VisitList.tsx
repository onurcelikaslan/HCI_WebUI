import React, { useEffect, useState } from "react";
import { VisitProps } from "../models/VisitProps";
import { Visit } from "../models/Visit";

export const VisitList: React.FC<VisitProps> = ({ patientId, hospitalId }) => {
    const [visits, setVisits] = useState<Visit[]>([]);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        const searchParams = new URLSearchParams();
        if (patientId !== "") {
            searchParams.append("patientId", patientId);
        }
        if (hospitalId !== "") {
            searchParams.append("hospitalId", hospitalId);
        }
        searchParams.toString();
        var query = searchParams.toString() !== "" ? "?" + searchParams.toString() : "";
        
        var url = baseUrl + "visits" + query;

        fetch(url)
            .then((response) => response.json())
            .then((res) => setVisits(res))
    }, [baseUrl, hospitalId, patientId]);

    return (
        <div className="VisitList">
            <label className="VisitTableHeader">{ "Patient Visit Information (Count : " + visits.length + ")"}</label>
            {visits
          ? visits.map((visit) => {
            return (
                <label key={visit.id}>{"Patient : " + visit.patient.firstName + " " + visit.patient.lastName + " / Hospital : " + visit.hospital.name + " / Visit Date : " + visit.visitDate}</label>
            );
          })
            : null}
        </div>
    );
};
