export default {
    "ableton-style-navigation-menu": {
        componentName: "Ableton Style Navigation Menu",
        componentCategory: "Navigation",
        options: [
            {
                optionName: "Logo",
                optionType: "url",
                optionText: "Provide a URL for your logo.",
                optionDefault: "",
                optionHasOverride: false,
                optionOverride: "",
                optionPlaceholder: "ex: http://www.website.com/image.jpg"
            },
        ],
    },
    "ableton-style-video-player":{
        componentName: "Ableton Style Video Player",
        componentCategory: "Video",
        options: [
            {
                optionName: "Youtube Video ID",
                optionType: "url",
                optionText: "Provide the Youtube Video ID for your desired video.",
                optionDefault: "",
                optionHasOverride: false,
                optionOverride: "",
                optionPlaceholder: "ex: dQw4w9WgXcQ"
            },            {
                optionName: "Video Player Width",
                optionType: "slider",
                optionText: "Choose how wide your video player should be. (percent of webpage body)",
                optionDefault: 66,
                optionHasOverride: false,
                optionOverride: "",
                optionPlaceholder: ""
            }
        ]
    },
    "ableton-style-footer": {
        componentName: "Ableton Style Footer",
        componentCategory: "Footer",
        options: [
            {
                optionName: "Logo",
                optionType: "url",
                optionText: "Provide a URL for your logo.",
                optionDefault: "",
                optionHasOverride: false,
                optionOverride: "",
                optionPlaceholder: ""
            },
        ],
    },
}