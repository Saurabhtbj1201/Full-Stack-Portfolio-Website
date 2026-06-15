import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Privacy.css';

const Privacy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Saurabh Kumar Portfolio';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Review how Saurabh Kumar\'s portfolio website collects, uses, and protects personal information.'
      );
    }
  }, []);

  return (
    <section className="privacy-page">
      <div className="privacy-shell">
        <header className="privacy-head">
          <p className="privacy-kicker">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="privacy-meta">Effective date: 15 June 2026</p>
        </header>

        <div className="privacy-body">
          <article className="privacy-block">
            <h2>1. Information We Collect</h2>
            <p>
              We may collect information you provide directly, such as your name, email, and
              message details when you submit the contact form.
            </p>
          </article>

          <article className="privacy-block">
            <h2>2. How Information Is Used</h2>
            <p>
              Data is used to respond to inquiries, improve website performance, and understand
              engagement through analytics.
            </p>
          </article>

          <article className="privacy-block">
            <h2>3. Analytics and Cookies</h2>
            <p>
              Basic analytics tools may use cookies or similar technologies to measure traffic and
              usage behavior. You can disable cookies in your browser settings.
            </p>
          </article>

          <article className="privacy-block">
            <h2>4. Data Sharing</h2>
            <p>
              Personal data is not sold. Information may only be shared with trusted service
              providers when necessary to operate the website or comply with legal obligations.
            </p>
          </article>

          <article className="privacy-block">
            <h2>5. Data Security</h2>
            <p>
              Reasonable technical and administrative safeguards are applied to protect data;
              however, no internet transmission method is completely secure.
            </p>
          </article>

          <article className="privacy-block">
            <h2>6. Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal information by
              emailing the address below.
            </p>
          </article>

          <article className="privacy-block">
            <h2>7. Contact</h2>
            <p>
              For privacy-related requests, contact:{' '}
              <a href="mailto:Saurabhtbj143@gmail.com">Saurabhtbj143@gmail.com</a>
            </p>
          </article>
        </div>

        <div className="privacy-actions">
          <Link to="/" className="privacy-btn primary">Back to Home</Link>
          <Link to="/terms" className="privacy-btn ghost">Terms & Conditions</Link>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
