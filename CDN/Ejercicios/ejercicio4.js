const miApp = document.getElementById("app");

const miComponente = () => {
    const titulo = React.createElement('header',null,"Introduccion a React");
    return titulo;
}

ReactDOM.render(miComponente(),miApp);
