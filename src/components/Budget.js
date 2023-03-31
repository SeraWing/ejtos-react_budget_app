import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,setBudget } = useState();
    const { currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    return>
                </input>
            </span>
        </div>
    );
};
export default Budget;