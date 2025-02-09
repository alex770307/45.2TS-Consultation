import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'

export default function NavBar(): JSX.Element {

    return (
        <nav className={style.navigation}>
            <ul className={style.list}>
                <li className={style.listelement}>
                    <NavLink to="/coctail" className={style.link}>
                        Coctail
                    </NavLink>
                </li>
                <li className={style.listelement}>
                    <NavLink to="/products" className={style.link}>
                        Products
                    </NavLink>
                </li>
                <li className={style.listelement}>
                    <NavLink to="/bitcoin" className={style.link}>
                        Bitcoin
                    </NavLink>
                </li>
                <li className={style.listelement}>
                    <NavLink to="/playground" className={style.link}>
                        Playground
                    </NavLink>
                </li>
                <li className={style.listelement}>
                    <NavLink to="/counter" className={style.link}>
                        Counter
                    </NavLink>
                </li>
                <li className={style.listelement}>
                    <NavLink to="/userspage" className={style.link}>
                        UsersPage
                    </NavLink>
                </li>
                <li className={style.listelement}>
                    <NavLink to="/carshop" className={style.link}>
                        CarShop
                    </NavLink>
                </li>
                <li className={style.listelement}>
                    <NavLink to="/randomdog" className={style.link}>
                        RandomDog
                    </NavLink>
                </li>
                <li className={style.listelement}>
                    <NavLink to="/sandwich" className={style.link}>
                        Sandwich
                    </NavLink>
                </li>
                <li className={style.listelement}>
                    <NavLink to="/postcontainer" className={style.link}>
                        PostContainer
                    </NavLink>
                </li>
                <li className={style.listelement}>
                    <NavLink to="/chucknorris" className={style.link}>
                        ChuckNorris
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}