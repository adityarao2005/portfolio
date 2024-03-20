import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { Artwork } from "@/models/models";
import { getArtwork } from "@/models/datastore";

function ArtCard(props: {
	art: Artwork;
	visible: boolean;
	onClick: () => void;
}) {
	return (
		<div
			className={
				"p-2 rounded bg-white m-2 hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-95 duration-200 max-w-96 " +
				(props.visible ? "block" : "hidden")
			}
			onClick={props.onClick}
		>
			<div className='flex flex-col'>
				<img
					src={props.art.image}
					className='h-96 object-contain object-center'
				/>
				{props.art.name && <div>Name: {props.art.name}</div>}
				{props.art.completionDate && (
					<div>Date Completed: {props.art.completionDate}</div>
				)}
				{props.art.type && <div>Type: {props.art.type}</div>}
				{props.art.description && (
					<div>Description: {props.art.description}</div>
				)}
			</div>
		</div>
	);
}

function ArtworkViewModel(props: {
	visible: boolean;
	toggleVisibility: () => void;
	artwork?: Artwork;
}) {
	return (
		<Modal
			visible={props.visible}
			toggleVisibility={props.toggleVisibility}
		>
			{props.artwork && (
				<div
					className={
						"flex h-full flex-col md:" +
						(props.artwork.orientation == "landscape"
							? "flex-col"
							: "flex-row")
					}
				>
					<div className='w-32 flex flex-col'>
						{props.artwork.name && (
							<div>Name: {props.artwork.name}</div>
						)}
						{props.artwork.completionDate && (
							<div>
								Date Completed: {props.artwork.completionDate}
							</div>
						)}
						{props.artwork.type && (
							<div>Type: {props.artwork.type}</div>
						)}
						{props.artwork.description && (
							<div>Description: {props.artwork.description}</div>
						)}
					</div>
					<div className='flex-1 relative'>
						<img
							src={props.artwork.image}
							className='w-10/12 object-center object-contain mx-auto drop-shadow-2xl border-t-2 shadow-xl border-t-slate-100'
						/>
					</div>
				</div>
			)}
		</Modal>
	);
}

export default function ArtworkFragment() {
	// Main fragment for the projects page
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [selectedArt, setSelectedArt] = useState<Artwork>();
	const [shownArt, setShownArt] = useState<number>(6);
	const [artworks, setArtworks] = useState<Artwork[]>([]);

	const toggleVisibility = (art?: Artwork) => {
		setModalVisible(!modalVisible);
		setSelectedArt(art);
	};

	useEffect(() => {
		getArtwork().then((data) => setArtworks(data));
	}, []);

	return (
		<div
			id='artwork'
			className='w-screen h-fit flex-1 bg-black p-10 relative'
		>
			<ArtworkViewModel
				visible={modalVisible}
				toggleVisibility={() => toggleVisibility()}
				artwork={selectedArt}
			/>
			<div className='my-10'>
				<h1
					className={
						"text-center mx-auto text-white text-3xl md:text-6xl font-semibold font-['Poppins']"
					}
				>
					Artwork
				</h1>

				<div className='p-2 mt-4 flex flex-wrap justify-center'>
					{artworks.map((art, index) => (
						<ArtCard
							art={art}
							key={index}
							visible={index < shownArt}
							onClick={() => toggleVisibility(art)}
						></ArtCard>
					))}
				</div>

				{shownArt < artworks.length && (
					<div className='p-5 flex flex-row'>
						<div className='flex-1 h-[1px] my-auto bg-white' />
						<button
							className='px-2 text-white'
							onClick={() => setShownArt(shownArt + 6)}
						>
							<div className='inline-block -rotate-90'>&lt;</div>{" "}
							Load More
						</button>
						<div className='flex-1 h-[1px] my-auto bg-white' />
					</div>
				)}
			</div>
		</div>
	);
}
