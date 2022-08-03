import React from "react";
import Logo from "../assets/img/logo.svg";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/Navbar.scss"
function Navbar(props) {

    const [navbarStatus, setNavbarStatus] = React.useState({ isSubMenuVisible: true, isHiddenMenuVisible: false, isSlidingMenuUp: true, isMobileModeActive: (window.innerWidth <= 950) })
    const [activeMenuIndexes, setActiveMenuIndexes] = React.useState([6, 0, 4]);
    const topMenuItems = ["Live", "Push", "Link", "Shop", "Packs", "Help", "More"]
    const bottomMenuItems = [
        ["Live 11", "All new features", "What is Live?", "Max for Live", "Learn Live", "Integrated hardware", "Compared editions", "But now"],
        ["Overview", "What's new", "Making beats", "Playing notes and chords", "Sampling", "Design", "Tech specs", "Learn push", "But now"],
        ["What is Link?", "Link-enabled products"],
        ["Overview", "Live", "Push", "Educational offers", "Max for Live", "Making Music", "Merchandise"],
        ["All", "Sounds", "Max for Live", "Software Instruments", "Free"],
        ["Overview", "Learn Live", "Learn Push"],
        ["About", "Jobs", "Apprenticeships"]
    ]
    const hiddenMenuItems = ["Blog", "Ableton for the Classroom", "Ableton for Collages and Universities", "Certified Training", "About Ableton", "Jobs", "Apprenticeships"]

    const topMenu = []
    topMenuItems.forEach((item, index) => {
        if (item === "More") {
            if (index === activeMenuIndexes[0]) {
                topMenu.push(<li className="main-bar-item" key={"top-menu-" + index}><div className="hidden-menu-toggle active-link" onClick={toggleHiddenBar}>More {navbarStatus.isHiddenMenuVisible ? "-" : "+"}</div></li>)
            }
            else {
                topMenu.push(<li className="main-bar-item" key={"top-menu-" + index}><div className="hidden-menu-toggle"  onClick={toggleHiddenBar}>More {navbarStatus.isHiddenMenuVisible ? "-" : "+"}</div></li>)
            }
        }
        else if (index === activeMenuIndexes[0]) {
            topMenu.push(<li className="main-bar-item" key={"top-menu-" + index}><a href="#" className="menu-category active-link">{item + (item === "More" ? "+" : "")}</a></li>)
        }
        else {
            topMenu.push(<li className="main-bar-item" key={"top-menu-" + index}><a href="#" className="menu-category" onClick={()=>{setActiveMenuIndexes((currentIndexes)=>([index,0,-1]))}}>{item + (item === "More" ? "+" : "")}</a></li>)
        }
    })
    const hiddenTopMenu = []
    hiddenMenuItems.forEach((item,index)=>{
        if(index === activeMenuIndexes[2]){
            hiddenTopMenu.push(<li className="hidden-bar-top-menu-item" key={"top-hidden-menu-" + index}><a href="#" className="menu-category  active-link">{item}</a></li>)
        }
        else{
            hiddenTopMenu.push(<li className="hidden-bar-top-menu-item"  key={"top-hidden-menu-" + index} onClick={()=>{setActiveMenuIndexes([6,0,index])}}><a href="#" className="menu-category">{item}</a></li>)
        }
    })
    const bottomMenu = []
    bottomMenuItems[activeMenuIndexes[0]].forEach((item,index)=>{
        if(index === activeMenuIndexes[1]){
            bottomMenu.push(<li className="sub-bar-item" key={"bottom-menu-" + index}><a href="#" className="menu-category active-link">{item}</a></li>)
        }
        else{
            bottomMenu.push(<li className="sub-bar-item" key={"bottom-menu-" + index} onClick={()=>{setActiveMenuIndexes((currentIndexes)=>([currentIndexes[0],index,currentIndexes[0]]))}}><a href="#" className="menu-category">{item}</a></li>)
        }
        
    })

    function toggleHiddenBar() {
        setNavbarStatus((oldStatus) => ({ ...oldStatus, isHiddenMenuVisible: !oldStatus.isHiddenMenuVisible }));
    }

    function toggleSlidingMenu() {
        setNavbarStatus((oldStatus) => ({ ...oldStatus, isSlidingMenuUp: !oldStatus.isSlidingMenuUp }));
    }


    React.useEffect(() => {
        function checkForMobile() {
            if (window.innerWidth <= 950) {
                setNavbarStatus((oldStatus) => ({ ...oldStatus, isMobileModeActive: true}))
            }
            else{
                setNavbarStatus((oldStatus) => ({ ...oldStatus, isMobileModeActive: false, isSlidingMenuUp:true }))
            }
        }
        addEventListener("resize", checkForMobile);
        return (() => {
            removeEventListener("resize", checkForMobile);
        })
    }, [])
    let logoLink = null;
    if (props.logo) {
        logoLink = props.logo;
    }

    return (

        <header className="ableton-style">
            <nav className="navbar-ableton-style">
                <div className={`collapsed-menu ${(navbarStatus.isMobileModeActive && navbarStatus.isSlidingMenuUp) ? "" : "--negative"}`}>
                    {logoLink && <img src={logoLink} className="navbar-logo-collapsed" />}
                    {!logoLink && <Logo className="navbar-logo-collapsed" />}
                    <span className="collapsed-menu-toggle" onClick={toggleSlidingMenu}>Menu <FontAwesomeIcon icon={faCaretDown} className="font-awesome-icon" /></span>
                </div>
                <div className={`mobile-slide-group ${(navbarStatus.isMobileModeActive && navbarStatus.isSlidingMenuUp) ? "--slide-up" : ""}`}>
                    <div className="main-bar">
                        <div className="left-group">
                            <div className="expanded-logo-container">
                                {logoLink && <img src={logoLink} className="navbar-logo-expanded" />}
                                {!logoLink && <Logo className="navbar-logo-expanded" />}
                            </div>
                            <ul className="main-bar-menu">
                                {topMenu}
                            </ul>
                        </div>

                        <ul className="main-bar-sidemenu">
                            <li className="main-bar-side-menu-item"><a href="#" className="menu-category highlight-link">Try Live for free</a></li>
                            <li className="main-bar-side-menu-item"><a href="##" className="menu-category"><span className="login-menu-text">Log in or register</span></a></li>
                        </ul>
                    </div>
                    {(navbarStatus.isHiddenMenuVisible || navbarStatus.isMobileModeActive) && <div className="hidden-bar">
                        <div className="upper-hidden-bar">
                            <div className="hidden-bar-title">
                                More on our site:
                            </div>
                            <ul className="hidden-bar-top-menu">
                                {hiddenTopMenu}
                            </ul>
                        </div>
                        <div className="lower-hidden-bar">
                            <div className="hidden-bar-title">
                                More of our products:
                            </div>
                            <ul className="hidden-bar-bottom-menu">
                                <li className="hidden-bar-bottom-menu-item"><a href="#" className="menu-category"><div className="hidden-bar-subtitle">Loop</div>Watch Talks, Performances and Features from Ableton's Summit for Music Makers</a></li>
                                <li className="hidden-bar-bottom-menu-item"><a href="#" className="menu-category"><div className="hidden-bar-subtitle">Learning Music</div>Learn the fundamentals of music making right in your browser.</a></li>
                                <li className="hidden-bar-bottom-menu-item"><a href="#" className="menu-category"><div className="hidden-bar-subtitle">Learning Synths</div>Get started with synthesis using a web-based synth and accompanying lessons.</a></li>
                                <li className="hidden-bar-bottom-menu-item"><a href="#" className="menu-category"><div className="hidden-bar-subtitle">Making Music</div>Some tips from 74 Creative Strategies for Electronic Producers.</a></li>
                            </ul>
                        </div>
                    </div>}

                </div>

                {navbarStatus.isSubMenuVisible && <div className="sub-bar">
                    <ul className="sub-bar-menu">
                        {bottomMenu}
                    </ul>
                </div>}
            </nav>
        </header>

    );
}

export default Navbar;