import classes from './Card.module.css';

const Card=(props)=>{
    return(
        <div className={classes.card}>
            {<button className={classes.button} onClick={props.clickHandler}>
                {props.children}
            </button>}
        </div>
    );
}

export default Card;