import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core'


// eslint-disable-next-line


function useCounter(initialState = 0) {
    const [count, setCount] = useState(initialState);
    const incrementCount = () => setCount(count + 1);
    return [count, incrementCount, 'asfsfds']
}

export function Customhooks() {
    const [count, incrementCount] = useCounter(5)
    console.log(useCounter(5))
    return (
        <Grid item md={12}>
            <div> Counter :: </div>
            <div> {count}</div>
            <Button color="primary" variant="contained"
                onClick={incrementCount}>ADD TO COUNTER</Button>
        </Grid>
    );
}


