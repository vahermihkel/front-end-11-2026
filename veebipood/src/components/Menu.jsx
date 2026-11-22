import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartSumContext } from "../context/CartSumContext";
import { useTranslation } from 'react-i18next';

function Menu() {
  const {cartSum} = useContext(CartSumContext);
  const { t, i18n } = useTranslation();

  function updateLanguage(newLanguage) {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  }

  return (
    <div>
      <Link to="/">
        <img 
          src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:420,cw:1080,ch:1080,q:80,w:1080/tVUqRyZwGhAbyLsoJYTWx7.jpg" 
          className="logo" 
          alt="Logo" />
      </Link>

      <Link to="/kinkekaardid">
        <button>{t("menu.giftcards")}</button>
      </Link>

      <Link to="/seaded">
        <button>{t("menu.settings")}</button>
      </Link>

      <Link to="/kalkulaator">
        <button>{t("menu.calculator")}</button>
      </Link>

      <Link to="/esindused">
        <button>{t("menu.shops")}</button>
      </Link>

      <Link to="/tooted">
        <button>{t("menu.products")}</button>
      </Link>

      <Link to="/ostukorv">
        <button>{t("menu.cart")}</button>
      </Link>

      <Link to="/tarnija">
        <button>{t("menu.supplier-products")}</button>
      </Link>

      <button onClick={() => updateLanguage("et")} className={i18n.language === "et" ? "language-active" : undefined}>
        Eesti
      </button>
      <button onClick={() => updateLanguage("en")} className={i18n.language === "en" ? "language-active" : undefined}>
        English
      </button>

      <span className="ostukorviSumma">{cartSum.toFixed(2)} €</span>
    </div>
  )
}
export default Menu