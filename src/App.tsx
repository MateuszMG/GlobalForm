import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyled } from "./utils/theme/GlobalStyle";
import { MainNav } from "./components/MainNav/MainNav";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <MainNav />
      {routes.map((el) => (
        <Route exact {...el} />
      ))}
    </BrowserRouter>
  );
};
