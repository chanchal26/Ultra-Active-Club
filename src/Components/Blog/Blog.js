import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='Blog'>
            <h1>Blog</h1>

            <div>
                <h3>-- How does ReactJS work ?</h3>
                <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components
                    work
                    similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's
                    possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h3>-- What is the difference between state and props in React?</h3>
                <p>Ans: State is the local state of the component which cannot be accessed and modified outside of the
                    component.
                    It's equivalent to local variables in a function. Props, on the other hand, make components reusable by
                    giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div>
                <h3>-- What does useEffect () hook do in React?</h3>
                <p>Ans: The useEffect Hook allows you to perform side effects in your components. Some examples of side
                    effects
                    are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second
                    argument is optional.</p>
            </div>
        </div>
    );
};

export default Blog;