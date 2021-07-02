import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">
					Welcome to the {siteConfig.title}!
				</h1>
				<p className="hero__subtitle">
					{siteConfig.tagline}
				</p>
				<p>
					<a class="contrasted-link" href="/about/">
						If you're new: Click here to learn more about the project!
					</a>
				</p>
				<div className={styles.buttons} id="landing-page-button-container">
					<Link className="button landing-page-button button--secondary button--lg" to="/docs/tutorials">
						<h1>Tutorials</h1>
						Get started in minutes.
					</Link>

					<Link className="button landing-page-button button--secondary button--lg" to="/docs/recipes">
						<h1>Recipes</h1>
						Learn how to solve common problems.
					</Link>

					<Link className="button landing-page-button button--secondary button--lg" to="/docs/concepts">
						<h1>Concepts</h1>
						Understand how stuff works.
					</Link>

					<Link className="button landing-page-button button--secondary button--lg" to="/docs/references">
						<h1>References</h1>
						Look up technical details.
					</Link>

					<div className="socials-container">
						Need something else?
						<br />
						<a class="contrasted-link" href="https://discord.gg/QMbSGen9uc" target="blank">
							Let us know on Discord!
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	return (
		<Layout title={`Welcome`} description="Documentation for the RevivalEngine">
			<HomepageHeader />
			<main />
		</Layout>
	);
}
