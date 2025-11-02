import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Ilgar Aydoğan Docs"
      description="Tüm uygulamalar ve projeler için değişiklik günlükleri">
      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Ilgar Aydoğan Değişiklik Günlükleri</h1>
          <p>Tüm iOS, macOS ve web projelerinin güncellemelerini tek yerden takip et.</p>
          <div className={styles.buttons}>
            <Link className="button button--primary" to="/docs/motivasyon-bombasi/">
              🚀 Uygulamalara Git
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
