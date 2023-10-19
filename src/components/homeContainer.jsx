import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

import "../styles/components/app.sass";

const homeContainer = () => {
  return (
    <div id="portfolio">
      <h1>ConectaLab</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default homeContainer;