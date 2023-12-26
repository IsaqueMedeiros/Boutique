function layout({ sectionBg, children, haveHeader, imageBg }) {
    return (
      <section className={`
      ${sectionBg}
      ${imageBg && `bg-cover bg-no-repeat bg-center`}
    `}
    style={{ backgroundImage: imageBg ? `url(${imageBg})` : '' }}>
        <div
          className={`
            w-[90%] max-w-[1400px] min-h-[100dvh] mx-auto flex flex-col gap-8
            items-center justify-center overflow-hidden lg:overflow-visible ${haveHeader === true ? "py-24" : ""}
            md:w-[80%]
          `}
        >
          {children}
        </div>
      </section>
    );
  }

  export default layout;