const desc = 'I just learned how to create a React node and render it into the DOM.'
const myTitleID = 'main-title';
const person = 'Joe';




const header = (
    <header>
    {/* Comments need to be used inside of curly braces */}
        <h1 id={myTitleID}>  { person }'s First React Element</h1>
        <p className="main-desc">{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);