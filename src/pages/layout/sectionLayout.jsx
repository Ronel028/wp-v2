const SectionLayout = ({ children, id }) => {
  return (
    <section id={id} className="h-auto min-h-screen py-[59px]">
      {children}
    </section>
  );
};

export default SectionLayout;
