import './App.css';
import Card from './card';

const App = () => {

  return (
    <div className="App">
      <Card
        imgSrc="https://media.vanityfair.com/photos/541c841b1019a3955fea0c58/master/w_1280,c_limit/shawshank-redemption-20th-anniversary-01.jpg"
        title="The Shawshank Redemption"
        genre="Drama"

        buttonHref="https://www.imdb.com/title/tt0111161/"
      />
    </div>
  )
}

export default App

