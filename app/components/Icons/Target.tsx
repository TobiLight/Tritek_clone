import * as React from "react";

function IconTarget(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
			<path fill="currentColor" d="M7 7.5a.5.5 0 111 0 .5.5 0 01-1 0z" />
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M7.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
				clipRule="evenodd"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM3 7.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

export default IconTarget;