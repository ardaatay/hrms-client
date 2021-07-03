import React, { useState, useEffect } from "react";

import PositionService from "../../services/positionService";

export default function Banner() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        let positionService = new PositionService();
        positionService
            .getPositions()
            .then((result) => setPositions(result.data.data));
    }, []);

    const options = [];
    positions.map((position, i) =>
        options.push({ key: i, value: position.value, text: position.text })
    );

    return (
        <div>
          Banner
        </div>
    );
}
