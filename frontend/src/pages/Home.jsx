import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="mt-16 flex gap-8">
          <Sidebar></Sidebar>
          <Content></Content>
        </div>
      </main>
      <footer>
        <Footer>Copyright © 2024 by Semih Şahinoğlu</Footer>
      </footer>
    </div>
  );
};

export default Home;
