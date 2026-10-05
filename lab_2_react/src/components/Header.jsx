function Header({ name, title }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{title}</p>
      <nav>
        <ul>
          <li><a href="#about">Про мене</a></li>
          <li><a href="#experience">Досвід роботи</a></li>
          <li><a href="#education">Освіта</a></li>
          <li><a href="#skills">Навички</a></li>
          <li><a href="#contacts">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;