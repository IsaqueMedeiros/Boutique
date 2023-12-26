const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-around h-[8rem] border-t-2 border-farkasGold w-[125%]">
     <a href="https://www.asaas.com/c/131169297065" >
         <button className=" text-xs lg:text-3xl p-1 lg:p-2 bg-farkasGold text-farkasWhite rounded-[0.5rem] lg:rounded-[1rem]">
        GARANTIR MINHA VAGA
      </button>
      </a>
      <img
        src="/Logos/CM.webp"
        loading="lazy"
        alt="exagono"
        width={250}
        height={250}
        className=" w-[3rem] h-[3rem] lg:w-[6rem] lg:h-[6rem]"
      />
      <img
        src="/Logos/DR.webp"
        loading="lazy"
        alt="exagono"
        width={250}
        height={250}
        className="hidden lg:block w-[3rem] h-[3rem] lg:w-[6rem] lg:h-[6rem]"
      />
      <img
        src="/Logos/BQ.webp"
        loading="lazy"
        alt="exagono"
        width={250}
        height={250}
        className="hidden lg:block w-[3rem] h-[3rem] lg:w-[6rem] lg:h-[6rem]"
      />
    </div>
  );
};

export default Footer;
