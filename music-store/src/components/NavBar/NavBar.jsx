import CartWidget from '../CartWidget/CartWidget.jsx';
import burgerMenu from './burger-icon.png';
import Title from '../Title/Title';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
		<header className="headerNavbarContainer">
			<Title />
			<nav className="headerNavbar">
				<div className="headerNavbarBurger">
					<NavLink 	to='/'	
										className="headerNavbarBurgerLink"
					>
						<img 	className="headerNavbarBurgerLinkImg" 
									src={burgerMenu} 
									alt="Icono menu hamburguesa"
						/>	
					</NavLink>
				</div>
				<ul className="headerNavbarList">
					<li className="headerNavbarListItem">
						<NavLink	to="/category/rock"
											className={( {isActive} ) => isActive ? 'headerNavbarListItemLink--active' : 'headerNavbarListItemLink'}				
						>
							Rock
						</NavLink>
					</li>
					<li className="headerNavbarListItem">
						<NavLink	to="/category/cumbia"
											className={( {isActive} ) => isActive ? 'headerNavbarListItemLink--active' : 'headerNavbarListItemLink'}
						>
							Cumbia
						</NavLink>
					</li>
					<li className="headerNavbarListItem">
						<NavLink	to="/category/pop"
											className={( {isActive} ) => isActive ? 'headerNavbarListItemLink--active' : 'headerNavbarListItemLink'}
						>
							Pop
						</NavLink>
					</li>
					<li className="headerNavbarListItem">
						<NavLink	to="/category/rap"
											className={( {isActive} ) => isActive ? 'headerNavbarListItemLink--active' : 'headerNavbarListItemLink'}
						>
							Rap
						</NavLink>
					</li>
					<li className="headerNavbarListItem">
						<NavLink	to="/category/others"
											className={( {isActive} ) => isActive ? 'headerNavbarListItemLink--active' : 'headerNavbarListItemLink'}
						>
							Otros
						</NavLink>
					</li>
				</ul>
			</nav>
				<CartWidget />
		</header>
  )
}

export default NavBar;
