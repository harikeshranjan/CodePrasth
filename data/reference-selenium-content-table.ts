export const seleniumJavaReferenceContentTable = [
  {
    id: "introduction",
    heading: "Introduction",
    subheadings: [
      { id: "what-is-selenium", heading: "What is Selenium" },
      { id: "selenium-components", heading: "Selenium components" },
      { id: "selenium-webdriver", heading: "Selenium WebDriver" },
      { id: "supported-browsers", heading: "Supported browsers" },
    ],
  },
  {
    id: "setup-and-installation",
    heading: "Setup and installation",
    subheadings: [
      { id: "install-java", heading: "Install Java" },
      { id: "setup-maven-project", heading: "Setup Maven project" },
      { id: "add-selenium-dependency", heading: "Add Selenium dependency" },
      { id: "download-browser-driver", heading: "Download browser driver" },
      { id: "project-structure", heading: "Project structure" },
    ],
  },
  {
    id: "webdriver-basics",
    heading: "WebDriver basics",
    subheadings: [
      { id: "launch-browser", heading: "Launch browser" },
      { id: "open-url", heading: "Open URL" },
      { id: "close-browser", heading: "Close browser" },
      { id: "navigate-commands", heading: "Navigate commands" },
      { id: "manage-window", heading: "Manage window" },
    ],
  },
  {
    id: "locators",
    heading: "Locators",
    subheadings: [
      { id: "locate-by-id", heading: "Locate by ID" },
      { id: "locate-by-name", heading: "Locate by Name" },
      { id: "locate-by-classname", heading: "Locate by ClassName" },
      { id: "locate-by-tagname", heading: "Locate by TagName" },
      { id: "locate-by-css", heading: "Locate by CSS Selector" },
      { id: "locate-by-xpath", heading: "Locate by XPath" },
      { id: "locate-by-linktext", heading: "Locate by Link Text" },
    ],
  },
  {
    id: "webelement-actions",
    heading: "WebElement actions",
    subheadings: [
      { id: "click-element", heading: "Click element" },
      { id: "send-keys", heading: "Send keys" },
      { id: "clear-input", heading: "Clear input field" },
      { id: "get-text", heading: "Get text" },
      { id: "get-attribute", heading: "Get attribute" },
      { id: "is-displayed", heading: "Check if displayed" },
      { id: "is-enabled", heading: "Check if enabled" },
      { id: "is-selected", heading: "Check if selected" },
    ],
  },
  {
    id: "waits",
    heading: "Waits",
    subheadings: [
      { id: "implicit-wait", heading: "Implicit wait" },
      { id: "explicit-wait", heading: "Explicit wait" },
      { id: "fluent-wait", heading: "Fluent wait" },
      { id: "expected-conditions", heading: "Expected conditions" },
    ],
  },
  {
    id: "handling-elements",
    heading: "Handling elements",
    subheadings: [
      { id: "dropdowns", heading: "Handle dropdowns" },
      { id: "checkboxes", heading: "Handle checkboxes" },
      { id: "radio-buttons", heading: "Handle radio buttons" },
      { id: "alerts", heading: "Handle alerts" },
      { id: "iframes", heading: "Handle iframes" },
      { id: "multiple-windows", heading: "Handle multiple windows" },
    ],
  },
  {
    id: "advanced-user-actions",
    heading: "Advanced user actions",
    subheadings: [
      { id: "mouse-actions", heading: "Mouse actions" },
      { id: "drag-and-drop", heading: "Drag and drop" },
      { id: "hover-actions", heading: "Hover actions" },
      { id: "keyboard-actions", heading: "Keyboard actions" },
      { id: "actions-class", heading: "Actions class" },
    ],
  },
  {
    id: "executing-javascript",
    heading: "Executing JavaScript",
    subheadings: [
      { id: "javascript-executor", heading: "JavaScriptExecutor" },
      { id: "scroll-page", heading: "Scroll page" },
      { id: "click-using-js", heading: "Click using JavaScript" },
      { id: "get-page-title-js", heading: "Get page title using JS" },
    ],
  },
  {
    id: "taking-screenshots",
    heading: "Taking screenshots",
    subheadings: [
      { id: "capture-screenshot", heading: "Capture screenshot" },
      { id: "screenshot-on-failure", heading: "Screenshot on test failure" },
    ],
  },
  {
    id: "test-framework-integration",
    heading: "Test framework integration",
    subheadings: [
      { id: "testng-introduction", heading: "TestNG introduction" },
      { id: "junit-introduction", heading: "JUnit introduction" },
      { id: "test-annotations", heading: "Test annotations" },
      { id: "before-after-methods", heading: "Before and After methods" },
      { id: "assertions", heading: "Assertions" },
    ],
  },
  {
    id: "design-patterns",
    heading: "Design patterns",
    subheadings: [
      { id: "page-object-model", heading: "Page Object Model (POM)" },
      { id: "page-factory", heading: "Page Factory" },
      { id: "data-driven-testing", heading: "Data driven testing" },
    ],
  },
  {
    id: "best-practices",
    heading: "Best practices",
    subheadings: [
      { id: "locator-strategies", heading: "Locator strategies" },
      { id: "test-structure", heading: "Test structure" },
      { id: "avoid-thread-sleep", heading: "Avoid Thread.sleep" },
      { id: "reusable-methods", heading: "Reusable methods" },
    ],
  },
] as const;