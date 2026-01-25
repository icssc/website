/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["geist"],
	output: "export",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
