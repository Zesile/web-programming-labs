const links = [
  { href: '#about', label: 'Про мене' },
  { href: '#experience', label: 'Досвід роботи' },
  { href: '#education', label: 'Освіта' },
  { href: '#skills', label: 'Навички' },
  { href: '#contacts', label: 'Контакти' },
];

const linkClass =
  'block border-l-4 border-transparent px-3 py-2 text-emerald-100 hover:border-rose-500 hover:bg-white/10 hover:text-white';

function Header({ name, title }) {
  return (
    <header className="border-b-4 border-rose-600 bg-emerald-950 p-6 text-white md:sticky md:top-0 md:h-screen md:w-72 md:shrink-0 md:self-start md:border-b-0 md:border-r-4">
      <h1 className="font-serif text-3xl font-bold">{name}</h1>
      <p className="mt-1 text-emerald-100">{title}</p>

      <nav className="mt-6 flex flex-wrap gap-1 md:flex-col">
        {links.map(({ href, label }) => (
          <a key={href} href={href} className={linkClass}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
