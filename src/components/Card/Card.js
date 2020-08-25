import React from 'react'
import classes from './Card.module.scss'
import catImg from '../../img/cat.png';



export default function Card({taste, amount, gift, weight, additional, active, disabled, heading, selectedText, disabledText, mouseLeaved, onClick, onMouseLeave}) {

    const mousesCounter = (gift) => {
        if(gift === 1) {
            return 'мышь ';
        }else if(gift >= 2 && gift <= 4) {
            return `${gift} мыши `;
        }else {
            return `${gift} мышей `;
        }
    }


    return (
        <div className={classes.Card} >
        <div 
        className={(active && mouseLeaved) ? `${classes.CardElement} ${classes.selectedHover}` :
            active ? `${classes.CardElement} ${classes.active}` :
            disabled ? `${classes.CardElement} ${classes.disabled}` :
            `${classes.CardElement}`}
        onClick={onClick}  
        onMouseLeave={onMouseLeave}>
        <div className={mouseLeaved ? `${classes.topTextSelectedHover}` : undefined}>{heading}</div>
            <h2>Нямушка</h2>
            <h3>{taste}</h3>
            <div>
                <p>{amount} порций</p>
                <p>{mousesCounter(gift)}в подарок</p>
                <p>{additional}</p>
            </div>
            <img src={catImg} className={classes.mainImage} alt="Cat"/>
            <div className={classes.amount}>
            <div style={{fontSize: '42px'}}>{weight}</div>
            <div>кг</div>
            </div>  
        </div>
        <div className={disabled ? `${classes.infoDisabled} ${classes.info}` : classes.info}>{active ?  selectedText  : disabled ? disabledText : <p>Чего сидишь? Порадуй котэ, <span onClick={onClick} style={{color: '#1698d9', borderBottom: '1px dashed #1698d9', cursor: 'pointer'}} >купи.</span></p>}</div>
        </div>
    )
}
