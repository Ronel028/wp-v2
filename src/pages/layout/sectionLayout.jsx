const SectionLayout = ({ children, id }) => {
  return (
    <section id={id} className="h-auto py-[59px]">
      {children}
    </section>
  );
};

export default SectionLayout;
