import React from 'react';

export async function getStaticProps(ctx) {

    const date = await fetch('http://worldtimeapi.org/api/timezone/Europe/Amsterdam');
    const response = await date.json();


    return {
        props:{
            response
        }
    }
}

function Test({response}) {
  return (
    <div><pre>{JSON.stringify(response,null,5)}</pre></div>
  )
}

export default Test