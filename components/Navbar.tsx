"use client"; // Ensure it's client-side for event handling

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Get current path for active links

  const menuClickHandler = () => {
    if (navbarRef.current) {
      navbarRef.current.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-md py-0 bg-black">
      <div className="container">
        <button
          className="navbar-toggler ms-auto bg-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarRef}>
          <ul className="navbar-nav">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/resume", label: "Work Experience" },
              { href: "/projects", label: "Blogs / Projects" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href} className="nav-item">
                <Link href={item.href} legacyBehavior>
                  <a className={`nav-link ${pathname === item.href ? "active" : ""}`} onClick={menuClickHandler}>
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;