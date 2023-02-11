import "./Sidebar.css"
import twitterLogo from "../assets/logo.svg"
import { House, Hash, Bell, EnvelopeSimple, BookmarkSimple, FileText, User, DotsThreeCircle, Pencil } from "phosphor-react"
import { Link, NavLink } from "react-router-dom"

export function Sidebar() {
  return <aside className="sidebar">
    <img src={twitterLogo} alt="logo" />

    <nav className="main-navigation">
      <NavLink to="/">
        <House weight="fill" size={32} />
        <span>Home</span>
      </NavLink>
      <Link to="/">
        <Hash size={32} />
        <span>Explore</span>
      </Link>
      <Link to="/">
        <Bell size={32} />
        <span>Notifications</span>
      </Link>
      <Link to="/">
        <EnvelopeSimple size={32} />
        <span>Messages</span>
      </Link>
      <Link to="/">
        <BookmarkSimple size={32} />
        <span>Bookmarks</span>
      </Link>
      <Link to="/">
        <FileText size={32} />
        <span>Lists</span>
      </Link>
      <Link to="/">
        <User size={32} />
        <span>Profile</span>
      </Link>
      <Link to="/">
        <DotsThreeCircle size={32} />
        <span>More</span>
      </Link>
    </nav>

    <button className="new-tweet" type="button">
      <Pencil />
      <span>Tweet</span>
    </button>

  </aside>
}