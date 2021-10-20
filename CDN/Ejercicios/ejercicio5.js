const miApp = document.getElementById("app");

const miComponente = () => {
    const titulo = React.createElement('header',null,"Introduccion a React");
    const titulo2 = React.createElement('section',null,"Lorem Ipsum");
    const div = React.createElement();
    return titulo;
}

ReactDOM.render(miComponente(),miApp);
