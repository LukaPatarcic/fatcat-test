import React from 'react';
import type { GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHtmlAttributes, setHeadComponents }) => {
	setHtmlAttributes({ lang: 'en' });
	setHeadComponents([
		<script
			key="smartlook-sdk"
			type="text/javascript"
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{
				__html: `
					window.smartlook||(function(d) {
					var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
					var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
					c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
					})(document);
					smartlook('init', '4ca12b19e11767fcd93521d617596d63c25d1408', { region: 'eu' });
				`,
			}}
		/>,
	]);
};
