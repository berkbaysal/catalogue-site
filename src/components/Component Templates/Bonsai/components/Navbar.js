import React from 'react'
import "../css/Navbar.scss"
import Logo from "../../../../assets/img/logo.svg"
import MobileLogo from "../../../../assets/img/logo-two.svg"
function Navbar(props) {
    //OPTIONS: Sticky, Logo, Mobile Logo
    const [menuVisibiliy, setMenuVisibility] = React.useState({ mainMenu: false, largeLeft: false, largeRight: false, small: false, activeSmallRight: 0, currentWindowWidth: 0, isAnyMenuActive: false });
    let isMobileSizeActive = menuVisibiliy.currentWindowWidth <= 900 ? true : false;
    let isAnyMenuActive = (menuVisibiliy.mainMenu || menuVisibiliy.largeLeft || menuVisibiliy.largeRight || menuVisibiliy.small);
    console.log(props)
    let navbarStyle = props.fixedNavbar? {position:"fixed"}:{position:"relative"};
    console.log(navbarStyle);

    function largeRightMenuVisible() {
        setMenuVisibility((oldState) => ({ ...oldState, largeRight: true }))
    }
    function largeLeftMenuVisible() {
        setMenuVisibility((oldState) => ({ ...oldState, largeLeft: true }))
    }
    function smallMenuVisible() {
        setMenuVisibility((oldState) => ({ ...oldState, small: true }))
    }
    function largeRightMenuInvisible() {
        setMenuVisibility((oldState) => ({ ...oldState, largeRight: false }))
    }
    function largeLeftMenuInvisible() {
        setMenuVisibility((oldState) => ({ ...oldState, largeLeft: false }))
    }
    function smallMenuInvisible() {
        setMenuVisibility((oldState) => ({ ...oldState, small: false }))
    }
    function changeActiveRightSubMenu(index) {
        setMenuVisibility((oldState) => ({ ...oldState, activeSmallRight: index }))
    }
    function updateWindowWidthState() {
        setMenuVisibility((oldState) => ({ ...oldState, currentWindowWidth: window.innerWidth }))
    }
    function handleMenuClick() {
        if (!isAnyMenuActive) {
            setMenuVisibility((oldState) => ({ ...oldState, mainMenu: true }))
        }
        else {
            setMenuVisibility((oldState) => ({ ...oldState, mainMenu: false, largeLeft: false, largeRight: false, small: false }))
        }
    }
    React.useEffect(() => {
        updateWindowWidthState();
        addEventListener("resize", updateWindowWidthState);
    }, [])


    const templateNames = [
        ["Featured Contract Templates", "Free Contract Maker", "Social Media Management Contract Template", "Graphic Design Contract Template", "Digital Marketing Contract Template"],
        ["Featured Proposal Templates", "Graphic Design Proposal Template", "Business Proposal Template", "Brand Ambassador Proposal Template", "Data Entry Proposal Letter Template"],
        ["Feautred Invoice Templates", "Social Media Invoice Templates", "Contractor Invoice Template", "Web Design Invoice Template", "Influencer Invoice Template"],
        ["Featured Agreement Templates", "Influencer Agreement Template", "Influencer Collaboration Agreement Template", "Monthly Retainer Agreement Template", "Writer Agreement Template"],
        ["Featured Quote Templates", "Web Design Quotation Template", "Interior Design Quotation Template", "Digital Marketing Quotation Template", "Video Production Quotation Template"],
        ["Featured Scope of Work Templates", "Website Development Scope of Work Template", "Digital Marketing Scope of Work Template", "Consultant Scope of Work Template", "Interior Design Scope of Work Template"],
        ["Featured Brief Templates", "Design Brief Template", "Architecture Design Brief", "Fashion Design Brief", "Creative Brief Template"]
    ]

    let largeRightStyle = { opacity: menuVisibiliy.largeRight ? "1" : "0", display: isMobileSizeActive ? menuVisibiliy.largeRight ? "flex" : "none" : "flex" }
    let smallStyle = { display: menuVisibiliy.small ? "flex" : "none" }
    let largeLeftStyle = { display: menuVisibiliy.largeLeft ? "flex" : "none" }
    let mainMenuStyle = { display: isMobileSizeActive ? menuVisibiliy.mainMenu ? "flex" : "none" : "flex" }
    console.log(menuVisibiliy)
    return (
        <div className="bonsai-style">
            <nav className="bonsai-style-navbar" style={isMobileSizeActive && isAnyMenuActive ? { height: "100vh" } : {}}>

                <div className="mobile-navbar" style={isAnyMenuActive?{position:"fixed"}:navbarStyle}>
                    <div className="mobile-menu-logo">{props.mobileLogo ? <img src={props.mobileLogo} className="mobile-logo"/>:<MobileLogo className="mobile-logo" />}</div> {/*USE THIS SETUP FOR BOTH LOGOS WHEN ADDING TO CATALOG*/}
                    <div className='mobile-menu-button' onClick={handleMenuClick}>
                        <div className={`top-bar ${isAnyMenuActive ? "--active" : ""}`}></div>
                        <div className={`mid-bar ${isAnyMenuActive ? "--active" : ""}`}></div>
                        <div className={`bottom-bar ${isAnyMenuActive ? "--active" : ""}`}></div>
                    </div>
                </div>

                <div className="navbar-content-container" style={{...mainMenuStyle, ...navbarStyle}}>
                    <div className="navbar-logo-container">
                        {props.logo?<img src={props.logo} className="navbar-logo"/>:<Logo className="navbar-logo" />}
                    </div>
                    <div className="navbar-main-interactables">
                        <ul className="navbar-main-menu">
                            <li className="navbar-main-menu-item" onMouseEnter={isMobileSizeActive ? () => { } : largeLeftMenuVisible} onMouseLeave={isMobileSizeActive ? () => { } : largeLeftMenuInvisible} onClick={isMobileSizeActive ? largeLeftMenuVisible : () => { }}>
                                <div className="navbar-main-menu-toggle">
                                    Product<span className="menu-dropdown-arrow">
                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caeb4feb68a_Path.svg" />
                                    </span>
                                    <div className="navbar-submenu-large " style={largeLeftStyle}>
                                        <div className="navbar-submenu-large-left" >
                                            <ul className="navbar-submenu-large-left-list">
                                                <li className="navbar-submenu-large-left-item" onMouseEnter={isMobileSizeActive ? () => { } : largeRightMenuVisible} onMouseLeave={isMobileSizeActive ? () => { } : largeRightMenuInvisible} onClick={() => { largeRightMenuVisible() }}>
                                                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caeb4feb68a_Path.svg" alt="" className="arrow-icon" style={isMobileSizeActive ? { opacity: "1" } : menuVisibiliy.largeRight ? { opacity: "1" } : {}} />
                                                    <div className="navbar-submenu-large-left-info-container --border-below">
                                                        <div className="navbar-menu-item-head">Bonsai Workflow</div>
                                                        <div className="navbar-menu-item-subhead">Look professional, win more clients and manage your business from one place</div>
                                                    </div>
                                                </li>
                                                <li className="navbar-submenu-large-left-item">
                                                    <div className="navbar-submenu-large-left-info-container --border-below">
                                                        <div className="navbar-menu-item-head">Bonsai Tax</div>
                                                        <div className="navbar-menu-item-subhead">Track expenses, maximize tax write-offs, and estimate taxes without the headache</div>
                                                    </div>
                                                </li>
                                                <li className="navbar-submenu-large-left-item">
                                                    <div className="navbar-submenu-large-left-info-container">
                                                        <div className="navbar-menu-item-head">Bonsai Cash</div>
                                                        <div className="navbar-menu-item-subhead">Bonsai’s all-in-one financial hub: No fees and lightning fast payouts</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="navbar-submenu-large-right" style={largeRightStyle} onMouseEnter={isMobileSizeActive ? () => { } : largeRightMenuVisible} onMouseLeave={isMobileSizeActive ? () => { } : largeRightMenuInvisible}>
                                            <ul className="navbar-submenu-large-right-list">
                                                <li className="navbar-submenu-large-right-item">
                                                    <a href="#" className="grid-icon-link">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg" alt="" className="grid-icon" />
                                                        <div className="grid-info-container">
                                                            <div className="grid-info-container-head">Invoices</div>
                                                            <div className="grid-info-container-subhead">Get paid faster with automatic invoicing, online payments and more</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-large-right-item">
                                                    <a href="#" className="grid-icon-link">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg" alt="" className="grid-icon" />
                                                        <div className="grid-info-container">
                                                            <div className="grid-info-container-head">Proposals</div>
                                                            <div className="grid-info-container-subhead">Create client-winning proposals with open receipts, custom packages and electronic approvals</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-large-right-item">
                                                    <a href="#" className="grid-icon-link">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" alt="" className="grid-icon" />
                                                        <div className="grid-info-container">
                                                            <div className="grid-info-container-head">Contracts</div>
                                                            <div className="grid-info-container-subhead">Protect your business with fully-customizable contract templates. Edit and e-sign hassle free.</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-large-right-item">
                                                    <a href="#" className="grid-icon-link">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a4997730241155789ee_people-outline.svg" alt="" className="grid-icon" />
                                                        <div className="grid-info-container">
                                                            <div className="grid-info-container-head">Client CRM</div>
                                                            <div className="grid-info-container-subhead">Add leads, manage existing clients and track projects easily from one place</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-large-right-item">
                                                    <a href="#" className="grid-icon-link">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a1b40e761565e4cb27c_reader-outline.svg" alt="" className="grid-icon" />
                                                        <div className="grid-info-container">
                                                            <div className="grid-info-container-head">Forms & Automations</div>
                                                            <div className="grid-info-container-subhead">Boost client intake and automate feedback with custom web forms and questionnaires</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-large-right-item">
                                                    <a href="#" className="grid-icon-link">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49352788d2281046f7be_time%20tracking%20icon.svg" alt="" className="grid-icon" />
                                                        <div className="grid-info-container">
                                                            <div className="grid-info-container-head">Time Tracking</div>
                                                            <div className="grid-info-container-subhead">Stay organized with Bonsai’s all-in-one time tracker, automated timesheets and billing system</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-large-right-item">
                                                    <a href="#" className="grid-icon-link">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a38c319414c2fd3345a_accpunting.svg" alt="" className="grid-icon" />
                                                        <div className="grid-info-container">
                                                            <div className="grid-info-container-head">Accounting</div>
                                                            <div className="grid-info-container-subhead">Manage your finances easily with income reports, expense tracking, tax reminders and more</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-large-right-item">
                                                    <a href="#" className="grid-icon-link">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg" alt="" className="grid-icon" />
                                                        <div className="grid-info-container">
                                                            <div className="grid-info-container-head">Task Tracking</div>
                                                            <div className="grid-info-container-subhead">Stress-free task management with project templates and integrated timesheets</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="navbar-main-menu-item" onMouseEnter={isMobileSizeActive ? () => { } : smallMenuVisible} onMouseLeave={isMobileSizeActive ? () => { } : smallMenuInvisible} onClick={isMobileSizeActive ? smallMenuVisible : () => { }}>
                                <div className="navbar-main-menu-toggle">
                                    Templates<span className="menu-dropdown-arrow"><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caeb4feb68a_Path.svg" /></span>
                                    <div className="navbar-submenu-small" onMouseLeave={() => changeActiveRightSubMenu(0)} style={smallStyle}>
                                        <div className="navbar-submenu-small-left">
                                            <ul className="navbar-submenu-small-left-list">
                                                <li className="navbar-submenu-small-left-item" onMouseOver={() => { changeActiveRightSubMenu(0) }}>
                                                    <a href="" className="icon-list-element">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" alt="" className="icon" />
                                                        <div className="template-name">Contract Templates</div>
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caeb4feb68a_Path.svg" alt="" className="arrow-icon" />
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-small-left-item" onMouseOver={() => { changeActiveRightSubMenu(1) }}>
                                                    <a href="" className="icon-list-element">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" alt="" className="icon" />
                                                        <div className="template-name">Proposal Templates</div>
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caeb4feb68a_Path.svg" alt="" className="arrow-icon" />
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-small-left-item" onMouseOver={() => { changeActiveRightSubMenu(2) }}>
                                                    <a href="" className="icon-list-element">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg" alt="" className="icon" />
                                                        <div className="template-name">Invoice Templates</div>
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caeb4feb68a_Path.svg" alt="" className="arrow-icon" />
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-small-left-item" onMouseOver={() => { changeActiveRightSubMenu(3) }}>
                                                    <a href="" className="icon-list-element">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" alt="" className="icon" />
                                                        <div className="template-name">Agreement Templates</div>
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caeb4feb68a_Path.svg" alt="" className="arrow-icon" />
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-small-left-item" onMouseOver={() => { changeActiveRightSubMenu(4) }}>
                                                    <a href="" className="icon-list-element">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg" alt="" className="icon" />
                                                        <div className="template-name">Quote Templates</div>
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caeb4feb68a_Path.svg" alt="" className="arrow-icon" />
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-small-left-item" onMouseOver={() => { changeActiveRightSubMenu(5) }}>
                                                    <a href="" className="icon-list-element">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49352788d2281046f7be_time%20tracking%20icon.svg" alt="" className="icon" />
                                                        <div className="template-name">Scope of Work Templates</div>
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caeb4feb68a_Path.svg" alt="" className="arrow-icon" />
                                                    </a>
                                                </li>
                                                <li className="navbar-submenu-small-left-item" onMouseOver={() => { changeActiveRightSubMenu(6) }}>
                                                    <a href="" className="icon-list-element">
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg" alt="" className="icon" />
                                                        <div className="template-name">Brief Templates</div>
                                                        <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caeb4feb68a_Path.svg" alt="" className="arrow-icon" />
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="navbar-submenu-small-right">
                                            <div className="navbar-submenu-small-right-heading">{templateNames[menuVisibiliy.activeSmallRight][0]}</div>
                                            <ul className="navbar-submenu-small-right-list">
                                                <li className="navbar-submenu-small-right-item">{templateNames[menuVisibiliy.activeSmallRight][1]}</li>
                                                <li className="navbar-submenu-small-right-item">{templateNames[menuVisibiliy.activeSmallRight][2]}</li>
                                                <li className="navbar-submenu-small-right-item">{templateNames[menuVisibiliy.activeSmallRight][3]}</li>
                                                <li className="navbar-submenu-small-right-item">{templateNames[menuVisibiliy.activeSmallRight][4]}</li>
                                            </ul>
                                            <div className="more-templates-link "><a href="#">See All Templates</a></div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className="navbar-main-menu-item">Pricing</li>
                            <li className="navbar-main-menu-item">Reviews</li>
                        </ul>
                        <div className="navbar-buttons">
                            <div className="navbar-button">LOG IN</div>
                            <div className="navbar-button-filled">START FREE</div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar