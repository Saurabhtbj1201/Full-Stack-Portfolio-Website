import React from 'react';
import '../styles/Subdomains.css';

const Subdomains = () => {
  const subdomains = [
    { name: 'Links', url: 'https://links.gu-saurabh.site/' },
    { name: 'Build Notes', url: 'https://buildnotes.gu-saurabh.site/' },
    { name: 'Airnexa', url: 'https://airnexa.gu-saurabh.site/' },
    { name: 'ESD', url: 'https://esd.gu-saurabh.site/' },
    { name: 'Weather', url: 'https://weather.gu-saurabh.site/' },
    { name: 'Holi', url: 'https://holi.gu-saurabh.site/' },
    { name: 'Valentine', url: 'https://valentine.gu-saurabh.site/' },
    { name: 'Housing', url: 'https://housing.gu-saurabh.site/' },
    { name: 'Notepath', url: 'https://notepath.gu-saurabh.site/' },
    { name: 'Years', url: 'https://years.gu-saurabh.site/' },
    { name: 'SK', url: 'https://sk.gu-saurabh.site/' },
    { name: 'Galgotias', url: 'https://galgotias.gu-saurabh.site/' },
    { name: 'HMS', url: 'https://hms.gu-saurabh.site/' },
    { name: 'HMS Admin', url: 'https://hms-admin.gu-saurabh.site/' },
    { name: 'Mindspace', url: 'https://mindspace.gu-saurabh.site/' },
    { name: 'Projects', url: 'https://projects.gu-saurabh.site/' },
    { name: 'E-commerce', url: 'https://e-commerce.gu-saurabh.site/' },
    { name: 'Vibrance', url: 'https://vibrance.gu-saurabh.site/' },
    { name: 'WWW', url: 'https://www.gu-saurabh.site/' },
  ];

  return (
    <section id="subdomains" className="subdomains-section">
      <h2 className="subdomains-title">My Projects</h2>
      <div className="subdomains-grid">
        {subdomains.map((subdomain, index) => (
          <a
            key={index}
            href={subdomain.url}
            target="_blank"
            rel="noopener noreferrer"
            className="subdomain-card"
          >
            <h3>{subdomain.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Subdomains;
