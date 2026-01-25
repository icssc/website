import { BitsAndBytesBody } from "@/components/bits-and-bytes/bits-and-bytes-body";
import { BitsAndBytesTimeline } from "@/components/bits-and-bytes/bits-and-bytes-timeline";
import { PageContainer } from "@/components/shared/page-container";
import { PageHeading } from "@/components/shared/page-heading";

export default function Page() {
	return (
		<PageContainer>
			<PageHeading
				title="Bits and Bytes Program"
				subtitle="Bits & Bytes is a year long mentorship program helping new ICS students transition to life at UCI through organized socials! Group leaders, aka Bytes, will guide and provide a tight-knit community at UCI for incoming freshmen and transfers, aka Bits."
			/>
			<BitsAndBytesBody />
			<BitsAndBytesTimeline />
		</PageContainer>
	);
}
