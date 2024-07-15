import {useState} from 'react'

export default function Button({ value, onPointClick }) {
    return (
        <button className="button" onClick={onPointClick}>{value}</button>
    );
}