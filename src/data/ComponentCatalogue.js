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
                    optionText: "Provide a URL for your second image.",
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
                    optionText: "Provide a URL for your second image.",
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
        
    ]
