import Content from "../components/Content";
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
    </div>
  );
};

export default Home;
