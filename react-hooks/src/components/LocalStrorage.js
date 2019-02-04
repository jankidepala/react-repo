import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core'


// eslint-disable-next-line
export function LocalStrorage() {
    const [count, setCount] = useState(2)
    const incrementCount = () =>
     setCount(Number(window.localStorage.getItem('count')) + 1)

    useEffect(() => {
        window.localStorage.setItem('count', 345)
    })
    return (
        <Grid item md={12}>
            <div> Counter :: </div>
            <div> {count}</div>
            <Button color="primary" variant="contained"
                onClick={incrementCount}>ADD TO COUNTER</Button>
        </Grid>
    );
}


