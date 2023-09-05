<p align="center">
	<a href="https://fatcatcoders.com">
		<img alt="FatCat Coders" src="https://fatcatcoders.com/favicon.svg" width="60" />
	</a>
</p>
<h1 align="center">
	FatCat Coders Website
</h1>

## 🚀 Quick start

1. **Make sure you have the proper node version**

	```shell
	nvm use # should be 18.16.0
	```

2. **Install packages**

	Clone this project and then navigate into your new site’s directory and install dependencies using Yarn.

	```shell
	yarn install
	```

3. **Add Contentful.**

   Create `.env.production` and `.env.development` with same variables from `env.dist` with your sit data

	```shell
	# Site
	SITE_URl=https://****my-new-site.com****
	SITE_NAME=**** My New Site ****
	SITE_SHORT_NAME=**** MNS ****
	
	# Contentful
	CONTENTFUL_SPACE_ID=****spaceID****
	CONTENTFUL_ACCESS_TOKEN=****accessToken****
	CONTENTFUL_HOST=preview.contentful.com # only required in development
	
	# Tracking
	GOOGLE_ANALYTICS_KEY=****GTG_Key****
	
	# Gatsby
	ENABLE_GATSBY_REFRESH_ENDPOINT=true # only required in development
	
	# Blog
	POSTS_PER_PAGE=6
	```

4. **Run locally.**

	Start your site locally

	```shell
	yarn dev
	```
	or build your site and then run your build locally

	```shell
	yarn build
	yarn serve
	```

5. **Open the code and start customizing!**

	Your site is now running at http://localhost:8000!
	
	Edit `src/pages/index.tsx` to see your site update in real-time!

6. **Learn more**

   - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
   - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
   - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
   - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
   - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
   - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
