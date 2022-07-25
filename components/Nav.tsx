type NavProps = {
    forHome: boolean;
};

const Nav = ({ forHome }: NavProps) => {
    return (
        <nav className="navbar bg-gray-800 text-white sticky top-0 z-50">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">
                    DimensionalDragon
                </a>
            </div>
            {forHome ? (
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <a href="#welcome-section">About Me</a>
                        </li>
                        <li>
                            <a href="#projects">My Projects</a>
                        </li>
                        <li>
                            <a href="#contacts">Contact Me</a>
                        </li>
                    </ul>
                </div>
            ) : (
                <div></div>
            )}
        </nav>
    );
};

export default Nav;
