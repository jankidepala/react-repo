
import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core'


// eslint-disable-next-line
export function Lazy() {
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
  
        </Grid>
    );
}