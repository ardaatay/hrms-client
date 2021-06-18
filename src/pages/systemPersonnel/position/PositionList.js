import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
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
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Value</Table.HeaderCell>
                        <Table.HeaderCell>Text</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {positions.map((position) => (
                        <Table.Row key={position.value}>
                            <Table.Cell>{position.value}</Table.Cell>
                            <Table.Cell>{position.text}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}
