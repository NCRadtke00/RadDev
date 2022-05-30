import { MouseEventHandler } from 'react"
import React from 'react'

interface DropDownItemProps {
    onClick: MouseEventHandler<HTMLLIElement>;
    item:string;
}

const DropDownItem: React.FC<DropDownItemProps> = ({onClick, item}) => {
    return (
        <li onClick={this.onClick}>
            {item}
        </li>
    )
}

export default DropDownItem
