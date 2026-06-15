import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Terms.css';

const Terms = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Saurabh Kumar Portfolio';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Read the terms and conditions for using Saurabh Kumar\'s portfolio website, services, and content.'
      );
    }
  }, []);

  return (
    <section className="terms-page">
      <div className="terms-shell">
        <header className="terms-head">
          <p className="terms-kicker">Legal</p>
          <h1>Terms & Conditions</h1>
          <p className="terms-meta">Effective date: 15 June 2026</p>
        </header>

        <div className="terms-body">
          <article className="terms-block">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these terms. If you do not
              agree, please discontinue use of the site.
            </p>
          </article>

          <article className="terms-block">
            <h2>2. Use of Content</h2>
            <p>
              All content, including project descriptions, text, graphics, and code samples, is
              provided for informational purposes. You may not copy or republish material for
              commercial use without prior written permission.
            </p>
          </article>

          <article className="terms-block">
            <h2>3. Intellectual Property</h2>
            <p>
              Unless otherwise stated, content on this website is owned by Saurabh Kumar and is
              protected by applicable intellectual property laws.
            </p>
          </article>

          <article className="terms-block">
            <h2>4. External Links</h2>
            <p>
              This website may contain links to third-party platforms. We are not responsible for
              the availability, accuracy, or content of external sites.
            </p>
          </article>

          <article className="terms-block">
            <h2>5. Limitation of Liability</h2>
            <p>
              The website is provided on an "as is" basis. We make no warranties regarding
              uninterrupted availability or error-free operation and are not liable for damages
              arising from site use.
            </p>
          </article>

          <article className="terms-block">
            <h2>6. Changes to Terms</h2>
            <p>
              Terms may be updated periodically to reflect legal, technical, or business changes.
              Continued use after updates constitutes acceptance of revised terms.
            </p>
          </article>

          <article className="terms-block">
            <h2>7. Contact</h2>
            <p>
              For legal or policy-related questions, contact:{' '}
              <a href="mailto:Saurabhtbj143@gmail.com">Saurabhtbj143@gmail.com</a>
            </p>
          </article>
        </div>

        <div className="terms-actions">
          <Link to="/" className="terms-btn primary">Back to Home</Link>
          <Link to="/privacy" className="terms-btn ghost">Privacy Policy</Link>
        </div>
      </div>
    </section>
  );
};

export default Terms;
