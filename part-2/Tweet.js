const Tweet = ({username, name, date, message}) => {
    return (
        <div className="tweet">
            <b>{message}</b>
            <p>-by {name}, aka {username} on {date}</p>
        </div>
    );
}