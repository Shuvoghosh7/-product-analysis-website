import React from 'react';

const Blogs = () => {
    return (
        <div>
            <article>
                <p className='text-5xl font-bold'>What is Context API:</p>
                <p className='text-2xl text-justify m-5'>The React Context API is produce global variables that can be passed around and use decrictly.Context API is This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Normally pass data from grandparent to child to parent we use prop drilling.this process we can't not pass data directly to the child.so first pass data from parent then child.So Context API make this process essay.When we use Context API that time no need to pass data by props method  we use directly where we need.Context is also touted as an easier, lighter approach to state management.</p>
            </article>
            <article>
                <p className='text-5xl'>What are Semantic Tag</p>
                <p className='text-2xl text-justify m-5'>A semantic element clearly describes its meaning to both the browser and the developer.Using semantic tags makes your code more readable and easy to understand. When we use semantic tags, this tag tells  what type content this.Like div and span - Tells nothing about its content.but form, table, and article- Clearly defines its content.some semantic tag are ,article,aside,details,figcaption,figure,footer,header,main,mark,nav,section,summary,time.So semantic tag  clearly tells what type of content.</p>
            </article>
        </div>
    );
};

export default Blogs;