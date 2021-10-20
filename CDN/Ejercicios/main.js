const miApp = document.getElementById("app");

const miComponente = () => {
    const titulo = React.createElement('h1',null,"Introduccion a React");
    return titulo;
}

ReactDOM.render(miComponente(),miApp);
