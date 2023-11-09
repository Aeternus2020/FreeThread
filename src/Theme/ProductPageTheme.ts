import { ImageListItemBar } from '@mui/material';
import styled from 'styled-components';

const StyleProductNotFound = styled('div')({
	margin: '10% auto',
	textAlign: 'center',
});

const StyleProductMainImg = styled('img')(({ theme }) => ({
	width: 204,
	height: 267,
	margin: 'auto',
	objectFit: 'cover',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		width: 341,
        height: 449,
	},
}));

const StyleProductGallery = styled('div')(({ theme }) => ({
	margin: '24px auto',
	textAlign: 'center',
	display: 'flex',
	maxWidth: 270,
	gap: 12,
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		flexDirection: 'column-reverse',
		maxWidth: 340,
	},
}));

const StyleProductMain = styled('div')(({ theme }) => ({
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		maxWidth: theme.breakpoints.md,
		display: 'flex',
		alignItems: 'flex-start',
	},
}));

const StyleProductThumbnails = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
	maxHeight: 267,
	overflowY: 'auto',
	overflowX: 'hidden',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		flexDirection: 'row',
		maxHeight: 267,
		gap: 14,
		overflowX: 'auto',
		'&::-webkit-scrollbar': {
			background: 'none',
			height: 7,
		},
		'&::-webkit-scrollbar-thumb': {
			background:  theme.colors.secondary,
			borderRadius: 7,
		  },
	},
	'&::-webkit-scrollbar': {
		width: 1,
	},
	'&::-webkit-scrollbar-track': {
		background: 'none',
	},
	'& img': {
		width: 52,
		height: 70,
		objectFit: 'cover',
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			width: 104,
            height: 140,
		},
	},
	'& button': {
		border: 'none',
	},
	'& .selected': {
		opacity: 0.5,
	},
}));

const StyleProductItemBar = styled(ImageListItemBar)(({ theme }) => ({
	'& .MuiImageListItemBar-titleWrap': {
		display: 'flex',
		flexDirection: 'column-reverse',
		gap: 8,
		padding: 0,
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			gap: 12,
		},
	},
	'& .MuiImageListItemBar-subtitle': {
		fontFamily: theme.fontFamily.title,
		fontSize: 16,
		fontWeight: 500,
		lineHeight: '22px',
		letterSpacing: '0.32px',
		textTransform: 'uppercase',
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			fontSize: 20,
			letterSpacing: '0.4px',
		},
	},
	'& .MuiImageListItemBar-title': {
		color: theme.colorText.third,
		fontFamily: theme.fontFamily.text,
		fontWeight: 400,
		fontSize: 14,
		lineHeight: 'normal',
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			fontSize: 18,
		},
	},
}));

const StyleProductSize = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: 5,
	padding: '4px 0px 18px 0',
	color: theme.colors.third,
	fontFamily: theme.fontFamily.text,
	fontSize: 12,
	fontWeight: 400,
	lineHeight: '17px',
	letterSpacing: '0.24px',
}));

const StyleProductWrapper = styled('div')(({ theme }) => ({
	maxWidth: 320,
	margin: '50px auto',
	display: 'flex',
	flexDirection: 'column',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		maxWidth: theme.breakpoints.md,
	},
}));

const StyleProductDescription = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
	width: 270,
	fontWeight: 400,
	margin: 'auto',
	lineHeight: 'normal',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		width: 340,
		margin: '24px auto',
	},
	'& .MuiTypography-h4': {
		color: theme.colorText.third,
		fontFamily: theme.fontFamily.text,
		fontSize: 14,
		letterSpacing: '0.28px',
		textTransform: 'uppercase',
		display: 'flex',
		justifyContent: 'space-between',
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			fontSize: 16,
			letterSpacing: '0.32px',
		},
		'& button': {
			border: 'none',
			backgroundColor: 'transparent',
		},
	},
	'& .MuiTypography-body2': {
		fontSize: 12,
		letterSpacing: '0.24px',
		lineHeight: '20px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		'-webkit-line-clamp': '4',
		'-webkit-box-orient': 'vertical',
		display: '-webkit-box',
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			fontSize: 14,
			letterSpacing: '0.28px',
			lineHeight: '24px',
		},
	},
}));

const StyleProductDescriptionContainer = styled('div')(({ theme }) => ({
	padding: '6px 0',
	borderBottom: '1px solid rgba(0, 0, 0, 0.20)',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		padding: '8px 0',
	},
}));

export {
	StyleProductNotFound,
	StyleProductMainImg,
	StyleProductGallery,
	StyleProductThumbnails,
	StyleProductItemBar,
	StyleProductSize,
	StyleProductWrapper,
	StyleProductDescription,
	StyleProductDescriptionContainer,
	StyleProductMain,
};
