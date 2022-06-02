import { NavLink } from "react-router-dom";
import { MainNavLink, MainNavList, MainNavWrap } from "./MainNav.styled";
import { routes } from "../../routes/routes";
import { separateString } from "../../helpers/strings";

export const MainNav = () => {
  return (
    <MainNavWrap>
      <MainNavList>
        {routes.map((el) => (
          <MainNavLink key={el.path}>
            <NavLink to={el.path}>{separateString(el.component.name)}</NavLink>
          </MainNavLink>
        ))}
      </MainNavList>
    </MainNavWrap>
  );
};
