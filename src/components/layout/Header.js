import classes from './Header.module.css';

const Header = () =>{

    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    return(
        <header className={classes.header}>
            <div className={classes.greetings}><h1>Hi There !!!</h1></div>
            <div className={classes.date}><h1>{date}</h1></div>
        </header>
    );
}

export default Header;