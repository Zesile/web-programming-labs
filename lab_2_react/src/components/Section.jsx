function Section({ id, title, as: Tag = 'section', className = '', children }) {
  return (
    <Tag id={id} className={`scroll-mt-8 ${className}`}>
      <h2 className="mb-5 border-b-2 border-slate-300 pb-2 font-serif text-2xl font-bold">
        {title}
      </h2>
      {children}
    </Tag>
  );
}

export default Section;
