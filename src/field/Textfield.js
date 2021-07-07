import React from 'react';
import './text.css';

function Textfield() {
    return (
        <>
        <div className="label1">
            <label className="text1">
                Enter Country, City or Postal code
            </label>
            <label className="text2">
                Doctor's Speciality
            </label>
        </div>
        <div className="inputt">
            <input type="text"  className="text11" />
            <input list="location"  className="text12"/>
        </div>
        <hr />
        </>
    )
}

export default Textfield;
