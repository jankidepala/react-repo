import React from 'react';
import { Grid } from '@material-ui/core'
import { Router, Link } from '@reach/router'

// eslint-disable-next-line

const files = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
]
export function Starter() {
    return (
        <Grid>
            <React.Suspense>
                <Router>
                    <Home path="/" />
                </Router>
            </React.Suspense>
        </Grid >
    );
}
const filesAndTitles = files.map(filename => {
    console.log(filename)
    return {
        title: "Title",
        filename
    }
})

const pages = files.reduce((p, filename, index, fullArray) => {
    //  console.log(p, filename, index, fullArray)
    // const final = require(`./exercises-final/${filename}`)
    // Object.assign(final, {
    //   previous: fullArray[index - 1],
    //   next: fullArray[index + 1],
    //   isolatedPath: `/isolated/exercises-final/${filename}`,
    // })
    // const exercise = require(`./exercises/${filename}`)
    // Object.assign(exercise, {
    //   previous: fullArray[index - 1],
    //   next: fullArray[index + 1],
    //   isolatedPath: `/isolated/exercises/${filename}`,
    // })
    p[filename] = {
        //   exercise,
        //   final,
        //   title: final.default.title,
    }
    return p
}, {})
function Home() {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Modern React: Hooks and Suspense</h1>
            <div>
                {filesAndTitles.map(({ title, filename }) => {
                    return (
                        <div key={filename} style={{ margin: 10 }}>
                            {filename}
                            {'>> '}
                            <Link to={`/${filename}`}>{title}</Link>{' '}
                            <small>
                                <Link to={`/${filename}/exercise`}>(exercise)</Link>{' '}
                                <Link to={`/${filename}/final`}>(final)</Link>
                            </small>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

