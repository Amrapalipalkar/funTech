// // import React, { useState, useEffect, useRef } from 'react';

// // const SlipperyButton = () => {
// //   const noButtonRef = useRef(null);
// //   const [yesButtonPosition, setYesButtonPosition] = useState({ top: 0, left: 0 });

// //   useEffect(() => {
// //     // Adjust the "Yes" button position to be beside the "No" button after initial render
// //     if (noButtonRef.current) {
// //       const noButtonRect = noButtonRef.current.getBoundingClientRect();
// //       setYesButtonPosition({
// //         top: noButtonRect.top + window.scrollY,
// //         left: noButtonRect.left + noButtonRect.width + 10, // Positioning it 10px to the right of the "No" button
// //       });
// //     }
// //   }, []);

// //   const dodge = () => {
// //     // Ensuring the button moves within the viewport
// //     const newPosition = {
// //       top: Math.random() * (window.innerHeight - 40), // Subtracting button height to stay within viewport
// //       left: Math.random() * (window.innerWidth - 80), // Subtracting button width to stay within viewport
// //     };
// //     setYesButtonPosition(newPosition);

// //     // Vibrate the device when the "Yes" button is attempted to be clicked
// //     if (navigator.vibrate) {
// //       navigator.vibrate(200); // Vibrate for 200 milliseconds
// //     }
// //   };

// //   return (
// //     <div style={{ textAlign: 'center', paddingTop: '100px' }}>
// //       <p style={{ fontSize: '24px', marginBottom: '20px' }}>Do you like this component?</p>
// //       <button
// //         ref={noButtonRef}
// //         style={{ marginRight: '10px', padding: '10px 20px', borderRadius: '5px', background: '#dc3545', color: 'white' }}
// //         onClick={() => alert('No clicked')}
// //       >
// //         No
// //       </button>
// //       <button
// //         style={{
// //           position: 'absolute',
// //           top: `${yesButtonPosition.top}px`,
// //           left: `${yesButtonPosition.left}px`,
// //           padding: '10px 20px',
// //           borderRadius: '5px',
// //           background: '#007bff',
// //           color: 'white',
// //           transition: 'top 0.5s ease, left 0.5s ease',
// //         }}
// //         onMouseOver={dodge}
// //         onTouchStart={dodge}
// //         onClick={(e) => {
// //           e.preventDefault(); // Preventing the default action to avoid actual click
// //           alert('Yes clicked — Nice try!');
// //         }}
// //       >
// //         Yes
// //       </button>
// //     </div>
// //   );
// // };

// // export default SlipperyButton;






// import React, { useState, useEffect, useRef } from 'react';
// import './SlipperyButton.css'; // Make sure to import the CSS file correctly

// const SlipperyButton = () => {
//   const noButtonRef = useRef(null);
//   const [yesButtonPosition, setYesButtonPosition] = useState({ top: 0, left: 0 });

//   useEffect(() => {
//     if (noButtonRef.current) {
//       const noButtonRect = noButtonRef.current.getBoundingClientRect();
//       setYesButtonPosition({
//         top: noButtonRect.top + window.scrollY,
//         left: noButtonRect.left + noButtonRect.width + 10,
//       });
//     }
//   }, []);

//   const dodge = () => {
//     const newPosition = {
//       top: Math.random() * (window.innerHeight - 40),
//       left: Math.random() * (window.innerWidth - 80),
//     };
//     setYesButtonPosition(newPosition);

//     if (navigator.vibrate) {
//       navigator.vibrate(200);
//     }
//   };

//   return (
//     <div className="container">
//       <p className="question">Do you like this component?</p>
//       <button
//         ref={noButtonRef}
//         className="noButton"
//         onClick={() => alert('No clicked')}
//       >
//         No
//       </button>
//       <button
//         className="yesButton"
//         style={{
//           top: `${yesButtonPosition.top}px`,
//           left: `${yesButtonPosition.left}px`,
//         }}
//         onMouseOver={dodge}
//         onTouchStart={dodge}
//         onClick={(e) => {
//           e.preventDefault();
//           alert('Yes clicked — Nice try!');
//         }}
//       >
//         Yes
//       </button>
//     </div>
//   );
// };

// export default SlipperyButton;









import React, { useState, useEffect, useRef } from 'react';
import './SlipperyButton.css'; // Assuming you have an external CSS file

const SlipperyButton = () => {
    const noButtonRef = useRef(null); // Reference to the "No" button for positioning
    const [yesButtonPosition, setYesButtonPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (noButtonRef.current) {
            const noButtonRect = noButtonRef.current.getBoundingClientRect();
            setYesButtonPosition({
                top: noButtonRect.top + window.scrollY - 10, // Aligns the top of "Yes" with "No"
                left: noButtonRect.left - noButtonRect.width - 20, // Positions "Yes" to the left of "No", adjusting space
            });
        }
    }, []);

    const dodge = () => {
        // Ensuring the button moves within the viewport
        const newPosition = {
            top: Math.random() * (window.innerHeight - 40), // Subtracting button height to stay within viewport
            left: Math.random() * (window.innerWidth - 80), // Subtracting button width to stay within viewport
        };
        setYesButtonPosition(newPosition);

        // Vibrate the device when the "Yes" button is attempted to be clicked
        if (navigator.vibrate) {
            navigator.vibrate(200); // Vibrate for 200 milliseconds
        }
    };

    return (
        <div className="slipperyButton">
            <div className="container">
                <p className="question">  Happy Valentine's Day, my love ❤️... Do you want a Valentine's gift?  </p>
                <button
                    ref={noButtonRef}
                    className="noButton"
                    onClick={() => alert('You clicked NO...Okay!! as you wish!!')}
                >
                    No
                </button>
                <button
                    className="yesButton"
                    style={{
                        top: `${yesButtonPosition.top}px`, // Set the top position of the "Yes" button
                        left: `${yesButtonPosition.left}px`,
                    }}
                    onMouseOver={dodge}
                    onTouchStart={dodge}
                    onClick={(e) => {
                        e.preventDefault();
                        //   alert('Yes clicked — Nice try!');
                    }}
                >
                    Yes
                </button>
            </div>
        </div>
    );
};

export default SlipperyButton;
