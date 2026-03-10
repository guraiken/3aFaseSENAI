export default {
    reporters: [
	"default",
	[
        "jest-html-reporters", {
		pageTitle: "Test Report",
        publicPath: "./reports/reports.html",
        filename: "reports.html",
	}
]
]
}