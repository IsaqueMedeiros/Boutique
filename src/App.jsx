import "./index.css";
import Layout from "../src/components/layout/Layout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Layout sectionBg="bg-farkasGreen" >
      <div
            style={{ backgroundImage: `url("/Logos/CM.webp")` }}
            className="rounded-[1rem] bg-cover bg-no-repeat bg-center w-[95%] lg:w-[50rem] text-farkasWhite h-[20rem] lg:h-[25rem] overflow-hidden flex flex-col items-center justify-center"
          >
      </div>
      <div
            style={{ backgroundImage: `url("/PCima.webp")` }}
            className="rounded-[1rem] bg-cover bg-no-repeat bg-center w-[95%] lg:w-[90rem] text-farkasWhite h-[20rem] lg:h-[20rem] overflow-hidden flex flex-col items-center justify-center"
          >
      </div>

      </Layout>
      <Layout sectionBg="bg-farkasGreen">
        <div className=" border-farkasWhite w-full h-[40rem] flex flex-col items-center justify-center">
          <div className=" text-farkasWhite w-[95%] h-[35rem]  border-farkasGold flex flex-col items-center justify-around">
            <img
              src="/Logo_Boutique_Green.webp"
              loading="lazy"
              alt="exagono"
              width={250}
              height={250}
              className=" w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] mt-[-5rem] "
            />
            <p className="text-[1.5rem]">
              • CASAS MILIONÁRIAS é uma verdadeira revolução no que diz respeito
              à cursos de engenharia civil na internet no Brasil. Vocês entrarão
              em uma "viagem" e conhecerão, em detalhes, a história completa das
              casas, com área construída de 3000m², de puro luxo e tecnologia,
              desde a captação da obra até a entrega do manual do proprietário!
            </p>
          </div>
        </div>
        <Footer />
      </Layout>

      <Layout sectionBg="bg-farkasGreen">
        <div className=" border-farkasWhite w-full h-[55rem] lg:h-[40rem] flex flex-col items-center justify-center">
          <div className=" text-farkasWhite w-[95%] h-[35rem]  border-farkasGold flex flex-col items-center justify-around">
            <img
              src="/Logo_Boutique_Green.webp"
              loading="lazy"
              alt="exagono"
              width={250}
              height={250}
              className=" w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] mt-[-5rem] "
            />
            <p className="text-[1.5rem]">
              • DRIVE_FARKAS é uma ferramenta desenvolvida pela FARKAS que
              permite gerenciar e organizar toda sua obra na palma da sua mão.
            </p>
            <br className="lg:hidden" />
            <br className="lg:hidden" />
            <p className="text-[1.5rem]">
              • BOUTIQUE CONSTRUTORA é um conceito inovador na construção civil
              que, através de condutas, que contemplarão sustentabilidade do seu
              canteiro de obras, respeito ao colaborador, uso de argamassas e
              aditivos, dentre outros assuntos, busca oferecer obras de
              excelência, com foco na satisfação dos clientes.
            </p>
          </div>
        </div>
        <Footer />
      </Layout>

      <Layout sectionBg="bg-farkasGreen">
        <video className="h-full w-full rounded-lg" controls>
          <source
            src="/Evideo.mp4"
            type="video/mp4"
          />

        </video>
      </Layout>

      {/* Second Section */}

      <Layout imageBg="/Estevao.webp">
        <div className="bg-farkasWhite h-[32.5rem] lg:h-[25rem] w-[95%] lg:w-[80%] mt-[35rem] lg:mt-[15rem] flex flex-col items-center justify-center overflow-hidden ">
          <div className=" flex flex-col items-center justify-center w-[90%] h-[27rem] lg:h-[20rem] overflow-hidden ">
            <p className="overflow-hidden ">
              Meu nome é Estevão Farkasvölgyi, 57 anos, Empresário e Engenheiro
              Civil desde os 22 anos. São 35 anos atuando na construção civil em
              obras residenciais e comerciais. Nesse período
              <b>
                {" "}
                executei mais de 400 obras, que perfazem 1.800.000m2 executados
                em 22 Estados Brasileiros e DF. Em valores atualizados, são mais
                de 1 bilhão em obras executadas!
              </b>{" "}
              Resolvi passar toda essa bagagem para vocês, pois não faz o menor
              sentido ter esses números conquistados e não passar para frente,
              para que outros profissionais façam o mesmo!
            </p>
          </div>
          <br />
          <hr className="w-full bg-farkasGold h-[2px]" />
        </div>
        <Footer />
      </Layout>

      {/* Third Section */}

      <Layout sectionBg="bg-farkasGreen">
        <div className=" h-[55rem] lg:h-auto w-full lg:w-[125%] flex flex-col items-center justify-center lg:flex-row lg:justify-between">
          <div
            style={{ backgroundImage: `url("/PCima.webp")` }}
            className="rounded-r-[1rem] hidden lg:block bg-cover bg-no-repeat bg-start  lg:w-[20rem] text-farkasWhite h-[45rem] lg:h-[25rem] overflow-hidden flex flex-col items-center justify-center"
          ></div>
          <div
            style={{ backgroundImage: `url("/PCima.webp")` }}
            className="rounded-[1rem] bg-cover bg-no-repeat bg-center w-[95%] lg:w-[50rem] text-farkasWhite h-[45rem] lg:h-[25rem] overflow-hidden flex flex-col items-center justify-center"
          >
            <p className="text-2xl mr-[50%]">Fotos</p>
            <h1 className="text-5xl lg:mr-[30%]">
              Casas
              <br /> Milionárias
            </h1>
          </div>
          <div
            style={{ backgroundImage: `url("/PCima.webp")` }}
            className="rounded-l-[1rem] hidden lg:block bg-cover bg-no-repeat bg-center  lg:w-[20rem] text-farkasWhite h-[45rem] lg:h-[25rem] overflow-hidden flex flex-col items-center justify-center"
          ></div>
        </div>
        <Footer />
      </Layout>

      {/* Fourth Section */}

      <Layout sectionBg="bg-farkasGreen">
        <div className="h-[75rem] lg:h-[60%] w-[98%] lg:w-full flex flex-col lg:flex-row items-center lg:items-start justify-evenly">
          {/* <img
            src="/Logo_Boutique_Green.webp"
            loading="lazy"
            alt="exagono"
            width={250}
            height={250}
            className=" w-[12rem] h-[12rem] lg:absolute lg:mr-[90%]"
          /> */}
          <span className="h-[65rem] w-full flex flex-col justify-around items-center">
            <div className="h-[10rem] lg:h-[12rem] w-full  lg:w-[120%]">
              <img
                src="/Exe/EXE1.webp"
                loading="lazy"
                alt="Cartas"
                width={250}
                height={250}
                className="object-cover w-full lg: h-full"
              />
            </div>
            <div className="h-[10rem] lg:h-[12rem] w-full  lg:w-[120%] ">
              <img
                src="/Exe/EXE2.webp"
                loading="lazy"
                alt="Cartas"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[10rem] lg:h-[12rem] w-full  lg:w-[120%]">
              <img
                src="/Exe/EXE3.webp"
                loading="lazy"
                alt="Cartas"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[10rem] lg:h-[12rem] w-full  lg:w-[120%]">
              <img
                src="/Exe/EXE4.webp"
                loading="lazy"
                alt="Cartas"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[10rem] lg:h-[12rem] w-full  lg:w-[120%]">
              <img
                src="/Exe/EXE5.webp"
                loading="lazy"
                alt="Cartas"
                width={250}
                height={250}
                className="object-cover w-full h-full  lg:w-[120%]"
              />
            </div>
          </span>
        </div>
      </Layout>

      <Layout sectionBg="bg-farkasGreen">
        <div className="h-[75rem] lg:h-[60%] w-[98%] flex flex-col lg:flex-row items-center lg:items-start justify-evenly">
          <h1 className="mr-[50%] lg:absolute lg:mr-[85%] lg:mt-[2.5rem] text-farkasWhite text-3xl" >
            Obras <br/> <span className="border-b-2 border-farkasGold" >Executadas</span>
          </h1>
          <span className="h-[65rem] w-full flex flex-col justify-around items-center">
            <div className="h-[10rem] lg:h-[12rem] w-full lg:w-[107.5%] lg:ml-[15%]">
              <img
                src="/Mi/Mi1.webp"
                loading="lazy"
                alt="Cartas"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[10rem] lg:h-[12rem] w-full  lg:w-[122.5%]">
              <img
                src="/Mi/Mi2.webp"
                loading="lazy"
                alt="Cartas"
                width={250}
                height={250}
                className="object-cover w-full h-full "
              />
            </div>
            <div className="h-[10rem] lg:h-[12rem] w-full  lg:w-[122.5%]">
              <img
                src="/Mi/Mi3.webp"
                loading="lazy"
                alt="Cartas"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[10rem] lg:h-[12rem] w-full  lg:w-[122.5%]">
              <img
                src="/Mi/Mi4.webp"
                loading="lazy"
                alt="Cartas"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[10rem] lg:h-[12rem] w-full  lg:w-[122.5%]">
              <img
                src="/Mi/Mi5.webp"
                loading="lazy"
                alt="Cartas"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
          </span>
        </div>
      </Layout>


      <Layout sectionBg={"bg-farkasWhite"}>
        <div className="h-[100rem] lg:h-[70rem] w-[95%] lg:w-[120%] flex flex-col justify-around items-center">
          <h1 className="text-farkasGreen text-center text-4xl mt-[3rem] lg:mt-[10rem] sm:text-5xl ">
            Conteúdos
          </h1>

          <div className="text-farkasGreen h-[90%] w-[95%] flex flex-col sm:justify-center lg:justify-around md:flex-row flex-wrap justify-evenly items-center gap-8 mt-8 lg:mt-0">
            <div className=" flex flex-col justify-around items-center border-2 border-farkasGold w-[20rem] h-[25rem] lg:w-[24rem] lg:h-[36rem] rounded-[1rem]">
              <h1 className="text-2xl md:text-3xl   ">Home Office</h1>
              <hr className=" flex flex-col justify-center items-center w-[100%] h-[3px] bg-farkasGold mb-[-2.5rem]" />
              <p className="md:text-[1.3rem] w-[19rem]">
                Cada obra nossa é encarada como uma EMPRESA, ou seja, o
                escritório dessa empresa deve ser na sede e, como a sede é a
                obra, todos os assuntos pertinentes à ela serão tratados e
                administrados pelo engenheiro e seu supervisor, pois não temos o
                auxílio de escritório central. Resultado: Despesa Zero!!
              </p>
            </div>
            <div className=" flex flex-col justify-around items-center border-2 border-farkasGold w-[20rem] h-[25rem] lg:w-[24rem] lg:h-[36rem] rounded-[1rem]">
              <h1 className="text-2xl md:text-3xl ">Drive Farkas</h1>
              <hr className=" flex flex-col justify-center items-center w-[100%] h-[3px] bg-farkasGold mb-[-2rem]" />
              <p className="md:text-[1.3rem] w-[19rem] mb-[2rem] ">
                Ferramenta Operacional, Administrativa e Informativa,
                desenvolvida e testada pela Farkas Construtora em 04 obras
                simultâneas, sem escritório central ou funcionários diretos.
                Todos, absolutamente todos os serviços são terceirizados, desde
                compras à execução da obra.
              </p>
            </div>
            <div className=" flex flex-col justify-around items-center border-2 border-farkasGold w-[20rem] h-[25rem] lg:w-[24rem] lg:h-[36rem] rounded-[1rem]">
              <h1 className="text-2xl md:text-3xl ">Conceito Boutique</h1>
              <hr className=" flex flex-col justify-center items-center w-[100%] h-[3px] bg-farkasGold mb-[-3.5rem]" />
              <p className="md:text-[1.3rem] w-[19rem]">
                O que temos nos dois quadros ao lado são Conceitos, e estão
                dando muito certo! Esses e outros conceitos é o que chamamos de
                Boutique Construtora. Eu garanto que quem fizer o curso não
                usará mais betoneira em sua obra. Nunca mais! E temos outros
                tantos diferenciais que serão discutidos em todas as nossas
                aulas!{" "}
              </p>
            </div>
          </div>
        </div>
      </Layout>

      <Layout sectionBg="bg-farkasGreen">
        <div className="text-farkasWhite flex flex-col items-center justify-around  h-[95rem] lg:h-[60rem] w-[95%]">
          <h1 className="text-4xl lg:text-7xl mt-12 mr-[25%] lg:mr-[60%]">
            3• Chaves
          </h1>
          <h1 className="text-4xl lg:mr-[65%]">
            para o <span className="border-b-2 border-farkasGold">sucesso</span>
          </h1>
          <div className="h-[55rem] lg:h-[20rem] w-full  flex flex-col lg:flex-row items-center justify-around">
            <img
              src="/Logos/BQ.webp"
              loading="lazy"
              alt="exagono"
              width={250}
              height={250}
              className=" w-[12rem] h-[12rem] border-2 border-farkasWhite rounded-full "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-farkasWhite"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <img
              src="/Logos/CM.webp"
              loading="lazy"
              alt="exagono"
              width={250}
              height={250}
              className=" w-[12rem] h-[12rem] rounded-full border-2  border-farkasWhite"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-farkasWhite"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <img
              src="/Logos/DR.webp"
              loading="lazy"
              alt="exagono"
              width={250}
              height={250}
              className=" w-[12rem] h-[12rem] border-2 border-farkasWhite rounded-full "
            />
          </div>
          <div className="h-[35rem] lg:h-[25rem] w-full flex flex-col items-center justify-around">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[7rem] h-[7rem] lg:w-24 lg:h-24 text-farkasWhite "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="0.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-[17rem] h-[17rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              ></path>
            </svg>
          </div>
        </div>
      </Layout>

      <Layout sectionBg="bg-farkasGreen">
        <div className="text-farkasWhite h-[80rem] lg:h-[60rem] w-[95%]  flex flex-col items-center justify-around">
          <div className="lg:mr-[35%] h-[20rem] lg:h-[10rem] w-[95%]  flex flex-col justify-around items-center">
            <h1 className="text-2xl lg:text-4xl w-[90%]">
              METODOLOGIA BOUTIQUE CONSTRUTORA
            </h1>
            <p className="w-[90%]">
              ESSA METODOLOGIA JÁ ESTÁ IMPLEMENTADA E EM PLENA OPERAÇÃO NAS
              OBRAS DA FARKAS CONSTRUTORA, E É BEM SIMPLES - A SOMATÓRIA DE TRÊS
              CONCEITOS, SENDO:
            </p>
          </div>
          <div className=" h-[25rem] lg:h-[20rem] w-[95%] lg:w-[120%] flex flex-col items-center justify-center border border-farkasGold rounded-[1rem]">
            <p className="w-[90%] lg:text-2xl">
              {" "}
              CONCEITO I -{" "}
              <span className="text-[#00FF57]">CASAS MILIONÁRIAS</span> - É o
              conceito <span className="text-[#00FF57]">PRÁTICO</span> desta
              operação. Abrange desde à captação da obra, orçamento, negociação,
              acompanhamento de projetos até a execução da obra, manual do
              proprietário, entrega final da obra, dentre outros. Fazem parte
              disso, o básico (fazer a obra bem feita), com excelência, dando
              atenção à Integralidade da obra. Resultado prático disso - Cliente
              muito satisfeito e diminuição radical de custos pós-obra.
            </p>
          </div>
          <div className="lg:w-[120%] h-[30rem] lg:h-[20rem] w-[95%] flex flex-col items-center justify-center border border-farkasGold rounded-[1rem]">
            <p className="w-[90%] lg:text-2xl">
              CONCEITO II - <span className="text-[#00FF57]">FARKAS_DRIVE</span>{" "}
              - É o conceito{" "}
              <span className="text-[#00FF57]">
                ORGANIZACIONAL/ADMINISTRATIVO
                <br />
                /FINANCEIRO
              </span>
              &nbsp; dessa operação. É um DRIVE composto por 27 pastas com dezenas de
              subpastas. Ele organiza de maneira cronológica de acordo com o que
              acontece na prática de uma obra, aspectos gerenciais
              (administrativo/ previsão de despesas, contratos, outros),
              aspectos de execução (orçamento, projetos, diário de obra, orçado
              x realizado, manual do proprietário) e aspectos informação/
              arquivamento (documentos, projetos, manuais, fotos). Enfim, todas
              as informações na palma da sua mão.
            </p>
          </div>
        </div>
      </Layout>

      <Layout sectionBg="bg-farkasGreen">
        <div className="text-farkasWhite h-[80rem] lg:h-[60rem] w-[95%] flex flex-col items-center justify-around">
          <div className="lg:mr-[35%] h-[10rem] w-[95%] flex flex-col justify-around items-center">
            <h1 className="text-2xl lg:text-4xl w-[90%]">
              METODOLOGIA BOUTIQUE CONSTRUTORA
            </h1>
          </div>
          <div className="lg:w-[120%] h-[25rem] lg:h-[20rem] w-[95%] flex flex-col items-center justify-center border border-farkasGold rounded-[1rem]">
            <p className="w-[90%] lg:text-2xl">
              CONCEITO III -
              <span className="text-[#00FF57]"> BOUTIQUE CONSTRUTORA</span> - É
              o conceito <span className="text-[#00FF57]">IDEOLÓGICO</span>{" "}
              dessa operação. À Boutique Construtora é a mentora disso tudo. Ela
              busca soluções em sustentabilidade no canteiro de obras, Ciência e
              tecnologia na obra, respeito aos colaboradores, limpeza e
              organização, procedimentos, disciplina e rotina.{" "}
              <span className="text-[#00FF57]">CONCEITO OBRA_OFFICE</span>- a
              obra é tratada como uma empresa autônoma e deve ser administrada
              dentro dela mesma.{" "}
            </p>
          </div>
          <div className="lg:w-[120%] h-[30rem] lg:h-[20rem] w-[95%] flex flex-col items-center justify-center border border-farkasGold rounded-[1rem]">
            <p className="w-[90%] lg:text-2xl">
              {" "}
              CONCEITO IV - <span className="text-[#00FF57]">
                SUA EMPRESA
              </span>{" "}
              - No nosso caso, Farkas Construtora tem um papel dúbio nesta
              operação. Ela é o resultado na prática disso tudo, ou seja, os
              conceitos descritos acima foram colocados em prática na Farkas e
              os resultados foram surpreendentes. Utilizando o conceito
              Home_Office + Obra_Office, eliminamos o escritório central e
              dispensamos todos os colaboradores dos escritórios e obras.
              Terceirizamos absolutamente tudo. Resultado - nossa despesa
              administrativa e escritório foi reduzida em 95%. E essa redução
              virou LUCRO!
            </p>
          </div>
        </div>
      </Layout>
      <Layout sectionBg="farkasWhite">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[120%] h-[30rem] gap-20">
          <h1 className="text-farkasGreen text-5xl lg:text-7xl sm:mb-[25rem] lg:mr-[25%] ">
            Para quem
            <br className="hidden sm:block" /> é o Curso?
          </h1>
          <div className=" text-end flex flex-col justify-between items-end  text-6xl sm:text-8xl gap-12">
            <p className="border-b-4  border-farkasGold">Engenheiros</p>
            <p className="border-b-4  border-farkasGold">Arquitetos</p>
            <p className="border-b-4  border-farkasGold">Investidores</p>
            <p className="border-b-4  border-farkasGold">Empresários</p>
          </div>
        </div>
      </Layout>

      <Layout sectionBg="farkasWhite">
        <div className="h-[90rem] lg:h-[90rem] w-[95%] flex flex-col items-center justify-around ">
          <div className="text-farkasWhite bg-farkasGreen h-[15rem] lg:h-[20rem] w-[95%] border border-farkasGold flex flex-col justify-around items-center rounded-[1rem]">
            <h1 className="w-[90%] text-4xl ">
              Aulas
              <br />{" "}
              <span className="border-b-2 border-farkasGold">On-Line</span>
            </h1>
            <p className="w-[90%] lg:text-2xl">
              Aulas ON-LINE, via ZOOM, ao vivo, às terças, quartas e quintas
              feiras, sempre as 20:00HS.{" "}
            </p>
          </div>
          <div className="text-farkasWhite bg-farkasGreen h-[15rem] lg:h-[20rem] w-[95%] border border-farkasGold flex flex-col justify-around items-center rounded-[1rem]">
            <h1 className="w-[90%] text-4xl">
              Suporte
              <br />{" "}
              <span className="border-b-2 border-farkasGold">On-Line</span>
            </h1>
            <p className="w-[90%] lg:text-2xl">
              Dois Plantões para tirar dúvidas sobre o curso e outros assuntos.
              Serão nos dias 29/01/2024 12/02/2024, segundas feiras às 20:00hs.{" "}
            </p>
          </div>
          <div className="text-farkasGreen bg-farkasGold h-[15rem] lg:h-[20rem] w-[95%] border border-farkasGold flex flex-col justify-around items-center rounded-[1rem]">
            <h1 className="w-[90%] text-4xl">
              Bônus
              <br />{" "}
              <span className="border-b-2 border-farkasGreen">
                Torne-se PHD
              </span>
            </h1>
            <p className="w-[90%] lg:text-2xl">
              Garanto à vocês, com absoluta certeza, que você será um PHD em
              CASAS MILIONÁRIAS!{" "}
            </p>
          </div>
          <div className="text-farkasGreen bg-farkasGold h-[20rem] w-[95%] border border-farkasGold flex flex-col justify-around items-center rounded-[1rem]">
            <h1 className="w-[90%] text-4xl">
              Bônus
              <br />{" "}
              <span className="border-b-2 border-farkasGreen">Mentoria</span>
            </h1>
            <p className="w-[90%] lg:text-2xl">
              Você poderá escolher: mentoria individual com Estevão
              Farkasvölgyi, on-line, em dia a ser definido e com duração de três
              horas caso seja de BH ou queira vir para BH, mentoria de um dia
              onde iremos conversar sobre suas dores e visitar as nossas obras.{" "}
            </p>
          </div>
        </div>
      </Layout>

      <Layout sectionBg="farkasWhite">
        <div className="h-[95rem] lg:h-[95rem] w-[95%] flex flex-col items-center justify-around ">
          <div className="text-farkasWhite bg-farkasGreen h-[15rem] lg:h-[20rem] w-[95%] border border-farkasGold flex flex-col justify-around items-center rounded-[1rem]">
            <h1 className="w-[90%] text-4xl ">
              Duração
              <br />{" "}
              <span className="border-b-2 border-farkasGold">do Curso</span>
            </h1>
            <p className="w-[90%] lg:text-2xl">
              16/01/2024 à 15/02/2024
              <br />
              Acesso ao Grupo de whatsapp curso CASAS MILIONÁRIAS_TURMA I.{" "}
            </p>
          </div>
          <div className="text-farkasWhite bg-farkasGreen h-[15rem] lg:h-[20rem] w-[95%] border border-farkasGold flex flex-col justify-around items-center rounded-[1rem]">
            <h1 className="w-[90%] text-4xl">
              Aulas
              <br />{" "}
              <span className="border-b-2 border-farkasGold">Gravadas</span>
            </h1>
            <p className="w-[90%] lg:text-2xl">
              Todas as aulas serão gravadas e ficarão à disposição na Comunidade
              por 1 ano.{" "}
            </p>
          </div>
          <div className="text-farkasGreen bg-farkasGold h-[30rem] w-[95%] border border-farkasGold flex flex-col justify-around items-center rounded-[1rem]">
            <h1 className="w-[90%] text-4xl">
              Bônus
              <br />{" "}
              <span className="border-b-2 border-farkasGreen">Palestras</span>
            </h1>
            <p className="w-[90%] lg:text-2xl">
              Palestras com projetistas que atuaram na casa, sendo:
            </p>
            <ul className="w-[90%] list-disc">
              <li className="lg:text-2xl">
                • Aquecimento residencial de banhos, serviço, piscina, SPA e
                sauna.
              </li>
              <li className="lg:text-2xl">
                • Automação residencial - iluminação, audio/video, CFTV,
                internet, SPA, sauna e cortinas.
              </li>
              <li className="lg:text-2xl">
                • Impermeabilizações adotadas na casa e outros.
              </li>
            </ul>
          </div>
          <div className="text-farkasWhite bg-farkasGreen h-[15rem] lg:h-[20rem] w-[95%] border border-farkasGold flex flex-col justify-around items-center rounded-[1rem]">
            <h1 className="w-[90%] text-4xl">
              <span className="border-b-2 border-farkasGold">Comunidade</span>
            </h1>
            <p className="w-[90%]">
              Acesso à Comunidade BOUTIQUE CONSTRUTORA,
               ecossistema que agrupa CASAS MILIONÁRIAS DRIVE_FARKAS E BOUTIQUE CONSTRUTORA.{" "}
            </p>
          </div>
        </div>
      </Layout>
    </main>
  );
}

export default App;
