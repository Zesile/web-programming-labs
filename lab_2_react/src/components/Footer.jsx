function Footer({ name }) {
  const CURRENT_YEAR = new Date().getFullYear(); 
  return (
    <footer id="contacts">
      <h2>Контакти</h2>
      <address>
        <p>Email: <a href="mailto:dmytro.titarchuk.kb.2025@lpnu.ua">dmytro.titarchuk.kb.2025@lpnu.ua</a></p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/Zesile" target="_blank" rel="noopener noreferrer">
            github.com/Zesile
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/тітарчук-дмитро/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/Тітарчук-Дмитро
          </a>
        </p>
      </address>
      <p><small>&copy; {CURRENT_YEAR} {name}</small></p>
    </footer>
  );
}

export default Footer;