import React, { Component } from 'react';
import successData from '../../assets/success-cases';
class TotalHires extends Component {
    
    render() {
        return (
        <div className="flex-column-center total-hires-container" >
            <span className="total-number">{successData.length}</span>
            <span className="total-hires">Vanhackers Hired</span>
        </div>
)}
}

export default TotalHires;