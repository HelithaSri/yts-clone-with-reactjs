import NavBar from './../components/common/navbar/NavBar';
import HeroSection from './../pages/Hero Section/Hero';
import LatestMovies from './../pages/Latest Movies/Latest';

function App() {
  return (
    <>
        <NavBar/>
        <main>
          <HeroSection/>
          <LatestMovies/>
        </main>
    </>
  );
}

export default App;