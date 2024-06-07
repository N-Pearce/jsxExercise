const Person = ({name, age, hobbies}) => {
    if (name.length > 8){
        name = name.substring(0,6)
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>{age >= 18 ? 'please go vote!' : 'you must be 18.'}</p>
            <p>Hobbies:</p>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    );
}