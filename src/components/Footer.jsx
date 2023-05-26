import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#282c34', height: '20px', position: 'fixed', bottom: '0', left: '0', width: '100%', textAlign: 'center', color: 'white', zIndex: '999' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <p style={{ marginRight: '10px', fontSize: '10px', marginBottom: '0' }}>© 2023 Marisha Deroubaix</p>
          <a href="https://github.com/Deroubaix?tab=overview&from=2023-04-01&to=2023-04-30" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
            <FaGithub style={{ marginRight: '5px' }} />
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          footer div {
            justify-content: flex-start;
          }
        }

        @media (min-width: 769px) {
          footer div {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;








