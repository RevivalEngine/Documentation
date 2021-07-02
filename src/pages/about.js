import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

export default function About() {
	return (
		<Layout title={`About`} description="Features of the RevivalEngine">
			<main>
				<HomepageFeatures />
				<div>
					<div className={clsx("hero hero--primary", styles.heroBanner)}>
						<div className="container">
							<h1 className="hero__title">Features</h1>
							<ul>
								<li>
									Powerful: Render 2D or 3D graphics via the well-established{" "}
									<a class="contrasted-link" href="https://babylonjs.com/" target="blank">
										BabylonJS
									</a>{" "}
									engine
								</li>
								<li>
									Convenient: Write lower-level code yourself, or rely on the high-level scripting API
								</li>
								<li>
									Accessible: Keep things as simple as possible, until you're ready to dive in deeper
								</li>
								<li>
									Flexible: Extend the platform with addons that gain full access to engine internals
								</li>
								<li>Cross-platform: Deploy your app on Windows, Mac OS, or Linux-based systems</li>
							</ul>
							<p className="hero__subtitle">
								<a class="contrasted-link" href="/docs/intro">For more details, check out the documentation!</a>
							</p>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}
