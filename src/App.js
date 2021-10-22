import React from "react";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import { mainRoutes } from "./routes/mainRoutes";
import "./index.css";

const App = () => {
  const [theme, changeTheme] = usePersistedTheme();

  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = () => {
    theme.title === "dark" ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Header />
        <Main />

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {mainRoutes.map(({ path, exact, component }) => (
                <Route
                  path={path}
                  component={component}
                  exact={exact}
                  key={path}
                />
              ))}
            </Switch>
          </Suspense>
        </main>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
