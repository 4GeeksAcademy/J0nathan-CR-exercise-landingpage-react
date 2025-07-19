import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Jumbotron />
        <div className="row">
          <Cards 
            title="Card 1" 
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsa officiis illo sit, aliquam tenetur corrupti sint itaque labore architecto ipsum." 
            image="https://picsum.photos/200/150"
            buttonLabel="Find Out More!"
            buttonUrl="#"
          />
          <Cards 
            title="Card 2" 
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsa officiis illo sit, aliquam tenetur corrupti sint itaque labore architecto ipsum." 
            image="https://picsum.photos/200/151"
            buttonLabel="Find Out More!"
            buttonUrl="#"
          />
          <Cards 
            title="Card 3" 
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsa officiis illo sit, aliquam tenetur corrupti sint itaque labore architecto ipsum." 
            image="https://picsum.photos/200/152"
            buttonLabel="Find Out More!"
            buttonUrl="#"
          />
          <Cards
            title="Card 4" 
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsa officiis illo sit, aliquam tenetur corrupti sint itaque labore architecto ipsum." 
            image="https://picsum.photos/200/153"
            buttonLabel="Find Out More!"
            buttonUrl="#"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;