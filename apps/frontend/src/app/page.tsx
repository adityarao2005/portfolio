"use client";
import AboutFragment from "@/fragments/AboutFragment";
import ArtworkFragment from "@/fragments/ArtworkFragment";
import ContactMeFragment from "@/fragments/ContactMeFragment";
import HomeFragment from "@/fragments/HomeFragment";
import ProjectFragment from "@/fragments/ProjectFragment";

export default function Home() {
	return (
		<div className='dark:text-black'>
			<HomeFragment />
			<AboutFragment />
			<ProjectFragment />
			<ArtworkFragment />
			<ContactMeFragment />
		</div>
	);
}
