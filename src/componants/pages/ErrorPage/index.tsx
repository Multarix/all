import React from "react";
import "./style.css";

const svgLogo = "m 64.554075,79.968756 9.907801,8.095431 c 3.672875,3.00101 9.071077,2.514557 12.148353,-1.094748 L 98.657838,72.838741 c 0.441607,-0.517781 1.098309,-0.801469 1.777842,-0.768222 0.67954,0.03334 1.30519,0.379955 1.69336,0.93838 l 8.7673,12.596171 c 0.0996,0.142392 0.10686,0.329356 0.0183,0.47878 l -17.434612,29.62878 c -0.38233,0.65031 -0.49038,1.42575 -0.300311,2.15552 0.190069,0.72886 0.662639,1.35268 1.313496,1.73355 l 8.730027,5.10565 c 1.35725,0.79371 3.09993,0.33795 3.89364,-1.01839 l 13.73321,-23.45861 c 0.032,-0.0539 0.0886,-0.0877 0.1507,-0.0904 0.0621,-0.003 0.12147,0.0265 0.1571,0.0776 l 14.10585,20.06549 c 0.93436,1.32893 2.71266,1.75182 4.14572,0.98551 l 7.82836,-4.18773 c 0.6357,-0.33977 1.09603,-0.9371 1.26409,-1.63856 0.16714,-0.70237 0.0265,-1.4431 -0.38726,-2.03404 L 129.24016,86.453942 c -0.0995,-0.142027 -0.10686,-0.328899 -0.0192,-0.478416 l 17.62136,-29.974849 c 0.369,-0.627567 0.45577,-1.381724 0.23839,-2.076513 -0.21738,-0.694698 -0.7179,-1.265271 -1.37826,-1.570788 l -9.20296,-4.25596 c -1.46502,-0.67771 -3.20588,-0.133076 -4.02333,1.25906 l -13.18793,22.452275 c -0.032,0.05361 -0.0886,0.08759 -0.15071,0.09015 -0.0621,0.0025 -0.12147,-0.02685 -0.15709,-0.07782 l -12.31111,-17.55651 c -1.14627,-1.634814 -3.00221,-2.6269 -4.9988,-2.67202 -1.995681,-0.04503 -3.894546,0.862207 -5.113601,2.44359 L 84.852112,69.220303 c -1.335873,1.732908 -3.339957,2.822724 -5.520592,3.002015 -2.180544,0.1792 -4.335788,-0.568563 -5.936716,-2.059981 L 62.0397,59.583677 c -1.440361,-1.341901 -3.440151,-1.905259 -5.369157,-1.512516 -1.928915,0.392651 -3.549389,1.692995 -4.350401,3.491208 L 26.67295,119.1295 c -0.639805,1.4367 0.0044,3.1191 1.439448,3.76119 l 9.062491,4.05347 c 1.436159,0.64209 3.121391,0.003 3.769599,-1.43123 L 61.178406,80.761091 c 0.279852,-0.618889 0.831336,-1.072644 1.492605,-1.227823 0.661269,-0.155179 1.357063,0.0058 1.883064,0.435488 z";

export default function ErrorPage() {
	return (
		<div className="centered">

			<div className="logo-container">
				<svg className="error-logo" width="100%" height="100%" viewBox="0 0 175 175">
					<circle id="circlePath" cx="87.5" cy="87.5" r="83.5"></circle>
					<path id="logoPath" d={svgLogo}></path>
				</svg>
			</div>

			<h1 className="error-title">Oh Noes!</h1>
			<p>It looks like something went wrong!</p>
			<p className="error-desc">
				<i>404 Not Found</i>
			</p>
		</div>
	);
}