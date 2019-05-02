import React from 'react'
import './index.sass'

function LanguageSelector({lang, onLanguageChange}){

    return <div class="languageselector">    
        <select className="form-control" onChange={event => onLanguageChange(event.target.value)} value={lang}>
            <option value="en">English</option>
            <option value="es">Español</option>
        </select>
    </div>
}

export default LanguageSelector
