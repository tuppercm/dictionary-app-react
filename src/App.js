import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="hello" />
      </main>
      <footer>
        Coded by Caitlin Tupper,{" "}
        <a
          href="https://github.com/tuppercm/dictionary-app-react"
          title="GitHub repository"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://vermillion-cupcake-044708.netlify.app/"
          title="Netlify"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
