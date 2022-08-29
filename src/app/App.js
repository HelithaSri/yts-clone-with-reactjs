import NavBar from './../components/common/navbar/NavBar';
import HeroSection from './../pages/Hero Section/Hero';
import LatestMovies from './../pages/Latest Movies/Latest';
import UpcomingMovies from './../pages/Upcoming Movies/Upcoming';

function App() {
  return (
    <>
        <NavBar/>
        <main>
          <HeroSection/>
          <LatestMovies/>
          <UpcomingMovies/>
        </main>
    </>
  );
}

export default App;