import Image from "next/image";

const forge: string = String.raw`https://files.minecraftforge.net/net/minecraftforge/forge/`;
const skyblock: string = String.raw`https://wiki.hypixel.net/Introduction`;
const skyblock_gh: string = String.raw`https://github.com/MrPineapple070/SkyBlock-1.19.2`;

export default function Skyblock() {
	return (
		<div>
			<a href="#skyblock" className="skip-link">
				Skip to Hypixel SkyBlock
			</a>
			<h2 className="h2" role="heading" aria-level={2}>
				SkyBlock Minecraft Mod
			</h2>
			<div className="skyblock">
				<Image
					className="logo_left"
					src="/assets/images/SkyBlock.jpg"
					alt="Hypixel SkyBlock"
					width={3840}
					height={2160}
					priority={false}
					loading="eager"
				/>
				<p className="sb">
					Another personal project I developed was a Minecraft Mod.
					<br />
					This projects attempts to emulate the functionality seen in
					Hypixel&apos;s SkyBlock.
					<br />
					This project assisted me in learning about working with
					existing code and adding modifications ontop of it.
					<br />
					This also assisted me in learning client-side and
					server-side programming and allocate tasks to each
					accordingly.
					<br />
					<br />
					This mod was developed using Forge as a framework.
					<br />
					Learn more about <a href={forge}>Minecraft Forge </a>.
					<br />
					<br />
					This project also helped me understand maintaining a
					standard already established.
					<br />
					For example image file formats, renduring of models, and the
					generation of loot tables were standardized within the code.
					<br />
					<br />
					<a href={skyblock}>More information about SkyBlock.</a>
					<br />
					The <a href={skyblock_gh}>source code</a> for this can be
					found .<br />
					<br />
					<Image
						className="logo"
						src="/assets/images/Forge_Logo.png"
						alt="Minecraft Forge"
						width={200}
						height={200}
					/>
				</p>
			</div>
		</div>
	);
}
