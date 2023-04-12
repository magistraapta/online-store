import Navbar from './components/Navbar';
import Content from './components/Content';
import Items from './components/items';
import AccorContainer from './components/AccorContainer';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <Items />
      <Items />
      <AccorContainer />
      <Footer />
    </>
  );
}
