import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "Detecção de Defeitos em Componentes", icon: <DiHtml5 />, text:"Este projeto envolve a definição e impressão de vários componentes padrão e outros que podem apresentar defeitos de fabricação. Uma ferramenta para detecção de peças defeituosas é implementada e testada, com adaptação do sistema na esteira rolante." },
  { id: "css", name: "Monitoramento de Sensores via Web", icon: <DiCss3 />, text:"Este projeto consiste na ligação e teste dos sensores, criação de uma página web para visualização dos dados, transmissão de dados e implementação de sistema supervisório. O sistema é montado em um tanque para simulação e teste." },
  { id: "css", name: "Mini Planta de Energia Solar", icon: <DiCss3 />, text:"Este projeto envolve a montagem e teste de uma mini planta de geração de energia solar, além da montagem de uma experiência de correção de fator de potência." },
  { id: "css", name: "Desenvolvimento de Jogos Sensoriais", icon: <DiCss3 />, text:"Este projeto visa definir e avaliar os jogos que serão apresentados, montar as estruturas de sensoriamento e testar os sistemas montados." },
  { id: "css", name: "Braço Robótico", icon: <DiCss3 />, text:"Este projeto envolve o projeto, impressão, montagem e teste de um braço robótico de bancada e outros elementos que serão expostos." },
  { id: "css", name: "Sistema Supervisório com Componentes Impressos", icon: <DiCss3 />, text:" Este projeto envolve o projeto e impressão de componentes para acomodação dos reservatórios, mangueiras, condutores e demais componentes, além da ligação e teste dos sensores e atuadores, transmissão de dados e implementação de sistema supervisório." },
  { id: "css", name: "Caixa Térmica Inteligente", icon: <DiCss3 />, text:" Este projeto envolve o projeto da caixa térmica, montagem e teste dos circuitos e sensores, implementação de controlador de temperatura, transmissão de dados e implementação de sistema supervisório." },
  { id: "css", name: "Monitoramento de Sensores via Web", icon: <DiCss3 />, text:"Este projeto consiste na ligação e teste dos sensores, criação de uma página web para visualização dos dados, transmissão de dados e implementação de sistema supervisório. O sistema é montado em um tanque para simulação e teste." },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Projetos</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
