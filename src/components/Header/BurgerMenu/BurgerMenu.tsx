import React, { FC } from 'react';
import { IconButton, MenuItem, Collapse } from '@mui/material';
import {
	CustomizedMenu,
	CustomLink,
	BtnCatalogLine,
	ArrowRight,
	ArrowDown,
	SubMenuItem,
	CatalogLink,
} from '../../../Theme/BurgerMenuThema';
import openMenu from '../../../images/icon/cancel-menu.webp';
import closeMenu from '../../../images/icon/menu-2.webp';

interface HeaderBurgerMenuProps {
	activeButtonMenu: number;
	openSubMenu: boolean;
	handleActiveButtonMenu: (buttonIndex: number) => void;
	handleOpenSubMenu: () => void;
	toggleActive: () => void;
	handleOpenBurgerMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleCloseBurgerMenu: () => void;
	burgerMenu: null | HTMLElement;
	isActive: boolean;
}

const BurgerMenu: FC<HeaderBurgerMenuProps> = React.memo(
	({
		handleOpenSubMenu,
		openSubMenu,
		toggleActive,
		handleCloseBurgerMenu,
		handleOpenBurgerMenu,
		burgerMenu,
		isActive,
	}) => {
		const openBurgerMenu = Boolean(burgerMenu);

		return (
			<>
				<IconButton
					disableRipple
					id="button-burgerMenu"
					aria-controls={openBurgerMenu ? 'menu-burgerMenu' : undefined}
					aria-haspopup="true"
					aria-expanded={openBurgerMenu ? 'true' : undefined}
					onClick={handleOpenBurgerMenu}
				>
					{!burgerMenu ? (
						<img src={closeMenu} alt="icon menu close" />
					) : (
						<img src={openMenu} alt="icon menu open" />
					)}
				</IconButton>
				<CustomizedMenu
					id="menu-burgerMenu"
					anchorEl={burgerMenu}
					open={openBurgerMenu}
					onClose={handleCloseBurgerMenu}
					MenuListProps={{
						'aria-labelledby': 'button-burgerMenu',
					}}
				>
					<CatalogLink onClick={toggleActive}>
						<MenuItem disableRipple divider onClick={handleOpenSubMenu}>
							<BtnCatalogLine $active={isActive} />
							Каталог
							{!openSubMenu ? <ArrowRight /> : <ArrowDown />}
						</MenuItem>
					</CatalogLink>
					<Collapse in={openSubMenu} timeout="auto" unmountOnExit>
						<SubMenuItem to="/kiev">
							<MenuItem
								disableRipple
								divider
								onClick={() => {
									handleCloseBurgerMenu();
									handleOpenSubMenu();
								}}
							>
								“Сорочки Київщини”
							</MenuItem>
						</SubMenuItem>
						<SubMenuItem to="regions">
							<MenuItem
								disableRipple
								divider
								onClick={() => {
									handleCloseBurgerMenu();
									handleOpenSubMenu();
								}}
							>
								“Регіони України”
							</MenuItem>
						</SubMenuItem>
						<SubMenuItem to="/grandmother">
							<MenuItem
								disableRipple
								divider
								onClick={() => {
									handleCloseBurgerMenu();
									handleOpenSubMenu();
								}}
							>
								“Віднови вишиванку своєї бабусі”
							</MenuItem>
						</SubMenuItem>
						<SubMenuItem to="/accessories">
							<MenuItem
								disableRipple
								divider
								onClick={() => {
									handleCloseBurgerMenu();
									handleOpenSubMenu();
								}}
							>
								Аксесуари
							</MenuItem>
						</SubMenuItem>
					</Collapse>
					<CustomLink to="/about">
						<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
							Про нас
						</MenuItem>
					</CustomLink>
					<CustomLink to="/delivery">
						<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
							Доставка і оплата
						</MenuItem>
					</CustomLink>
					<CustomLink to="/comments">
						<MenuItem divider onClick={handleCloseBurgerMenu}>
							Відгуки
						</MenuItem>
					</CustomLink>
					<CustomLink to="/contacts">
						<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
							Контакти
						</MenuItem>
					</CustomLink>
				</CustomizedMenu>
			</>
		);
	},
);

export default BurgerMenu;
