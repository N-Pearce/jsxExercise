const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name={"William"}/>
        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById("root")
);