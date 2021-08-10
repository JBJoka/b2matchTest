import { useState } from "react";
import './Player.css';

const Player = ({data}) => {

    const [visible, setVisible] = useState(false);

    return (
        <li> 
            <p>
                {data.first_name} {data.last_name} | 
                {visible ? <a onClick={() => setVisible(false)}>-</a> : <a onClick={() => setVisible(true)}>+</a>}
            </p>
            <div className={visible ? "desc-visible" : "desc-hidden"} >
                <p>Position: {data.position}</p>
                <p>Team : {data.team.abbreviation} "{data.team.full_name}"</p>
            </div>
        </li>
        
    );
}

export default Player;