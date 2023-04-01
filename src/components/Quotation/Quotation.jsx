import React from 'react';
import './Quotation.css';

const Quotation = () => {
    return (
        <div className="container">
            <div className='card mt-5' style={{ background: 'rgba(17, 17, 17, 0.05)' }}>
                <h2 className='p-5'> 1) who to difference props and state in react..?</h2>

                <p className='p-5 pt-0' style={{ fontSize: '18px' }}>We can pass the data between the components using Props and State. So, let us know how we can pass the data using props and state and understand the difference between the two.
                    We will learn about props and state with the help of an example project in ReactJS.
                    The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child
                </p>
            </div>
            <div className='card mt-5' style={{ background: 'rgba(17, 17, 17, 0.05)' }}>
                <h2 className='p-5'> 2) How does useState work?</h2>

                <p className='p-5 pt-0' style={{ fontSize: '18px' }}>
                    So React hooks have been released for a while now and they are great! I have used them in production code and it makes everything look nicer. As I continued to use hooks, I started to wonder how all this magic works.
                    Apparently I was not the only one because there was a Boston React meetup on this topic. Big Thank you to Ryan Florence and Michael Jackson (Not the Moonwalking legend) for giving such a great talk around the subject. Continue watching and
                    you will learn more about useEffect and how that works!
                </p>
            </div>
            <div className='card mt-5' style={{ background: 'rgba(17, 17, 17, 0.05)' }}>
                <h2 className='p-5'> 3)  who is the Purpose of useEffect other than fetching data...?</h2>

                <p className='p-5 pt-0' style={{ fontSize: '18px' }}>We can pass the data between the components using Props and State. So, let us know how we can pass the data using props and state and understand the difference between the two.
                The return statement of this hook is used to clean methods that are already running, such as timers. The first time this hook is called, its main body is the one that is going to be evaluated first. All other subsequent times the hook is called, the return statement will be evaluated first, and, after that, the hook's main body. This behaviour is especially useful for
                 cleaning code that is already running before run it again, which enable us to prevent memory leaks
                </p>
            </div>
            <div className='card mt-5' style={{ background: 'rgba(17, 17, 17, 0.05)' }}>
                <h2 className='p-5'> 4) How Does React work..?</h2>

                <p className='p-5 pt-0' style={{ fontSize: '18px' }}>Simply put, React JS is a JavaScript-based UI development library run by Facebook and an open-source developer community. Its impact lies in the way it helps build web applications. 
                 and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child\Since it takes a declarative approach to application development, the framework is efficient and makes it easy to reason about the program. So, how does React js work? It is a component-based, open-source front-end library that is in charge of the application’s view layer
                </p>
            </div>
        </div>
    );
};

export default Quotation;