import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

export default function MenuExampleSubMenu() {
    return (
        <Menu vertical>
            <Dropdown item text="Position">
                <Dropdown.Menu>
                    <Dropdown.Item
                        as={NavLink}
                        to="/admin/position/add"
                        icon="edit"
                        text="Add Position"
                    />
                    <Dropdown.Item
                        as={NavLink}
                        to="/admin/position/list"
                        icon="list"
                        text="List Position"
                    />
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Work Way">
                <Dropdown.Menu>
                    <Dropdown.Item
                        as={NavLink}
                        to="/admin/workway/add"
                        icon="edit"
                        text="Add Work Way"
                    />
                    <Dropdown.Item
                        as={NavLink}
                        to="/admin/workway/list"
                        icon="list"
                        text="List Work Way"
                    />
                </Dropdown.Menu>
            </Dropdown>
        </Menu>
    );
}
