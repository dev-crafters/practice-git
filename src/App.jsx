import "./App.css";

function App() {
  return (
    <>
      <h1>Practicando con GIT</h1>
      <p>Este es el nuevo cambio </p>

      <div>
        <p>Tenemos un nuevo commit</p>
        <p>
          En este caso estamos creando un cambio sin haber creado una rama en
          github
        </p>
      </div>
      <div>
        <p>Tenemos otro nuevo commit pero ahora referenciando el issue</p>
        <p>En este caso referenciaremos el issue al crear el commit</p>
        <p>creo que no se subio antes</p>
      </div>

      {/* Colocando contenido que no deberia exisitir */}
      <div className="error">Este mensaje no deberia estar aqui</div>
      <div className="inservible">
        <tren>tren?</tren>
      </div>
    </>
  );
}

export default App;
