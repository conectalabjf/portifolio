import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/conecta.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Conecta Lab" />
      <p className="title"></p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://wa.me/5532988147673" target='_blank' className="btn">
        Whatsapp
      </a>
    </aside>
  );
};

export default Sidebar;
