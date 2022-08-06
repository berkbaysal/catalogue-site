export default
    [
        {
            componentName: "Ableton Style Navigation Menu",
            componentCategory: "Navigation",
            options: [
                {
                    optionName: "Logo",
                    optionType: "single-line",
                    optionText: "Provide a URL for your logo.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "logo"
                },
            ],
        },
        {
            componentName: "Ableton Style Video Player",
            componentCategory: "Video",
            options: [
                {
                    optionName: "Youtube Video ID",
                    optionType: "single-line",
                    optionText: "Provide the Youtube Video ID for your desired video.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: cZdO2e8K29o",
                    optionProp: "videoId"
                }, 
                {
                    optionName: "Video Player Width (Desktop only)",
                    optionType: "slider",
                    optionText: "Choose how wide your video player should be. (percent of webpage body)",
                    optionDefault: 66,
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "",
                    optionProp: "width"
                },
                {
                    optionName: "Video Player Label",
                    optionType: "single-line",
                    optionText: "Provide a sentence to label your video",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: A cool music video.",
                    optionProp: "label"
                }
            ]
        },
        {
            componentName: "Ableton Style Footer",
            componentCategory: "Footer",
            options: [
                {
                    optionName: "Logo",
                    optionType: "single-line",
                    optionText: "Provide a URL for your logo.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "logo"
                },
                {
                    optionName: "Company Name",
                    optionType: "single-line",
                    optionText: "Your company name for footer.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: Ableton",
                    optionProp: "companyName"
                },
            ],
        },
        {
            componentName: "Ableton Style Hero Section",
            componentCategory: "Image",
            options: [
                {
                    optionName: "Hero Image",
                    optionType: "single-line",
                    optionText: "Provide a URL for the hero image.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "heroImage"
                },
                {
                    optionName: "Word Overlay",
                    optionType: "single-line",
                    optionText: "Text over the hero image. (ex: Company name)",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "Ableton",
                    optionProp: "textOverlay"
                },
            ],
        },
        {
            componentName: "Ableton Style Two Images",
            componentCategory: "Image",
            options: [
                {
                    optionName: "Image One",
                    optionType: "single-line",
                    optionText: "Provide a URL for your first image.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "imageOne"
                },
                {
                    optionName: "Image Two",
                    optionType: "single-line",
                    optionText: "Provide a URL for your second image.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "imageTwo"
                },
                {
                    optionName: "Background Shape Alignment",
                    optionType: "select",
                    optionText: "Select alignment for the background shape",
                    optionDefault: "Right",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "Background Alignment",
                    optionChoices: ["Right","Left","Center"],
                    optionProp: "align"
                }
            ],
        },
        {
            componentName: "Ableton Style Three Images",
            componentCategory: "Image",
            options: [
                {
                    optionName: "Image One",
                    optionType: "single-line",
                    optionText: "Provide a URL for your first image.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "imageOne"
                },
                {
                    optionName: "Image Two",
                    optionType: "single-line",
                    optionText: "Provide a URL for your second image.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "imageTwo"
                },
                {
                    optionName: "Image Three",
                    optionType: "single-line",
                    optionText: "Provide a URL for your second image.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "imageThree"
                },
                {
                    optionName: "Background Shape Alignment",
                    optionType: "select",
                    optionText: "Select alignment for the background shape",
                    optionDefault: "Right",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "Background Alignment",
                    optionChoices: ["Right","Left","Center"],
                    optionProp: "align"
                }
            ],
        },
        {
            componentName: "Ableton Style Card",
            componentCategory: "Image",
            options: [
                {
                    optionName: "Card Image",
                    optionType: "single-line",
                    optionText: "Provide a URL for the card image.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "image"
                },
                {
                    optionName: "Main Text",
                    optionType: "multi-line-text",
                    optionText: "Main text content of your card.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                    optionProp: "text"
                },
                {
                    optionName: "Link",
                    optionType: "multi-single-line",
                    optionText: "A link at the end of your text",
                    optionDefault: ["",""],
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: ["Display text: (ex: Click me!)","Link URL: (ex: http://www.website.com)"],
                    optionProp: "link"
                },
            ],
        },
        {
            componentName: "Ableton Style Infobox",
            componentCategory: "Text",
            options: [
                {
                    optionName: "Top text",
                    optionType: "multi-line-text",
                    optionText: "Text for the top (bold) part of infobox.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                    optionProp: "topText"
                },
                {
                    optionName: "Bottom text",
                    optionType: "multi-line-text",
                    optionText: "Text for the bottom part of infobox.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                    optionProp: "bottomText"
                },
            ],
        },
        {
            componentName: "Bonsai Style Navigation Menu",
            componentCategory: "Navigation",
            options: [
                {
                    optionName: "Logo",
                    optionType: "single-line",
                    optionText: "Provide a URL for your logo.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "logo"
                },
                {
                    optionName: "Mobile Logo",
                    optionType: "single-line",
                    optionText: "Provide a URL for your logo.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "mobileLogo"
                },
                {
                    optionName: "Sticky Navbar",
                    optionType: "checkbox",
                    optionText: "Check to box to make the navigation menu sticky.",
                    optionDefault: false,
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "",
                    optionProp: "fixedNavbar"
                },
            ],
        },
        {
            componentName: "Bonsai Style Hero Section",
            componentCategory: "Image",
            options: [
                {
                    optionName: "Image One",
                    optionType: "single-line",
                    optionText: "Provide a URL for the top left image.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "imageOne"
                },
                {
                    optionName: "Image Two",
                    optionType: "single-line",
                    optionText: "Provide a URL for the top right.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "imageTwo"
                },
                {
                    optionName: "Image Three",
                    optionType: "single-line",
                    optionText: "Provide a URL for the bottom left.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "imageThree"
                },
                {
                    optionName: "Image Four",
                    optionType: "single-line",
                    optionText: "Provide a URL for the bottom right.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "imageFour"
                },
                {
                    optionName: "Background Shape Intensity",
                    optionType: "slider",
                    optionText: "Set how prominent the background shape should be.",
                    optionDefault: 50,
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "",
                    optionProp: "backgroundIntensity"
                },
            ],
        },
        {
            componentName: "Bonsai Style FAQ",
            componentCategory: "Text",
            options: [],
        },
        {
            componentName: "Bonsai Style Footer",
            componentCategory: "Footer",
            options: [],
        },
        {
            componentName: "Bonsai Style Review",
            componentCategory: "Image",
            options: [
                {
                    optionName: "Reviewer Image",
                    optionType: "single-line",
                    optionText: "Provide a URL for the reviewer image.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "ex: http://www.website.com/image.jpg",
                    optionProp: "image"
                },
                {
                    optionName: "Review",
                    optionType: "multi-line-text",
                    optionText: "Main text content of your card.",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                    optionProp: "review"
                },
                {
                    optionName: "Reviewer Name",
                    optionType: "single-line",
                    optionText: "Name of the reviewer",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "John Doe",
                    optionProp: "name"
                },
                {
                    optionName: "Reviewer Title/Occupation",
                    optionType: "single-line",
                    optionText: "Title/Occupation of the reviewer",
                    optionDefault: "",
                    optionHasOverride: false,
                    optionOverride: "",
                    optionPlaceholder: "Designer",
                    optionProp: "title"
                },
            ],
        },
        {
            componentName: "Bonsai Style Price Plans",
            componentCategory: "E-commerce",
            options: [
                {
                    optionName: ["Number of Offers","Promotion Ribbon"],
                    optionType: "dependant-select",
                    optionText: ["How many offers should be displayed","Put a ribbon on a plan to promote it"],
                    optionDefault: [1,"None"],
                    optionHasOverride: false,
                    optionOverride: ["","None"],
                    optionPlaceholder: "Background Alignment",
                    optionChoices: [1,2,3],
                    optionProp: "cardSetup",
                    optionDependantChoices: [["None",1],["None",1,2],["None",1,2,3]],
                },
            ],
        }
    ]
