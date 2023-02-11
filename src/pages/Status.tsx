import "./Status.css"

import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { useState, FormEvent, KeyboardEvent } from "react";
import { PaperPlaneRight } from "phosphor-react";


export function Status() {
  const [aswers, setNewAswers] = useState([
    "Concordo...",
    "Olha, faz sentido",
    "Bem legal!"
  ])
  const [newAswer, setNewAswer] = useState('')

  async function createNewAswer(event: FormEvent) {
    event.preventDefault()

    setNewAswers([newAswer, ...aswers])
    setNewAswer('')
  }

  async function createNewAswerHotkey(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      createNewAswer(event)
    }
  }

  return (
    <main className="timeline">
      <Header title="Tweet" />

      <Tweet content="TEste" />
      <Separator />

      <form className="aswer-tweet-form" onSubmit={createNewAswer}>
        <label htmlFor="tweet">
          <img src="https://github.com/linkzera.png" alt="Douglas Vinicius" />
          <textarea
            id="tweet"
            placeholder="Tuite sua resposta"
            value={newAswer}
            onKeyDown={createNewAswerHotkey}
            onChange={e => setNewAswer(e.target.value)}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Aswer</span>
        </button>
      </form>

      {aswers.map(
        (aswer, i) => <Tweet key={i} content={aswer} />
      )}

    </main>
  )
}