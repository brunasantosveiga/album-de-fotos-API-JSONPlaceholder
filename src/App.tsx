import { MainRoutes } from "./routes/MainRoutes";
import * as styled from "./AppStyles";

function App() {
  return (
    <styled.Container>
      <header>
        <styled.Title>
          Galeria de fotos
          <hr />
        </styled.Title>
      </header>
      <div>
        <MainRoutes />
      </div>
    </styled.Container>
  );
}

export default App;
