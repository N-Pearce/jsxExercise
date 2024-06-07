const App = () => {
    return (
        <div>
            <Person name={"William"}
                    age={18}
                    hobbies={["surfing", "bowling"]}/>
            <Person name={"Billy"}
                    age={10}
                    hobbies={["video games", "drawing", "reading"]}/>
            <Person name={"Alexander"}
                    age={21}
                    hobbies={["programming", "video games", "making pizzas"]}/>
        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById("root")
);