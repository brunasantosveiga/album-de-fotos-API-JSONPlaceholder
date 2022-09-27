import { MainRoutes } from "./routes/MainRoutes";
import * as styled from "./AppStyles";

function App() {
  return (
    <styled.Container>
      <header>
        <styled.Title>Galeria de fotos</styled.Title>
      </header>
      <hr />
      <div>
        <MainRoutes />
      </div>
    </styled.Container>
  );
}

export default App;
