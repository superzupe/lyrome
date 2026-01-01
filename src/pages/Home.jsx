import Header from "../components/layout/Header";
import Title from "../components/features/Title";
import Footer from "../components/layout/Footer";
import SongsList from "../components/features/SongsList";
import useLyrics from "../hooks/useLyrics";

const Home = () => {
const {lyrics} = useLyrics()

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Title>
        Find Lyrics. <br />
        Feel the Meaning.
      </Title>
      
       
        <SongsList lyrics={lyrics} />
     
      <Footer />
    </div>
  );
};

export default Home;
