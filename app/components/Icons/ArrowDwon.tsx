import * as React from "react";

function IconArrowDownSLine(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
		</svg>
	);
}

export default IconArrowDownSLine;