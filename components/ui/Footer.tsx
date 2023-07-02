const socialLinks = [
  {
    name: "Email",
    href: "mailto:ivorkchan@outlook.com",
  },
  {
    name: "RSS",
    href: "https://not.cy/feed.xml",
  },
];

export function Footer() {
  return (
    <footer>
      <div className="prose prose-neutral mx-auto dark:prose-invert">
        <hr className="!mb-5" />
        <div className="my-5 flex gap-4 px-5 lg:px-0">
          {socialLinks.map((link) => {
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link.href}
                key={link.name}
              >
                <div
                  className={
                    "text-sm leading-4 text-neutral-900 dark:text-white"
                  }
                >
                  {link.name}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
