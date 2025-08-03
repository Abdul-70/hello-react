const header = React.createElement("div", {
    id: "parant"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "hello i am h1 heading from child1"),
        React.createElement("h2", {}, "hello i am h2 heading from child1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "hello i am h1 heading from child2"),
        React.createElement("h2", {}, "hello i am h2 heading from child2")
    ])
]);
// const heading = ()=>( 
//      <div className="head">
//         <h1>hello ,, This is react functional component</h1>
//      </div>
//     );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

//# sourceMappingURL=hello_react.7c0ccee6.js.map
