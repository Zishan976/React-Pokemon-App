import { useState } from "react"
import { Input } from "./Components/Input"
import { Pokemon } from "./Components/Pokemon"


export const App = () => {
  const [search, setSearch] = useState("")
  return <>
    <header>
      <h1>Hello, pokemon</h1>
    </header>
    <Input value={search} onChange={(e) => { setSearch(e.target.value) }} />
    <Pokemon search={search} />
  </>
}