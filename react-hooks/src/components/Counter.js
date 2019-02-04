import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core'


// eslint-disable-next-line
export function Counter({ courses }) {
    console.log(courses)
    const [count, setCount] = useState(2)
    const incrementCount = () => setCount(count + 1)

    return (
        <Grid>
            <Grid item md={12}>
                <div> Counter :: </div>
                <div> {count}</div>
                <Button color="primary" variant="contained"
                    onClick={incrementCount}>ADD TO COUNTER</Button>
            </Grid>
        </Grid >
    );
}


Counter.title = 'Counter: useState'


