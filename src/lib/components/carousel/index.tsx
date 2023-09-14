import type { FlexProps } from '@chakra-ui/react';
import { Flex, IconButton, Image } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useConnectBanner } from 'lib/services/api/banners';

import './styles.css';

type CarouselProps = {
	images: Array<string>;
	wrapperProps?: FlexProps;
	id?: string;
};

const prevButtonClass = 'carousel-button-prev';
const nextButtonClass = 'carousel-button-next';

const Carousel = ({ wrapperProps, id }: CarouselProps) => {
	const [banner, setBanner] = useState<string[]>([]);
	const getCharacter = async (i: number) => {
		try {
			const res = await useConnectBanner(i);
			if (res.content) {
				setBanner((prevState: any) => [...prevState, res.content]);
			}
			return res.content;
		} catch (error) {
			return null;
		}
	};

	useMemo(() => {
		const ids = Array.from({ length: 5 }, (v, k) => k + 1);
		Promise.all(ids.map((id) => getCharacter(id)));
	}, []);

	return (
		<Flex
			maxWidth={{ md: 1000 }}
			overflow="hidden"
			marginTop={{ base: -8, md: -12 }}
			alignItems="center"
			justifyContent="center"
			{...wrapperProps}
		>
			<IconButton
				id={`${id}-carousel-prev-btn`}
				aria-label="prev"
				backgroundColor="orange.500"
				_hover={{ bg: 'orange.600' }}
				color="white"
				icon={
					<FiArrowLeft
						size={24}
						fontWeight={700}
					/>
				}
				className={prevButtonClass}
				zIndex={2}
				marginRight={-10}
				display={{ base: 'none', md: 'inherit' }}
			/>

			{/* <Swiper
				id={`${id}-carousel-swiper`}
				modules={[Autoplay, Navigation, Pagination]}
				loop
				autoplay={{ delay: 5000 }}
				navigation={{
					prevEl: `.${prevButtonClass}`,
					nextEl: `.${nextButtonClass}`,
				}}
				pagination={{ clickable: true }}
				spaceBetween={12}
			>
				{banner?.map((ban, key) => (
					// eslint-disable-next-line react/no-array-index-key
					<SwiperSlide
						id={`${id}-carousel-swiper-slide-${key}`}
						key={`banner-${key}`}
					>
						<Image
							src={`data:image/png;base64,${ban}`}
							borderRadius={{ md: 16 }}
							boxShadow="0px 8px 16px -8px #FCECE2"
						/>
					</SwiperSlide>
				))}
			</Swiper> */}

			<IconButton
				id={`${id}-carousel-next-btn`}
				aria-label="next"
				bg="orange.500"
				width={12}
				_hover={{ bg: 'orange.600' }}
				color="white"
				icon={
					<FiArrowRight
						size={24}
						fontWeight={700}
					/>
				}
				className={nextButtonClass}
				marginLeft={-10}
				zIndex={2}
				display={{ base: 'none', md: 'inherit' }}
			/>
		</Flex>
	);
};

export default Carousel;
