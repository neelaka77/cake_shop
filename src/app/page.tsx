import styles from "./home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PartFix | Premium Laptop Spare Parts</title>
        <meta name="description" content="Find the perfect spare parts for your laptop. Specializing in ASUS, Dell, Lenovo, and Apple." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          Part<span>Fix</span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#brands" className={styles.navLink}>Shop by Brand</a>
          <a href="#" className={styles.navLink}>Parts Catalog</a>
          <a href="#" className={styles.navLink}>Repair Guides</a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.btnSecondary} style={{display: 'none' /* hidden on mobile implicitly, though CSS media query handles nav usually */}}>Log In</button>
          <button className={styles.btnPrimary}>Cart (0)</button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Bring Your Laptop <span>Back to Life</span></h1>
          <p className={styles.heroSubtitle}>
            Premium, high-performance spare parts for all major brands. 
            Upgrade your display, battery, memory, and motherboard with guaranteed compatibility based on your exact model.
          </p>
          <div className={styles.actions} style={{justifyContent: 'center', marginTop: '2rem'}}>
            <a href="#brands" className={styles.btnPrimary} style={{padding: '1rem 2.5rem', fontSize: '1.1rem'}}>Find Your Part</a>
            <button className={styles.btnSecondary} style={{padding: '1rem 2.5rem', fontSize: '1.1rem'}}>Track Repair</button>
          </div>
        </section>

        {/* Features */}
        <section className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🛡️</div>
            <h3 className={styles.featureTitle}>100% Authentic Parts</h3>
            <p className={styles.featureText}>Sourced directly from certified suppliers including advanced ROG and ASUS gear.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Next-Day Shipping</h3>
            <p className={styles.featureText}>Get what you need fast with priority dispatch on all items ordered before 4 PM.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🛠️</div>
            <h3 className={styles.featureTitle}>Expert Support</h3>
            <p className={styles.featureText}>Detailed repair guides and live technical assistance to help you install it right.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📅</div>
            <h3 className={styles.featureTitle}>1-Year Warranty</h3>
            <p className={styles.featureText}>We stand behind our quality with a hassle-free 12-month replacement guarantee.</p>
          </div>
        </section>

        {/* Shop by Brand */}
        <section id="brands" className={styles.section} style={{background: 'var(--background)'}}>
          <h2 className={styles.sectionTitle}>Shop by Brand</h2>
          <div className={styles.brandsGrid}>
            <div className={`${styles.brandCard} ${styles.featured}`}>
              <span className={styles.featuredBadge}>Top Seller</span>
              <div className={styles.brandLogo} style={{fontSize: '2.5rem', fontWeight: 900}}>ASUS</div>
              <p className={styles.featureText} style={{marginTop: '0.5rem', textAlign: 'center'}}>ROG, ZenBook & VivoBook Parts</p>
            </div>
            <div className={styles.brandCard}>
              <div className={styles.brandLogo} style={{fontSize: '1.75rem', fontWeight: 700}}>DELL</div>
              <p className={styles.featureText} style={{marginTop: '0.5rem', textAlign: 'center'}}>XPS & Alienware</p>
            </div>
            <div className={styles.brandCard}>
              <div className={styles.brandLogo} style={{fontSize: '1.75rem', fontWeight: 600}}>Lenovo</div>
              <p className={styles.featureText} style={{marginTop: '0.5rem', textAlign: 'center'}}>ThinkPad & Legion</p>
            </div>
            <div className={styles.brandCard}>
              <div className={styles.brandLogo} style={{fontSize: '2rem', fontWeight: 400}}></div>
              <p className={styles.featureText} style={{marginTop: '0.5rem', textAlign: 'center'}}>MacBook Pro & Air</p>
            </div>
            <div className={styles.brandCard}>
              <div className={styles.brandLogo} style={{fontSize: '2rem', fontWeight: 800, fontStyle: 'italic', letterSpacing: '-2px'}}>hp</div>
              <p className={styles.featureText} style={{marginTop: '0.5rem', textAlign: 'center'}}>Spectre & OMEN</p>
            </div>
          </div>
        </section>

        {/* Popular Parts */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Most Requested Upgrades</h2>
          <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto'}}>
             <div style={{background: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)', flex: '1 1 300px', textAlign: 'center', transition: 'box-shadow 0.3s ease'}} className={styles.featureCard}>
                <h4 style={{fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700}}>High Capacity Batteries</h4>
                <p style={{color: 'var(--text-muted)'}}>Revive your runtime hours with our OEM equivalent and extended batteries.</p>
             </div>
             <div style={{background: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)', flex: '1 1 300px', textAlign: 'center', transition: 'box-shadow 0.3s ease'}} className={styles.featureCard}>
                <h4 style={{fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700}}>OLED & IPS Panels</h4>
                <p style={{color: 'var(--text-muted)'}}>Pixel-perfect display replacements for stunning clarity and color.</p>
             </div>
             <div style={{background: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)', flex: '1 1 300px', textAlign: 'center', transition: 'box-shadow 0.3s ease'}} className={styles.featureCard}>
                <h4 style={{fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700}}>NVMe SSDs</h4>
                <p style={{color: 'var(--text-muted)'}}>Drastically reduce load times with Gen4 SSD upgrades up to 4TB.</p>
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.logo} style={{color: 'white', marginBottom: '1.5rem'}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
               Part<span style={{color: 'var(--primary)'}}>Fix</span>
            </div>
            <p style={{color: '#94a3b8', lineHeight: 1.6, maxWidth: '300px'}}>
              Your trusted partner engineered to keep your premium laptops running. Specializing in high-performance hardware.
            </p>
          </div>
          <div>
            <h4 className={styles.footerTitle}>Top Parts</h4>
            <a href="#" className={styles.footerLink}>ASUS ROG Logic Boards</a>
            <a href="#" className={styles.footerLink}>Dell XPS Batteries</a>
            <a href="#" className={styles.footerLink}>Lenovo Keyboards</a>
            <a href="#" className={styles.footerLink}>MacBook Screens</a>
          </div>
          <div>
            <h4 className={styles.footerTitle}>Support</h4>
            <a href="#" className={styles.footerLink}>Installation Guides</a>
            <a href="#" className={styles.footerLink}>Return Policy</a>
            <a href="#" className={styles.footerLink}>Track Order</a>
            <a href="#" className={styles.footerLink}>Contact Us</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © {new Date().getFullYear()} PartFix Ltd. All rights reserved. Designed for performance.
        </div>
      </footer>
    </>
  );
}
