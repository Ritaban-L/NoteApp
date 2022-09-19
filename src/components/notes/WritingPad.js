import classes from './WritingPad.module.css';

const WritingPad=(props)=>{
    return(
        <div>
            <div className={classes.control}>
                <textarea type='text' required rows='10'/>
                <button onClick={props.clickHandler}>Submit</button>
            </div>

        </div>
    );
}

export default WritingPad;