/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationRenderItemParams } from '@mui/material';
import { filterProducts } from '../Main/getProducts';
import { RootState } from '../../redux/store/store';
import { Product } from '../../redux/slices/productsSlice';
import { CollectionItem, CollectionState } from '../../redux/slices/collectionSlice';
import LoadingAnimation from '../../components/Loading';
import ProductItem from '../../components/Hits/productItem';
import PageNotFound from '../NotFoundPage';
import { RightArrow, LeftArrow, DividerIcon } from '../../components/Collection/arrows';

import {
	StyledCollectionWrapper,
	StyleCollectionImageWrapper,
	StyleCollectionImg,
	StyleCollectionProducts,
} from '../../Theme/CollectionTheme';
import { StyleTypography, StyleImageList } from '../../Theme/HitsTheme';
import {
	StyleCollectionPageMain,
	StylePaginationBox,
	StylePaginationButton,
	StyleSquare,
	StyleStar,
	StyleTitleCollectionPage,
} from '../../Theme/CollectionPageTheme';

const CollectionPage = () => {
	const { id } = useParams<{ id: string | undefined }>();
	const idColl = useSelector((state: RootState) => state.collection) as CollectionState;
	const [currentPage, setCurrentPage] = useState(1);
	const productsArrayAll: Product[] = useSelector(
		(state: RootState) => (state.products.products || []) as Product[],
	);
	const loadingCollection: boolean = useSelector(
		(state: RootState) => state.collection.isLoadingCollection,
	);
	const [productsPerPage, setProductsPerPage] = useState<number>(16);
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const collectionItem = idColl[id] as CollectionItem;
	const collectionsProducts = collectionItem?.collectionProducts as Product[];
	const total = collectionsProducts?.length;
	const countPagination = total ? Math.ceil(total / productsPerPage) : 0;
	const startIndex = (currentPage - 1) * productsPerPage;
	const endIndex = currentPage * productsPerPage;

	const productsSliced = collectionsProducts?.slice(startIndex, endIndex);

	const handleScrollAndResize = () => {
		if (window.innerWidth >= 768) {
			setProductsPerPage(8);
			console.log(productsPerPage);
		} else {
			setProductsPerPage(16);
			console.log(productsPerPage);
		}
	};

	useEffect(() => {
		setCurrentPage(1);
	}, []);

	useEffect(() => {
		if (productsArrayAll.length <= 0) {
			filterProducts();
		}
	}, [dispatch]);

	useEffect(() => {
		window.addEventListener('resize', handleScrollAndResize);
		handleScrollAndResize();
		return () => {
			window.removeEventListener('resize', handleScrollAndResize);
		};
	}, []);

	if (!id || !collectionItem) {
		return <PageNotFound />;
	}

	return loadingCollection ? (
		<LoadingAnimation />
	) : (
		<StyledCollectionWrapper className="collectionPage">
			<StyleTitleCollectionPage>
				<StyleSquare> </StyleSquare>
				<StyleTypography variant="h4" className="collectionPageTitle" gutterBottom>
					&ldquo;
					{collectionItem.title}
					&rdquo;
				</StyleTypography>
				<StyleStar>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						className="collectionPageStar"
					>
						<path
							d="M7.2 16H8.8C8.8 12.0296 12.0304 8.8 16 8.8V7.2C12.0304 7.2 8.8 3.9704 8.8 0H7.2C7.2 3.9704 3.9696 7.2 0 7.2V8.8C3.9696 8.8 7.2 12.0296 7.2 16Z"
							fill="#C77A54"
						/>
					</svg>
				</StyleStar>
			</StyleTitleCollectionPage>
			<StyleCollectionImageWrapper className="collectionPageMain">
				<StyleCollectionImg
					src={collectionItem.img}
					alt={id}
					loading="lazy"
					className="mainImage_page"
				/>
				<StyleCollectionPageMain>
					<StyleTypography variant="body1" className="collectionPageSpan" gutterBottom>
						{collectionItem.description}
					</StyleTypography>
				</StyleCollectionPageMain>
			</StyleCollectionImageWrapper>
			<StyleCollectionProducts>
				<StyleImageList style={{ gap: 'auto' }} className="collectionPage">
					{productsSliced.map((item: Product) => (
						<ProductItem item={item} badge="Новинка" key={item.id} />
					))}
					<StylePaginationBox>
						<Pagination
							sx={{ margin: '40px auto' }}
							count={countPagination}
							color="primary"
							page={currentPage}
							renderItem={(item: PaginationRenderItemParams) => {
								if (item.type === 'page') {
									if (item.page === currentPage || item.page === countPagination) {
										if (item.page === currentPage) {
											return (
												<StylePaginationButton>
													0
													<PaginationItem
														component="button"
														slots={{ previous: LeftArrow, next: RightArrow }}
														{...item}
														onClick={() => {
															setCurrentPage(item.page);
														}}
													/>
													<DividerIcon />
													{item.page === countPagination ? (
														<StylePaginationButton className="countPagination1">
															0
															<PaginationItem
																component="button"
																{...item}
																onClick={() => {
																	setCurrentPage(item.page);
																}}
															/>
														</StylePaginationButton>
													) : null}
												</StylePaginationButton>
											);
										}
										return (
											<StylePaginationButton className="countPagination2">
												0
												<PaginationItem
													component="button"
													slots={{ previous: LeftArrow, next: RightArrow }}
													{...item}
													onClick={() => {
														setCurrentPage(item.page);
													}}
												/>
											</StylePaginationButton>
										);
									}
								} else if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
									return null;
								} else {
									return (
										<PaginationItem
											component="button"
											slots={{ previous: LeftArrow, next: RightArrow }}
											{...item}
											onClick={() => {
												setCurrentPage(item.page);
											}}
										/>
									);
								}
							}}
						/>
					</StylePaginationBox>
				</StyleImageList>
			</StyleCollectionProducts>
		</StyledCollectionWrapper>
	);
};

export default CollectionPage;
