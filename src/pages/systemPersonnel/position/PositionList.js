import React, { useState, useEffect } from "react";
import PositionService from "../../../services/positionService";

export default function PositionList() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        let positionService = new PositionService();
        positionService
            .getPositions()
            .then((result) => setPositions(result.data.data));
    });

    return (
        <div>
            <table className="table">
                <thead></thead>
                <tr>
                    <th>Value</th>
                    <th>Text</th>
                </tr>
                <tbody>
                    {positions.map((position) => (
                        <tr key={position.value}>
                            <td>{position.value}</td>
                            <td>{position.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
