import Section from './Section';

const CURRENT_YEAR = new Date().getFullYear();

const contacts = [
  { label: 'Email', href: 'mailto:dmytro.titarchuk.kb.2025@lpnu.ua', text: 'dmytro.titarchuk.kb.2025@lpnu.ua' },
  { label: 'GitHub', href: 'https://github.com/Zesile', text: 'github.com/Zesile' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/тітарчук-дмитро/', text: 'linkedin.com/in/Тітарчук-Дмитро' },
];

function Footer({ name }) {
  return (
    <Section as="footer" id="contacts" title="Контакти" className="mt-12 border-t-2 border-slate-300 pt-8">
      <address className="space-y-1 not-italic">
        {contacts.map(({ label, href, text }) => (
          <p key={label}>
            {label}:{' '}
            <a
              href={href}
              className="text-emerald-700 underline hover:text-rose-600"
              {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {text}
            </a>
          </p>
        ))}
      </address>
      <p className="mt-4 text-sm">&copy; {CURRENT_YEAR} {name}</p>
    </Section>
  );
}

export default Footer;
