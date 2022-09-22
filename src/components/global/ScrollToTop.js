// import React, { useLayoutEffect, useRef } from "react";
// import { useWindowScroll } from "react-use";
// import styled from "styled-components";
// import { Link as ScrollLink } from 'react-scroll';

// const Up = styled.div`
//   width: 3rem;
//   height: 3rem;

//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
//   // color: ${(props) => props.theme.text};
//   color:#fff;
//   // background-color: ${(props) => props.theme.body};
// background-color:#048ABF;
//   // font-size: ${(props) => props.theme.fontxl};
//   font-size: 24px;
//   position: fixed;
//   right: 1rem;
//   bottom: 1rem;

//   cursor: pointer;

//   display: none;
//   justify-content: center;
//   align-items: center;

//   border-radius: 50%;
//   transition: all 0.2s ease;
//   &:hover {
//     transform: scale(1.2);
//   }
//   &:active {
//     transform: scale(0.9);
//   }
// `;

// const ScrollToTop = () => {
//   const ref = useRef(null);
//   const { y } = useWindowScroll();

//   const scrollToTop = () => {
//     let element = document.getElementById("navigation");

//     element.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//       inline: "nearest",
//     });
//   };

//   useLayoutEffect(() => {
//     if (y > 200) {
//       ref.current.style.display = "flex";
//     } else {
//       ref.current.style.display = "none";
//     }
//   }, [y]);

//   return (

//     // <ScrollLink activeClass="active" to="navigation" spy={true} offset={-30} smooth={true} duration={500}>
//     //   <Up ref={ref} onClick={() => scrollToTop()}>
//     //     &#x2191;
//     //   </Up>
//     // </ScrollLink>
//     <Up ref={ref} onClick={() => scrollToTop()}>
//       &#x2191;
//     </Up>
//   );
// };

// export default ScrollToTop;


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}