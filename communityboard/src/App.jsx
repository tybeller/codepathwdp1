import './App.css';
import Card from './card';

import devilsImg from './assets/devilsmillhopper.jpg';
import olenoImg from './assets/oleno.jpg';
import paynesImg from './assets/paynesprarie.jpg';
import rainbowImg from './assets/rainbow springs.jpg';
import silverImg from './assets/silversprings.jpg';

const App = () => {

  return (
    <div className="app">
      <h1 class="title">Florida Parks Near Gainesville</h1>
      <div className="card-container">
        <Card
          imgSrc={devilsImg}
          title="Devi's Millhopper Geological State Park"
          genre="4732 Millhopper Rd, Gainesville, FL 32653"
          buttonHref="https://www.floridastateparks.org/parks-and-trails/devils-millhopper-geological-state-park"
        />
        <Card
          imgSrc={olenoImg}
          title="O'Leno State Park"
          genre="410 SE Oleno Park Rd, High Springs, FL 32643"
          buttonHref="https://www.floridastateparks.org/parks-and-trails/oleno-state-park"
        />
        <Card
          imgSrc={paynesImg}
          title="Paynes Prairie Preserve State Park"
          genre="100 Savannah Blvd, Micanopy, FL 32667"
          buttonHref="https://www.floridastateparks.org/parks-and-trails/paynes-prairie-preserve-state-park"
        />
        <Card
          imgSrc={rainbowImg}
          title="Rainbow Springs State Park"
          genre="19158 SW 81st Pl Rd, Dunnellon, FL 34432"
          buttonHref="https://www.visitrainbowsprings.com/"
        />
        <Card
          imgSrc={silverImg}
          title="Silver Springs State Park"
          genre="5656 E Silver Springs Blvd, Silver Springs, FL 34488"
          buttonHref="https://www.silversprings.com/"
        />
      </div>
    </div>
  )
}

export default App

