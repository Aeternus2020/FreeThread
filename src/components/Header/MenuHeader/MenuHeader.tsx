import React, { FC, useState } from 'react';
import { MenuItem } from '@mui/material';
import { WrapperMenu, CustomMenu, CustomLink, MenuButton } from '../../../Theme/MenuThema';

interface HeaderMenuProps {
	activeButtonMenu: number;
	handleActiveButtonMenu: (buttonIndex: number) => void;
}

const MenuHeader: FC<HeaderMenuProps> = React.memo(
	({ activeButtonMenu, handleActiveButtonMenu }) => {
		const [catalog, setCatalog] = useState<null | HTMLElement>(null);
		const openCatalog = Boolean(catalog);

		const handleClickBayer = (event: React.MouseEvent<HTMLButtonElement>) => {
			setCatalog(event.currentTarget);
		};
		const handleCloseBayer = () => {
			setCatalog(null);
		};

		return (
			<WrapperMenu>
				<CustomLink onClick={() => handleActiveButtonMenu(1)} to="/">
					<MenuButton
						id="MenuButton-bayer"
						aria-controls={openCatalog ? 'menu-bayer' : undefined}
						aria-haspopup="true"
						aria-expanded={openCatalog ? 'true' : undefined}
						onClick={handleClickBayer}
						$active={activeButtonMenu === 1}
						disableRipple
					>
						каталог
					</MenuButton>
					<CustomMenu
						id="menu-bayer"
						anchorEl={catalog}
						open={openCatalog}
						onClose={handleCloseBayer}
						MenuListProps={{
							'aria-labelledby': 'MenuButton-catalog',
						}}
					>
						<CustomLink to="/kiev">
							<MenuItem disableRipple divider onClick={handleCloseBayer}>
								“Сорочки Київщини”
							</MenuItem>
						</CustomLink>
						<CustomLink to="regions">
							<MenuItem disableRipple divider onClick={handleCloseBayer}>
								“Регіони України”
							</MenuItem>
						</CustomLink>
						<CustomLink to="/grandmother">
							<MenuItem disableRipple divider onClick={handleCloseBayer}>
								“Віднови вишиванку своєї бабусі”
							</MenuItem>
						</CustomLink>
						<CustomLink to="/accessories">
							<MenuItem disableRipple divider onClick={handleCloseBayer}>
								Аксесуари
							</MenuItem>
						</CustomLink>
					</CustomMenu>
				</CustomLink>
				<CustomLink to="/about">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 2}
						onClick={() => handleActiveButtonMenu(2)}
					>
						про нас
					</MenuButton>
				</CustomLink>
				<CustomLink to="/delivery">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 3}
						onClick={() => handleActiveButtonMenu(3)}
					>
						доставка і оплата
					</MenuButton>
				</CustomLink>
				<CustomLink to="/comments">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 4}
						onClick={() => handleActiveButtonMenu(4)}
					>
						відгуки
					</MenuButton>
				</CustomLink>
				<CustomLink to="/">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 5}
						onClick={() => handleActiveButtonMenu(5)}
					>
						контакти
					</MenuButton>
				</CustomLink>
			</WrapperMenu>
		);
	},
);

export default MenuHeader;
