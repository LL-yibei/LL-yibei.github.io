import React from 'react';
import Layout from "@theme/Layout";

const Hello = () => (
	<Layout title="Hello" description="Hello React Page">
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '50vh',
				fontSize: '20px',
			}}>
			<p>
				Create new page
			</p>
		</div>
	</Layout>
);

export default Hello;