import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: '#111827', color: '#ffffff' }}>
        <Navbar />
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
