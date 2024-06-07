const App = () => {
    return (
        <div>
            <Tweet name={"William"}
                   username={"Funny-Guy"}
                   date={"Sept 4th, 2023"}
                   message={"I think cats are really cool."}/>
            <Tweet name={"William"}
                   username={"Funny-Guy"}
                   date={"Sept 9th, 2023"}
                   message={"I got scratched by a cat..."}/>
            <Tweet name={"Trace"}
                   username={"X-Hopper"}
                   date={"Sept 9th, 2023"}
                   message={"LOL"}/>
        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById("root")
);