<script>
  import { Router, Route, Link } from 'svelte-navigator';
  import Stats from './views/Stats.svelte';
  import Trivia from './views/Trivia.svelte';
</script>

<Router>
  <nav>
    <Link to="/">Trivia</Link>
    <Link to="stats">Estadísticas</Link>
  </nav>

  <Route path="stats">
    <Stats />
  </Route>

  <Route path="/">
    <Trivia />
  </Route>
</Router>
