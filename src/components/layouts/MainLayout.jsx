import Head from "next/head";

import { APP_CONSTANTS } from "@constants/index";
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";
import WhatsApp from "@components/whatsapp/WhatsApp";

import styles from "@styles/layouts/MainLayout.module.scss";

export default function MainLayout({
  children,
  footerData,
  headerData,
  isOurTestPage,
}) {
  return (
    <div className={`${isOurTestPage && styles.isOurTestPage}`}>
      <Head>
        <title>{APP_CONSTANTS.TITLE_PAGE}</title>
      </Head>

      <Nav
        navLinks={headerData.navLinks}
        socialMediaButtonsColors={headerData.socialMediaButtonsColors}
        socialMediaLinks={headerData.socialMediaLinks}
      ></Nav>

      <main className={styles.mainWrapper}>{children}</main>

      <Footer footerData={footerData}></Footer>

      <WhatsApp url={footerData.whatsAppUrl} />
    </div>
  );
}
