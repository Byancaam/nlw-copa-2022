// JSX - Javascript + XML (HTML)
// TSX - Typescript + JSX

import { Tweet } from "../components/Tweet";

export default function Home() {
  return (
    <div>
      <Tweet text='Meu primeiro Tweet' />
      <Tweet text='Meu segundo Tweet' />
      <Tweet text='Meu terceiro Tweet' />
      <Tweet text='Meu quarto Tweet' />
      <Tweet text='Meu quinto Tweet' />
      <Tweet text='Meu sexto Tweet' />

    </div>
  );
}
