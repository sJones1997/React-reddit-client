import { useHistory } from 'react-router';
import './returnButton.css'
var FontAwesome = require('react-fontawesome')

export default function ReturnButton(){

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="iconContainer">
            <FontAwesome
                name="arrow-left" 
                onClick={goBack}
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:'1.5em', padding: '0 10px', color:'#878a8c' }}
            />
            <h4 style={{'color': '#878a8c'}}>Return</h4>
        </div>
    );
}