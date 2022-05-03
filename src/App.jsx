import { Switch, Route } from "react-router-dom";
import CharacterDetail from "./components/Character/Detail";
import Main from "./views/Main";

 export default function App() {
   return (
       <Switch>
         <Route path="/:id">
           <CharacterDetail />
         </Route>
         <Route path="/">
           <Main />
         </Route>
       </Switch>
   );
 }
