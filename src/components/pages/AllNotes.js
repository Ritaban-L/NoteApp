import {  useState } from "react";
import WritingPad from "../notes/WritingPad";
import Card from "../ui/Card";
import classes from './AllNotes.module.css';

const AllNotesPage=()=>{
    const [isWritingPadActive, setWritingPad] = useState(0);

    const setWiritingPadOne=()=>{
        setWritingPad(1);
    }

    const setWiritingPadZero=()=>{
        setWritingPad(0);
    }

    if (isWritingPadActive){
        return(
            <WritingPad clickHandler={setWiritingPadZero}/>
        );
    }

    return(
        <div>
            <Card clickHandler={setWiritingPadOne}>
                <div className={classes.plus}>
                    +
                </div>
                <div className={classes.text}>
                    New Note
                </div>
            </Card>
        </div>
    );
}

export default AllNotesPage;