import { FC } from "react";

interface CardPhoneProps {
	image: {
		src: string;
		alt: string;
	};
	link: string;
	title: string;
	isHot?: boolean;
}

const CardPhone: FC<CardPhoneProps> = ({ image, title, link, isHot }) => {
	return (
		<div className='p-3 bg-white shadow-2xl rounded-lg relative'>
			<div className='overflow-hidden'>
				<img
					src={image?.src}
					alt={image?.alt}
					className='hover:scale-110 transition duration-500'
				/>
			</div>

			<div className='w-full text-center '>
				<span className='font-semibold text-xl hover:underline'>
					<a href={link}>{title}</a>
				</span>
			</div>
			{isHot ? (
				<span className='bg-red-500 text-white absolute top-5 left-5 px-2 py-1 rounded-md'>
					Hot
				</span>
			) : null}
		</div>
	);
};

export default CardPhone;
