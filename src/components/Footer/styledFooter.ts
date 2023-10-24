import styled from 'styled-components';

const FooterWrap = styled.footer`
	background: ${({ theme }) => theme.colors.primary};
	padding: 21px 26px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 24px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		gap: 69px;
	}
`;

const LogoWrapper = styled.div`
	width: 49px;
	height: 38px;
	margin: 0 0 16px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		width: 66px;
		height: 51px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		width: 205px;
		height: 217px;
	}
`;
const LogoIcon = styled.img`
	max-width: 100%;
`;

const WrappMenuFooter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		flex-direction: row;
	}
`;
const MenuFooter = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	list-style-type: none;
	font-size: 12px;
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	color: ${({ theme }) => theme.colorText.primary};

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		min-width: 264px;
		font-size: 14px;
	}
`;

const TitleMenu = styled.p`
	font-size: 14px;
	text-transform: uppercase;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 16px;
	}
`;

const FooterLink = styled.a`
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	color: ${({ theme }) => theme.colorText.primary};
	font-size: 12px;
	text-decoration: none;
	cursor: pointer;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 14px;
	}
`;

const IconMenuSocial = styled.img`
	max-width: 24px;
	margin: 0 16px 0 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: 40px;
	}
`;

const IconMenuBank = styled.img`
	max-width: 36px;
	margin: 0 16px 0 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: 48px;
	}
`;

export {
	FooterWrap,
	LogoWrapper,
	LogoIcon,
	WrappMenuFooter,
	MenuFooter,
	TitleMenu,
	IconMenuSocial,
	IconMenuBank,
	FooterLink,
};
