import Link from "next/link";

export const Header:React.FC = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start px-3">
        <img className="w-32" src="./imgs/DapLogo.jpg" alt="" />
      </div>

      <div className="navbar-end">
        <div className="px-3">
          <Link href="/acceuil">Acceuil</Link>
        </div>
        <div className="px-3">
          <Link href="/apropos">A propos</Link>
        </div>
        <div className="px-3">
          <Link href="/produit">Produits</Link>
        </div>
        <div className="px-3">
          <Link href="/pointsventes">Points des ventes</Link>
        </div>
        <div className="px-3">
          <Link href="/contact"> Contact</Link>
        </div>
      </div>
    </header>
  );
}