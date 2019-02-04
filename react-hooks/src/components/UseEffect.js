
import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core'


// eslint-disable-next-line
export function UseEffect() {
    const [random, setRandom] = useState(2);
    const [mounted, setMounted] = useState(true);

    const reRender = () => setRandom(Math.random());
    const toggle = () => setMounted(!mounted);

    //called after every render
    useEffect(() => {
        return () => console.log('unmounting')
        //componentWillMount - calls a function from here
    })
    return (
        <Grid item md={12}>
            <div> Toggle UseEffect :: </div>
            <Button color="primary" variant="contained"
                onClick={reRender}>RERENDER</Button>
            <Button color="secondary" 
                onClick={toggle}>TOGGLE</Button>
            <div> {mounted && <LifecycleDemo />}</div>
        </Grid>
    );
}

function LifecycleDemo() {
    // It takes a function
    useEffect(() => {
        // This gets called after every render, by default
        // (the first one, and every one after that)
        console.log("render!");

        // If you want to implement componentWillUnmount,
        // return a function from here, and React will call
        // it prior to unmounting.
        return () => console.log("unmounting...");
    });

    return "I'm a lifecycle demo";
}


