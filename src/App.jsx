import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterDetail from "./components/Character/Detail";
import Main from "./views/Main";

 export default function App() {
  return (
    
    <BrowserRouter>
<Switch>
<Route path = '/:id'><CharacterDetail /></Route>
<Route path = '/'>
<Main />
</Route>
</Switch>
</BrowserRouter>


  );
}
