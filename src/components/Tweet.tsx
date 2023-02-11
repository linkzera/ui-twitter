import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import { Link } from "react-router-dom";
import "./Tweet.css"

interface ITwitter {
  content: string;
}

export const Tweet = ({ content }: ITwitter) => {
  return <Link to="/status" className="tweet">
    <img src="https://github.com/linkzera.png" alt="" />
    <div className="tweet-content">

      <div className="tweet-content-header">
        <strong>Douglas Vinicius</strong>
        <span>@linkzera</span>
      </div>

      <p>{content}</p>

      <div className="tweet-content-footer">
        <button type="button">
          <ChatCircle />
          20
        </button>
        <button type="button">
          <ArrowsClockwise />
          20
        </button>
        <button type="button">
          <Heart />
          20
        </button>
      </div>

    </div>
  </Link>
}