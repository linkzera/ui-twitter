import "./Timeline.css"
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { FormEvent, KeyboardEvent, useState } from "react";


export function Timeline() {
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "teste",
    "olá mundo!"
  ])
  const [newTweet, setNewTweet] = useState('')
  async function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  async function createNewTweetHotkey(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      createNewTweet(event)
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <form className="new-tweet-form" onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img src="https://github.com/linkzera.png" alt="Douglas Vinicius" />
          <textarea
            id="tweet"
            placeholder="o que está acontencendo ?"
            value={newTweet}
            onKeyDown={createNewTweetHotkey}
            onChange={e => setNewTweet(e.target.value)}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map(
        (tweet, i) => <Tweet key={i} content={tweet} />
      )}
    </main>
  )
}