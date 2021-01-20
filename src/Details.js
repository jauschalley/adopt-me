import React from 'react';

const Details = (props) => {
  // neat trick to see everything coming in through the router
  return <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
}

export default Details;