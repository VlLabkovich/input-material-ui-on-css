import React from 'react';
import "./TextField.css"

export const TextField: React.FC<{id: string, labelText: string, type: "text" | "password"}> =
    ({labelText, type, id}) => {
    return (
        <div className="text-field">
            <input type={type} id={id} placeholder="Some placeholder"/>
            <label htmlFor={id}>{labelText}</label>
        </div>
    );
};