import CodeBlock from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, FlaskConical, Info } from "lucide-react";

// ── Note / callout ────────────────────────────────────────────────────────────

function Note({
  children,
  title = "Note",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="flex gap-3 px-4 py-3.5 rounded-xl border border-border bg-muted/30 my-1">
      <Info size={15} className="text-muted-foreground mt-0.5 shrink-0" />
      <div>
        <p className="text-[12px] font-semibold text-foreground mb-0.5">
          {title}
        </p>
        <p className="text-[13px] text-muted-foreground leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

// ── Subheading wrapper ────────────────────────────────────────────────────────

function Sub({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24 space-y-3">
      <div>
        <h3 className="text-[15px] font-semibold text-foreground leading-snug">
          {title}
        </h3>
        {description && (
          <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function SeleniumReferencePage() {
  return (
    <main className="pb-24">

      {/* ── Page header ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-xl border border-border bg-muted flex items-center justify-center text-base select-none">
            🔬
          </div>
          <Badge
            variant="secondary"
            className="text-[11px] px-2.5 py-0.5 rounded-md"
          >
            Testing
          </Badge>
          <Badge
            variant="outline"
            className="text-[11px] px-2.5 py-0.5 rounded-md text-muted-foreground"
          >
            Java
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground leading-tight mb-3">
          Selenium
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
          A complete reference for browser automation with Selenium WebDriver in
          Java — from project setup and locators to advanced actions, design
          patterns, and test framework integration with TestNG and JUnit.
        </p>

        {/* Meta strip */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BookOpen size={12} />
            <span>13 sections</span>
          </div>
          <Separator orientation="vertical" className="h-3.5" />
          <div className="flex items-center gap-1.5">
            <FlaskConical size={12} />
            <span>40+ snippets</span>
          </div>
          <Separator orientation="vertical" className="h-3.5" />
          <span>Java · Selenium 4</span>
        </div>
      </div>

      <div className="space-y-16">

        {/* ── 1. Introduction ── */}
        <Section id="introduction" title="Introduction">
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            Selenium is the most widely used open-source framework for
            automating web browser interactions. It allows you to write test
            scripts in multiple programming languages that drive real browsers,
            making it ideal for end-to-end testing of web applications.
          </p>

          <Sub
            id="what-is-selenium"
            title="What is Selenium"
            description="Selenium automates browsers. It is used primarily for automated testing of web applications but is also used for web scraping and repetitive web-based tasks."
          >
            <Note>
              Selenium is not a single tool — it is a suite of tools. The most
              important for automation testing is{" "}
              <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
                WebDriver
              </code>
              , which communicates directly with the browser via a standardised
              W3C protocol.
            </Note>
          </Sub>

          <Sub
            id="selenium-components"
            title="Selenium components"
            description="The Selenium suite consists of three main tools, each solving a different part of the automation problem."
          >
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  name: "WebDriver",
                  desc: "Programmatically drives browsers. The core tool used for test automation.",
                },
                {
                  name: "Grid",
                  desc: "Run tests in parallel across multiple machines and browsers simultaneously.",
                },
                {
                  name: "IDE",
                  desc: "Browser extension for recording and replaying interactions. Good for quick prototyping.",
                },
              ].map((c) => (
                <div
                  key={c.name}
                  className="flex flex-col gap-1.5 p-4 rounded-xl border border-border bg-background"
                >
                  <p className="text-[13px] font-semibold text-foreground">
                    {c.name}
                  </p>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </Sub>

          <Sub
            id="selenium-webdriver"
            title="Selenium WebDriver"
            description="WebDriver is a remote control interface that enables introspection and control of web browsers. It provides a platform and language-neutral wire protocol for out-of-process programs to instruct browsers."
          >
            <Note title="Selenium 4 — W3C Standard">
              Selenium 4 is fully W3C compliant. The JsonWireProtocol used in
              Selenium 3 is gone. This means more stable cross-browser behaviour
              and direct communication with browser drivers without any
              intermediary server.
            </Note>
          </Sub>

          <Sub
            id="supported-browsers"
            title="Supported browsers"
            description="Selenium WebDriver supports all major browsers through their respective driver implementations."
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { browser: "Chrome", driver: "ChromeDriver" },
                { browser: "Firefox", driver: "GeckoDriver" },
                { browser: "Edge", driver: "EdgeDriver" },
                { browser: "Safari", driver: "SafariDriver" },
              ].map((b) => (
                <div
                  key={b.browser}
                  className="flex flex-col gap-1 p-3 rounded-xl border border-border bg-background text-center"
                >
                  <p className="text-[13px] font-semibold text-foreground">
                    {b.browser}
                  </p>
                  <p className="text-[11px] text-muted-foreground font-mono">
                    {b.driver}
                  </p>
                </div>
              ))}
            </div>
          </Sub>
        </Section>

        {/* ── 2. Setup & installation ── */}
        <Section id="setup-and-installation" title="Setup and installation">
          <Sub
            id="install-java"
            title="Install Java"
            description="Selenium 4 requires Java 8 or higher. Verify your installation before proceeding."
          >
            <CodeBlock
              tag="bash"
              title="Verify Java installation"
              lang="bash"
              code={`java -version
# java version "21.0.1" 2023-10-17 LTS

javac -version
# javac 21.0.1`}
            />
          </Sub>

          <Sub
            id="setup-maven-project"
            title="Setup Maven project"
            description="Create a new Maven project with the standard directory structure."
          >
            <CodeBlock
              tag="bash"
              title="Create Maven project"
              lang="bash"
              code={`mvn archetype:generate \\
  -DgroupId=com.example.tests \\
  -DartifactId=selenium-project \\
  -DarchetypeArtifactId=maven-archetype-quickstart \\
  -DinteractiveMode=false

cd selenium-project`}
            />
          </Sub>

          <Sub
            id="add-selenium-dependency"
            title="Add Selenium dependency"
            description="Add the Selenium Java dependency to your pom.xml. Selenium 4 includes WebDriverManager built-in, so no separate driver management library is needed."
          >
            <CodeBlock
              tag="XML"
              title="pom.xml — Selenium 4 dependency"
              lang="xml"
              code={`<dependencies>
  <!-- Selenium Java -->
  <dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.18.1</version>
  </dependency>

  <!-- TestNG -->
  <dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.9.0</version>
    <scope>test</scope>
  </dependency>
</dependencies>`}
            />
          </Sub>

          <Sub
            id="download-browser-driver"
            title="Download browser driver"
            description="Selenium 4.6+ includes Selenium Manager which automatically downloads the correct driver. For manual setup, use the code below."
          >
            <CodeBlock
              tag="Java"
              title="Chrome driver setup (Selenium 4.6+)"
              lang="java"
              code={`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

// Selenium Manager handles driver download automatically
WebDriver driver = new ChromeDriver();`}
            />
            <CodeBlock
              tag="Java"
              title="Manual driver path (older approach)"
              lang="java"
              code={`// Only needed if not using Selenium Manager
System.setProperty(
  "webdriver.chrome.driver",
  "/path/to/chromedriver"
);
WebDriver driver = new ChromeDriver();`}
            />
          </Sub>

          <Sub
            id="project-structure"
            title="Project structure"
            description="Recommended directory layout for a well-organised Selenium Maven project."
          >
            <CodeBlock
              tag="plaintext"
              title="Recommended project structure"
              lang="plaintext"
              code={`selenium-project/
├── src/
│   ├── main/java/com/example/
│   │   ├── pages/          # Page Object classes
│   │   └── utils/          # Reusable helpers (DriverFactory, etc.)
│   └── test/java/com/example/
│       └── tests/          # Test classes
├── test-output/            # TestNG reports
├── screenshots/            # Failure screenshots
└── pom.xml`}
            />
          </Sub>
        </Section>

        {/* ── 3. WebDriver basics ── */}
        <Section id="webdriver-basics" title="WebDriver basics">
          <Sub
            id="launch-browser"
            title="Launch browser"
            description="Instantiate a browser-specific WebDriver. Selenium Manager fetches the matching driver binary automatically."
          >
            <CodeBlock
              tag="Java"
              title="Launch Chrome, Firefox, and Edge"
              lang="java"
              code={`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

// Chrome
WebDriver driver = new ChromeDriver();

// Chrome headless
ChromeOptions options = new ChromeOptions();
options.addArguments("--headless=new", "--window-size=1920,1080");
WebDriver driver = new ChromeDriver(options);

// Firefox
WebDriver driver = new FirefoxDriver();

// Edge
WebDriver driver = new EdgeDriver();`}
            />
          </Sub>

          <Sub
            id="open-url"
            title="Open URL"
            description="Navigate the browser to a specific URL."
          >
            <CodeBlock
              tag="Java"
              title="Open a URL"
              lang="java"
              code={`driver.get("https://www.example.com");

// Alternative — navigate().to() allows back/forward after
driver.navigate().to("https://www.example.com");

// Get the current URL
String currentUrl = driver.getCurrentUrl();
System.out.println(currentUrl);`}
            />
          </Sub>

          <Sub
            id="close-browser"
            title="Close browser"
            description="Always close the browser at the end of tests to release resources."
          >
            <CodeBlock
              tag="Java"
              title="close() vs quit()"
              lang="java"
              code={`// Close only the current tab/window
driver.close();

// Quit the entire browser session and kill the driver process
driver.quit();`}
            />
            <Note>
              Always call{" "}
              <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
                driver.quit()
              </code>{" "}
              in your{" "}
              <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
                @AfterMethod
              </code>{" "}
              or{" "}
              <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
                @AfterClass
              </code>{" "}
              block. Forgetting this leaves orphaned browser processes which consume memory over many test runs.
            </Note>
          </Sub>

          <Sub
            id="navigate-commands"
            title="Navigate commands"
            description="Control browser navigation — back, forward, and refresh."
          >
            <CodeBlock
              tag="Java"
              title="Browser navigation"
              lang="java"
              code={`// Navigate back
driver.navigate().back();

// Navigate forward
driver.navigate().forward();

// Refresh the current page
driver.navigate().refresh();

// Navigate to a URL
driver.navigate().to("https://example.com/dashboard");`}
            />
          </Sub>

          <Sub
            id="manage-window"
            title="Manage window"
            description="Control browser window size, position, and state."
          >
            <CodeBlock
              tag="Java"
              title="Window management"
              lang="java"
              code={`import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;

// Maximise window
driver.manage().window().maximize();

// Set custom size
driver.manage().window().setSize(new Dimension(1366, 768));

// Set window position
driver.manage().window().setPosition(new Point(0, 0));

// Fullscreen
driver.manage().window().fullscreen();

// Get current window size
Dimension size = driver.manage().window().getSize();
System.out.println("Width: " + size.width + ", Height: " + size.height);`}
            />
          </Sub>
        </Section>

        {/* ── 4. Locators ── */}
        <Section id="locators" title="Locators">
          <p className="text-[13px] text-muted-foreground leading-relaxed -mt-2">
            Locators tell WebDriver how to find elements on a page. Selenium 4 uses the{" "}
            <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">By</code>{" "}
            class for all strategies. Prefer ID and CSS Selectors over XPath for performance.
          </p>

          <Sub
            id="locate-by-id"
            title="Locate by ID"
            description="The fastest and most reliable locator. Use it whenever an element has a unique id attribute."
          >
            <CodeBlock
              tag="Java"
              title="Find element by ID"
              lang="java"
              code={`WebElement loginBtn = driver.findElement(By.id("login-button"));
loginBtn.click();`}
            />
          </Sub>

          <Sub
            id="locate-by-name"
            title="Locate by Name"
            description="Useful for form inputs that have a name attribute."
          >
            <CodeBlock
              tag="Java"
              title="Find element by Name"
              lang="java"
              code={`WebElement usernameField = driver.findElement(By.name("username"));
usernameField.sendKeys("admin");`}
            />
          </Sub>

          <Sub
            id="locate-by-classname"
            title="Locate by ClassName"
            description="Match elements by their CSS class. Use only with a single class name — not compound class strings."
          >
            <CodeBlock
              tag="Java"
              title="Find element by ClassName"
              lang="java"
              code={`// Single class name only
WebElement header = driver.findElement(By.className("page-header"));

// For multiple classes, use CSS Selector instead
WebElement card = driver.findElement(By.cssSelector(".card.active"));`}
            />
          </Sub>

          <Sub
            id="locate-by-tagname"
            title="Locate by TagName"
            description="Finds elements by their HTML tag. Mostly useful for finding all elements of a type."
          >
            <CodeBlock
              tag="Java"
              title="Find elements by TagName"
              lang="java"
              code={`import java.util.List;

// Find all links on the page
List<WebElement> allLinks = driver.findElements(By.tagName("a"));
System.out.println("Total links: " + allLinks.size());

// Find the page title element
WebElement h1 = driver.findElement(By.tagName("h1"));`}
            />
          </Sub>

          <Sub
            id="locate-by-css"
            title="Locate by CSS Selector"
            description="Powerful and fast. Supports attribute matching, pseudo-classes, and descendant selectors."
          >
            <CodeBlock
              tag="Java"
              title="CSS Selector examples"
              lang="java"
              code={`// By id
driver.findElement(By.cssSelector("#submit-btn"));

// By class
driver.findElement(By.cssSelector(".btn-primary"));

// By attribute
driver.findElement(By.cssSelector("input[type='email']"));

// By attribute value contains
driver.findElement(By.cssSelector("a[href*='dashboard']"));

// Child combinator
driver.findElement(By.cssSelector("form > div > input"));

// Nth child
driver.findElement(By.cssSelector("table tr:nth-child(2)"));`}
            />
          </Sub>

          <Sub
            id="locate-by-xpath"
            title="Locate by XPath"
            description="Most flexible locator — can traverse up the DOM and match by text. Use as a last resort due to slower performance."
          >
            <CodeBlock
              tag="Java"
              title="XPath examples"
              lang="java"
              code={`// Absolute XPath (fragile — avoid)
driver.findElement(By.xpath("/html/body/div[1]/form/input"));

// Relative XPath (preferred)
driver.findElement(By.xpath("//input[@id='username']"));

// By text content
driver.findElement(By.xpath("//button[text()='Login']"));

// Partial text match
driver.findElement(By.xpath("//a[contains(text(),'Dashboard')]"));

// Parent traversal
driver.findElement(By.xpath("//label[text()='Email']/following-sibling::input"));`}
            />
          </Sub>

          <Sub
            id="locate-by-linktext"
            title="Locate by Link Text"
            description="Match anchor tags by their visible text. Use partial link text when the full text is dynamic."
          >
            <CodeBlock
              tag="Java"
              title="Link Text and Partial Link Text"
              lang="java"
              code={`// Exact link text
driver.findElement(By.linkText("Forgot Password?"));

// Partial link text (useful when text contains dynamic parts)
driver.findElement(By.partialLinkText("Forgot"));`}
            />
          </Sub>
        </Section>

        {/* ── 5. WebElement actions ── */}
        <Section id="webelement-actions" title="WebElement actions">
          <Sub
            id="click-element"
            title="Click element"
            description="Simulate a mouse click on any clickable element."
          >
            <CodeBlock
              tag="Java"
              title="Click an element"
              lang="java"
              code={`WebElement button = driver.findElement(By.id("submit"));
button.click();`}
            />
          </Sub>

          <Sub
            id="send-keys"
            title="Send keys"
            description="Type text into input fields or send special keyboard keys."
          >
            <CodeBlock
              tag="Java"
              title="Typing and special keys"
              lang="java"
              code={`import org.openqa.selenium.Keys;

WebElement searchBox = driver.findElement(By.name("q"));

// Type text
searchBox.sendKeys("Selenium WebDriver");

// Type text then press Enter
searchBox.sendKeys("Selenium WebDriver" + Keys.ENTER);

// Use Keys constants
searchBox.sendKeys(Keys.CONTROL + "a"); // Select all
searchBox.sendKeys(Keys.TAB);           // Tab to next field
searchBox.sendKeys(Keys.ESCAPE);        // Dismiss`}
            />
          </Sub>

          <Sub
            id="clear-input"
            title="Clear input field"
            description="Remove all text from an input element before typing new text."
          >
            <CodeBlock
              tag="Java"
              title="Clear an input field"
              lang="java"
              code={`WebElement emailField = driver.findElement(By.id("email"));
emailField.clear();
emailField.sendKeys("new@example.com");`}
            />
          </Sub>

          <Sub
            id="get-text"
            title="Get text"
            description="Retrieve the visible text content of an element."
          >
            <CodeBlock
              tag="Java"
              title="Read element text"
              lang="java"
              code={`WebElement heading = driver.findElement(By.tagName("h1"));
String text = heading.getText();
System.out.println(text); // "Welcome back"

// Page title
String title = driver.getTitle();`}
            />
          </Sub>

          <Sub
            id="get-attribute"
            title="Get attribute"
            description="Read any HTML attribute value from an element."
          >
            <CodeBlock
              tag="Java"
              title="Read element attributes"
              lang="java"
              code={`WebElement input = driver.findElement(By.id("email"));

// Get the value attribute
String value = input.getAttribute("value");

// Get placeholder
String placeholder = input.getAttribute("placeholder");

// Get href from a link
String href = driver.findElement(By.linkText("Home"))
                    .getAttribute("href");

// Get CSS property
String color = input.getCssValue("color");`}
            />
          </Sub>

          <Sub
            id="is-displayed"
            title="Check if displayed"
            description="Verify that an element is visible in the viewport."
          >
            <CodeBlock
              tag="Java"
              title="isDisplayed()"
              lang="java"
              code={`WebElement errorMsg = driver.findElement(By.id("error-banner"));
if (errorMsg.isDisplayed()) {
    System.out.println("Error: " + errorMsg.getText());
}`}
            />
          </Sub>

          <Sub
            id="is-enabled"
            title="Check if enabled"
            description="Verify that an interactive element (button, input) is not disabled."
          >
            <CodeBlock
              tag="Java"
              title="isEnabled()"
              lang="java"
              code={`WebElement submitBtn = driver.findElement(By.id("submit"));
if (submitBtn.isEnabled()) {
    submitBtn.click();
} else {
    System.out.println("Submit button is disabled");
}`}
            />
          </Sub>

          <Sub
            id="is-selected"
            title="Check if selected"
            description="Verify the state of checkboxes, radio buttons, and select options."
          >
            <CodeBlock
              tag="Java"
              title="isSelected()"
              lang="java"
              code={`WebElement checkbox = driver.findElement(By.id("terms"));
System.out.println("Checked: " + checkbox.isSelected());

// Select if not already selected
if (!checkbox.isSelected()) {
    checkbox.click();
}`}
            />
          </Sub>
        </Section>

        {/* ── 6. Waits ── */}
        <Section id="waits" title="Waits">
          <p className="text-[13px] text-muted-foreground leading-relaxed -mt-2">
            Web pages load asynchronously. Waits tell WebDriver to pause execution
            until a condition is met, preventing{" "}
            <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
              NoSuchElementException
            </code>{" "}
            and flaky tests.
          </p>

          <Sub
            id="implicit-wait"
            title="Implicit wait"
            description="Sets a global timeout for every findElement call. WebDriver polls until the element appears or the timeout expires."
          >
            <CodeBlock
              tag="Java"
              title="Implicit wait setup"
              lang="java"
              code={`import java.time.Duration;

// Set once after creating the driver — applies globally
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));`}
            />
            <Note title="Do not mix implicit and explicit waits">
              Mixing implicit and explicit waits causes unpredictable timeout behaviour. Pick one strategy per project — explicit waits are the recommended approach.
            </Note>
          </Sub>

          <Sub
            id="explicit-wait"
            title="Explicit wait"
            description="Wait for a specific condition to be true before continuing. The most reliable wait strategy."
          >
            <CodeBlock
              tag="Java"
              title="WebDriverWait with ExpectedConditions"
              lang="java"
              code={`import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));

// Wait for element to be visible
WebElement element = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.id("result"))
);

// Wait for element to be clickable
WebElement btn = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("submit"))
);
btn.click();

// Wait for text to be present
wait.until(ExpectedConditions.textToBePresentInElementLocated(
    By.id("status"), "Complete"
));`}
            />
          </Sub>

          <Sub
            id="fluent-wait"
            title="Fluent wait"
            description="Like explicit wait but with configurable polling interval and the ability to ignore specific exceptions during polling."
          >
            <CodeBlock
              tag="Java"
              title="FluentWait configuration"
              lang="java"
              code={`import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.NoSuchElementException;
import java.time.Duration;

FluentWait<WebDriver> wait = new FluentWait<>(driver)
    .withTimeout(Duration.ofSeconds(30))
    .pollingEvery(Duration.ofMillis(500))
    .ignoring(NoSuchElementException.class);

WebElement element = wait.until(driver ->
    driver.findElement(By.id("dynamic-content"))
);`}
            />
          </Sub>

          <Sub
            id="expected-conditions"
            title="Expected conditions"
            description="Commonly used built-in conditions from the ExpectedConditions utility class."
          >
            <CodeBlock
              tag="Java"
              title="Common ExpectedConditions"
              lang="java"
              code={`// Element is present in DOM (not necessarily visible)
ExpectedConditions.presenceOfElementLocated(By.id("loader"))

// Element is visible and has non-zero size
ExpectedConditions.visibilityOfElementLocated(By.id("modal"))

// Element is visible and enabled (ready to click)
ExpectedConditions.elementToBeClickable(By.id("submit"))

// Element is no longer in the DOM
ExpectedConditions.stalenessOf(oldElement)

// URL contains a substring
ExpectedConditions.urlContains("/dashboard")

// Page title matches exactly
ExpectedConditions.titleIs("Dashboard — MyApp")

// Alert is present
ExpectedConditions.alertIsPresent()`}
            />
          </Sub>
        </Section>

        {/* ── 7. Handling elements ── */}
        <Section id="handling-elements" title="Handling elements">
          <Sub
            id="dropdowns"
            title="Handle dropdowns"
            description="Use the Select class for native HTML <select> dropdowns."
          >
            <CodeBlock
              tag="Java"
              title="Select class — dropdown interaction"
              lang="java"
              code={`import org.openqa.selenium.support.ui.Select;

Select dropdown = new Select(driver.findElement(By.id("country")));

// Select by visible text
dropdown.selectByVisibleText("India");

// Select by value attribute
dropdown.selectByValue("IN");

// Select by index (0-based)
dropdown.selectByIndex(2);

// Get all options
List<WebElement> options = dropdown.getOptions();

// Get currently selected option text
String selected = dropdown.getFirstSelectedOption().getText();`}
            />
          </Sub>

          <Sub
            id="checkboxes"
            title="Handle checkboxes"
            description="Check, uncheck, and verify the state of checkbox inputs."
          >
            <CodeBlock
              tag="Java"
              title="Checkbox interactions"
              lang="java"
              code={`WebElement checkbox = driver.findElement(By.id("terms"));

// Check it (only if not already checked)
if (!checkbox.isSelected()) {
    checkbox.click();
}

// Uncheck it (only if currently checked)
if (checkbox.isSelected()) {
    checkbox.click();
}

System.out.println("Is checked: " + checkbox.isSelected());`}
            />
          </Sub>

          <Sub
            id="radio-buttons"
            title="Handle radio buttons"
            description="Select a specific radio button from a group."
          >
            <CodeBlock
              tag="Java"
              title="Radio button selection"
              lang="java"
              code={`// Select by value attribute
WebElement radio = driver.findElement(
    By.cssSelector("input[type='radio'][value='male']")
);
radio.click();

// Select from a group by index
List<WebElement> radios = driver.findElements(
    By.cssSelector("input[name='gender']")
);
radios.get(1).click(); // Select second option`}
            />
          </Sub>

          <Sub
            id="alerts"
            title="Handle alerts"
            description="Interact with browser alert, confirm, and prompt dialogs."
          >
            <CodeBlock
              tag="Java"
              title="Alert handling"
              lang="java"
              code={`import org.openqa.selenium.Alert;

// Switch to alert
Alert alert = driver.switchTo().alert();

// Get alert text
String alertText = alert.getText();
System.out.println(alertText);

// Accept (click OK)
alert.accept();

// Dismiss (click Cancel)
alert.dismiss();

// Send text to prompt dialog
alert.sendKeys("User input text");
alert.accept();`}
            />
          </Sub>

          <Sub
            id="iframes"
            title="Handle iframes"
            description="Switch WebDriver context into an iframe to interact with its contents."
          >
            <CodeBlock
              tag="Java"
              title="Iframe context switching"
              lang="java"
              code={`// Switch by index
driver.switchTo().frame(0);

// Switch by name or id attribute
driver.switchTo().frame("payment-frame");

// Switch by WebElement reference
WebElement iframe = driver.findElement(By.cssSelector("iframe.editor"));
driver.switchTo().frame(iframe);

// Interact with iframe content
driver.findElement(By.id("card-number")).sendKeys("4111111111111111");

// Return to main document
driver.switchTo().defaultContent();

// Move up one frame level
driver.switchTo().parentFrame();`}
            />
          </Sub>

          <Sub
            id="multiple-windows"
            title="Handle multiple windows"
            description="Switch between browser tabs and windows using window handles."
          >
            <CodeBlock
              tag="Java"
              title="Multi-window handling"
              lang="java"
              code={`// Store the original window handle
String originalWindow = driver.getWindowHandle();

// Click something that opens a new tab
driver.findElement(By.id("open-new-tab")).click();

// Wait for new window and switch to it
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(ExpectedConditions.numberOfWindowsToBe(2));

for (String handle : driver.getWindowHandles()) {
    if (!handle.equals(originalWindow)) {
        driver.switchTo().window(handle);
        break;
    }
}

// Interact with new window...
System.out.println(driver.getTitle());

// Close new window and switch back
driver.close();
driver.switchTo().window(originalWindow);`}
            />
          </Sub>
        </Section>

        {/* ── 8. Advanced user actions ── */}
        <Section id="advanced-user-actions" title="Advanced user actions">
          <Sub
            id="actions-class"
            title="Actions class"
            description="The Actions class lets you chain complex user interactions like hover, drag-and-drop, and multi-key shortcuts."
          >
            <CodeBlock
              tag="Java"
              title="Actions class setup"
              lang="java"
              code={`import org.openqa.selenium.interactions.Actions;

Actions actions = new Actions(driver);

// Always call .perform() at the end to execute the chain
actions.moveToElement(element).click().perform();`}
            />
          </Sub>

          <Sub
            id="mouse-actions"
            title="Mouse actions"
            description="Right-click, double-click, and click-and-hold interactions."
          >
            <CodeBlock
              tag="Java"
              title="Mouse click variants"
              lang="java"
              code={`Actions actions = new Actions(driver);

WebElement element = driver.findElement(By.id("target"));

// Double click
actions.doubleClick(element).perform();

// Right click (context menu)
actions.contextClick(element).perform();

// Click and hold
actions.clickAndHold(element).perform();

// Release
actions.release().perform();`}
            />
          </Sub>

          <Sub
            id="drag-and-drop"
            title="Drag and drop"
            description="Drag an element from a source location to a target element."
          >
            <CodeBlock
              tag="Java"
              title="Drag and drop"
              lang="java"
              code={`Actions actions = new Actions(driver);

WebElement source = driver.findElement(By.id("draggable"));
WebElement target = driver.findElement(By.id("droppable"));

// Drag and drop using built-in method
actions.dragAndDrop(source, target).perform();

// Manual click-hold-move-release (more reliable in some browsers)
actions.clickAndHold(source)
       .moveToElement(target)
       .release()
       .perform();`}
            />
          </Sub>

          <Sub
            id="hover-actions"
            title="Hover actions"
            description="Move the mouse to an element to trigger hover/tooltip states."
          >
            <CodeBlock
              tag="Java"
              title="Mouse hover"
              lang="java"
              code={`Actions actions = new Actions(driver);

WebElement menuItem = driver.findElement(By.id("nav-products"));

// Hover over the element
actions.moveToElement(menuItem).perform();

// Hover then click a revealed sub-menu item
WebElement subMenu = driver.findElement(By.id("sub-electronics"));
actions.moveToElement(menuItem)
       .moveToElement(subMenu)
       .click()
       .perform();`}
            />
          </Sub>

          <Sub
            id="keyboard-actions"
            title="Keyboard actions"
            description="Simulate keyboard shortcuts and modifier key combinations."
          >
            <CodeBlock
              tag="Java"
              title="Keyboard shortcuts"
              lang="java"
              code={`import org.openqa.selenium.Keys;

Actions actions = new Actions(driver);

// Select all (Ctrl+A) then copy (Ctrl+C)
actions.keyDown(Keys.CONTROL)
       .sendKeys("a")
       .sendKeys("c")
       .keyUp(Keys.CONTROL)
       .perform();

// Open new tab (Ctrl+T)
actions.keyDown(Keys.CONTROL)
       .sendKeys("t")
       .keyUp(Keys.CONTROL)
       .perform();

// Press Escape
actions.sendKeys(Keys.ESCAPE).perform();`}
            />
          </Sub>
        </Section>

        {/* ── 9. Executing JavaScript ── */}
        <Section id="executing-javascript" title="Executing JavaScript">
          <Sub
            id="javascript-executor"
            title="JavaScriptExecutor"
            description="Execute arbitrary JavaScript in the context of the current page. Useful when direct WebDriver interaction is unreliable."
          >
            <CodeBlock
              tag="Java"
              title="JavaScriptExecutor setup"
              lang="java"
              code={`import org.openqa.selenium.JavascriptExecutor;

JavascriptExecutor js = (JavascriptExecutor) driver;

// Execute a script that returns a value
Object result = js.executeScript("return document.title;");
System.out.println(result.toString());

// Execute with an element argument
WebElement element = driver.findElement(By.id("target"));
js.executeScript("arguments[0].style.border='2px solid red'", element);`}
            />
          </Sub>

          <Sub
            id="scroll-page"
            title="Scroll page"
            description="Programmatically scroll to positions or elements on the page."
          >
            <CodeBlock
              tag="Java"
              title="Scroll using JavaScript"
              lang="java"
              code={`JavascriptExecutor js = (JavascriptExecutor) driver;

// Scroll to bottom of the page
js.executeScript("window.scrollTo(0, document.body.scrollHeight)");

// Scroll to top
js.executeScript("window.scrollTo(0, 0)");

// Scroll by pixels (x, y)
js.executeScript("window.scrollBy(0, 500)");

// Scroll an element into view
WebElement element = driver.findElement(By.id("footer-cta"));
js.executeScript("arguments[0].scrollIntoView(true);", element);`}
            />
          </Sub>

          <Sub
            id="click-using-js"
            title="Click using JavaScript"
            description="Use JS click when normal WebDriver click fails due to element overlay or animation."
          >
            <CodeBlock
              tag="Java"
              title="JavaScript click"
              lang="java"
              code={`JavascriptExecutor js = (JavascriptExecutor) driver;

WebElement button = driver.findElement(By.id("hidden-btn"));
js.executeScript("arguments[0].click();", button);`}
            />
            <Note>
              Prefer WebDriver's native{" "}
              <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
                .click()
              </code>{" "}
              over JS click. JavaScript click bypasses browser event handling and can make tests pass on elements a real user could never actually click — masking real UI bugs.
            </Note>
          </Sub>

          <Sub
            id="get-page-title-js"
            title="Get page title using JS"
            description="Retrieve page metadata and DOM properties using JavaScript."
          >
            <CodeBlock
              tag="Java"
              title="Page info via JavaScript"
              lang="java"
              code={`JavascriptExecutor js = (JavascriptExecutor) driver;

// Page title
String title = (String) js.executeScript("return document.title;");

// Page URL
String url = (String) js.executeScript("return window.location.href;");

// Read local storage
String token = (String) js.executeScript(
    "return localStorage.getItem('auth_token');"
);

// Page readyState
String state = (String) js.executeScript(
    "return document.readyState;"
);`}
            />
          </Sub>
        </Section>

        {/* ── 10. Taking screenshots ── */}
        <Section id="taking-screenshots" title="Taking screenshots">
          <Sub
            id="capture-screenshot"
            title="Capture screenshot"
            description="Save a screenshot of the current browser viewport to disk."
          >
            <CodeBlock
              tag="Java"
              title="Full-page screenshot"
              lang="java"
              code={`import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.OutputType;
import org.apache.commons.io.FileUtils;
import java.io.File;

TakesScreenshot ts = (TakesScreenshot) driver;
File src = ts.getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(src, new File("screenshots/homepage.png"));`}
            />
            <CodeBlock
              tag="Java"
              title="Screenshot of a specific element"
              lang="java"
              code={`WebElement element = driver.findElement(By.id("chart"));
File src = element.getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(src, new File("screenshots/chart.png"));`}
            />
          </Sub>

          <Sub
            id="screenshot-on-failure"
            title="Screenshot on test failure"
            description="Automatically capture the browser state when a TestNG test fails using a listener."
          >
            <CodeBlock
              tag="Java"
              title="TestNG failure listener"
              lang="java"
              code={`import org.testng.ITestListener;
import org.testng.ITestResult;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ScreenshotListener implements ITestListener {

    @Override
    public void onTestFailure(ITestResult result) {
        Object testInstance = result.getInstance();
        WebDriver driver = ((BaseTest) testInstance).driver;

        String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss")
            .format(new Date());
        String filename = result.getName() + "_" + timestamp + ".png";

        try {
            File src = ((TakesScreenshot) driver)
                .getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(src, new File("screenshots/" + filename));
            System.out.println("Screenshot saved: " + filename);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`}
            />
          </Sub>
        </Section>

        {/* ── 11. Test framework integration ── */}
        <Section id="test-framework-integration" title="Test framework integration">
          <Sub
            id="testng-introduction"
            title="TestNG introduction"
            description="TestNG is the most popular test framework for Selenium in Java. It provides annotations, parallel execution, reporting, and data providers."
          >
            <CodeBlock
              tag="Java"
              title="Basic TestNG test class"
              lang="java"
              code={`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.*;

public class LoginTest {

    WebDriver driver;

    @BeforeClass
    public void setUp() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts()
              .implicitlyWait(Duration.ofSeconds(10));
    }

    @Test
    public void testValidLogin() {
        driver.get("https://example.com/login");
        driver.findElement(By.id("email")).sendKeys("user@test.com");
        driver.findElement(By.id("password")).sendKeys("secret");
        driver.findElement(By.id("submit")).click();
        Assert.assertEquals(driver.getTitle(), "Dashboard");
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
    }
}`}
            />
          </Sub>

          <Sub
            id="junit-introduction"
            title="JUnit introduction"
            description="JUnit 5 is a popular alternative to TestNG, especially in Spring Boot projects."
          >
            <CodeBlock
              tag="Java"
              title="Basic JUnit 5 test class"
              lang="java"
              code={`import org.junit.jupiter.api.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

class LoginTest {

    static WebDriver driver;

    @BeforeAll
    static void setUp() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Test
    void testValidLogin() {
        driver.get("https://example.com/login");
        driver.findElement(By.id("email")).sendKeys("user@test.com");
        driver.findElement(By.id("submit")).click();
        Assertions.assertTrue(driver.getTitle().contains("Dashboard"));
    }

    @AfterAll
    static void tearDown() {
        driver.quit();
    }
}`}
            />
          </Sub>

          <Sub
            id="test-annotations"
            title="Test annotations"
            description="Quick reference for the most important TestNG and JUnit 5 annotations side by side."
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-[12px] font-semibold text-foreground mb-3">TestNG</p>
                <div className="space-y-2">
                  {[
                    ["@BeforeSuite", "Runs once before all tests"],
                    ["@BeforeClass", "Runs once before first method in class"],
                    ["@BeforeMethod", "Runs before each test method"],
                    ["@Test", "Marks a test method"],
                    ["@AfterMethod", "Runs after each test method"],
                    ["@AfterClass", "Runs once after last method in class"],
                    ["@DataProvider", "Supplies test data"],
                  ].map(([ann, desc]) => (
                    <div key={ann} className="flex gap-2">
                      <code className="text-[11px] font-mono text-foreground bg-muted px-1.5 py-0.5 rounded shrink-0">
                        {ann}
                      </code>
                      <span className="text-[12px] text-muted-foreground">
                        {desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-[12px] font-semibold text-foreground mb-3">JUnit 5</p>
                <div className="space-y-2">
                  {[
                    ["@BeforeAll", "Runs once before all tests (static)"],
                    ["@BeforeEach", "Runs before each test method"],
                    ["@Test", "Marks a test method"],
                    ["@AfterEach", "Runs after each test method"],
                    ["@AfterAll", "Runs once after all tests (static)"],
                    ["@ParameterizedTest", "Runs test with multiple inputs"],
                    ["@DisplayName", "Custom name for test output"],
                  ].map(([ann, desc]) => (
                    <div key={ann} className="flex gap-2">
                      <code className="text-[11px] font-mono text-foreground bg-muted px-1.5 py-0.5 rounded shrink-0">
                        {ann}
                      </code>
                      <span className="text-[12px] text-muted-foreground">
                        {desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Sub>

          <Sub
            id="before-after-methods"
            title="Before and After methods"
            description="Centralise driver setup and teardown to avoid repetition across test classes."
          >
            <CodeBlock
              tag="Java"
              title="BaseTest — shared driver lifecycle"
              lang="java"
              code={`public class BaseTest {

    protected WebDriver driver;

    @BeforeMethod
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new", "--no-sandbox");
        driver = new ChromeDriver(options);
        driver.manage().window().maximize();
        driver.manage().timeouts()
              .implicitlyWait(Duration.ofSeconds(10));
    }

    @AfterMethod
    public void tearDown(ITestResult result) {
        if (result.getStatus() == ITestResult.FAILURE) {
            // Take screenshot on failure
        }
        if (driver != null) {
            driver.quit();
        }
    }
}

// Extend in all test classes
public class LoginTest extends BaseTest {
    @Test
    public void testLogin() { ... }
}`}
            />
          </Sub>

          <Sub
            id="assertions"
            title="Assertions"
            description="Validate expected vs actual values. Use TestNG Assert or JUnit Assertions."
          >
            <CodeBlock
              tag="Java"
              title="TestNG and JUnit 5 assertions"
              lang="java"
              code={`// TestNG Assert
Assert.assertEquals(driver.getTitle(), "Dashboard");
Assert.assertTrue(element.isDisplayed());
Assert.assertFalse(errorMsg.isDisplayed());
Assert.assertNotNull(driver.findElement(By.id("profile")));
Assert.assertEquals(actualText, "Welcome, Alice");

// Soft assertions — continue test after failure
SoftAssert softAssert = new SoftAssert();
softAssert.assertEquals(driver.getTitle(), "Dashboard");
softAssert.assertTrue(element.isDisplayed());
softAssert.assertAll(); // evaluate all at once

// JUnit 5 Assertions
Assertions.assertEquals("Dashboard", driver.getTitle());
Assertions.assertTrue(element.isDisplayed());
Assertions.assertAll(
    () -> Assertions.assertEquals("Dashboard", driver.getTitle()),
    () -> Assertions.assertTrue(element.isDisplayed())
);`}
            />
          </Sub>
        </Section>

        {/* ── 12. Design patterns ── */}
        <Section id="design-patterns" title="Design patterns">
          <Sub
            id="page-object-model"
            title="Page Object Model (POM)"
            description="Encapsulate each page's elements and interactions in a dedicated class. Tests call methods instead of manipulating locators directly."
          >
            <CodeBlock
              tag="Java"
              title="LoginPage — Page Object"
              lang="java"
              code={`public class LoginPage {

    private WebDriver driver;

    // Locators
    private By emailField   = By.id("email");
    private By passwordField = By.id("password");
    private By submitButton  = By.id("submit");
    private By errorMessage  = By.cssSelector(".alert-error");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void enterEmail(String email) {
        driver.findElement(emailField).sendKeys(email);
    }

    public void enterPassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
    }

    public void clickSubmit() {
        driver.findElement(submitButton).click();
    }

    public void login(String email, String password) {
        enterEmail(email);
        enterPassword(password);
        clickSubmit();
    }

    public String getErrorMessage() {
        return driver.findElement(errorMessage).getText();
    }
}

// Usage in test
LoginPage loginPage = new LoginPage(driver);
loginPage.login("user@test.com", "secret");`}
            />
          </Sub>

          <Sub
            id="page-factory"
            title="Page Factory"
            description="Use @FindBy annotations with PageFactory.initElements to declare locators more cleanly."
          >
            <CodeBlock
              tag="Java"
              title="LoginPage with Page Factory"
              lang="java"
              code={`import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    @FindBy(id = "email")
    private WebElement emailField;

    @FindBy(id = "password")
    private WebElement passwordField;

    @FindBy(id = "submit")
    private WebElement submitButton;

    @FindBy(css = ".alert-error")
    private WebElement errorMessage;

    public LoginPage(WebDriver driver) {
        // Initialises all @FindBy elements
        PageFactory.initElements(driver, this);
    }

    public void login(String email, String password) {
        emailField.sendKeys(email);
        passwordField.sendKeys(password);
        submitButton.click();
    }

    public String getErrorMessage() {
        return errorMessage.getText();
    }
}`}
            />
          </Sub>

          <Sub
            id="data-driven-testing"
            title="Data driven testing"
            description="Run the same test with multiple data sets using TestNG DataProvider or JUnit ParameterizedTest."
          >
            <CodeBlock
              tag="Java"
              title="TestNG DataProvider"
              lang="java"
              code={`@DataProvider(name = "loginData")
public Object[][] getLoginData() {
    return new Object[][] {
        { "admin@test.com",   "admin123",  true  },
        { "user@test.com",    "user123",   true  },
        { "invalid@test.com", "wrongpass", false },
    };
}

@Test(dataProvider = "loginData")
public void testLogin(String email, String password, boolean shouldPass) {
    LoginPage page = new LoginPage(driver);
    driver.get("https://example.com/login");
    page.login(email, password);

    if (shouldPass) {
        Assert.assertEquals(driver.getTitle(), "Dashboard");
    } else {
        Assert.assertTrue(page.getErrorMessage().contains("Invalid"));
    }
}`}
            />
          </Sub>
        </Section>

        {/* ── 13. Best practices ── */}
        <Section id="best-practices" title="Best practices">
          <Sub
            id="locator-strategies"
            title="Locator strategies"
            description="Pick locators that are stable, readable, and performant."
          >
            <CodeBlock
              tag="Java"
              title="Locator priority guide"
              lang="java"
              code={`// ✅ Best — unique, stable ID
driver.findElement(By.id("submit-btn"));

// ✅ Good — CSS selector, fast and readable
driver.findElement(By.cssSelector("[data-testid='submit']"));
driver.findElement(By.cssSelector("input[name='email']"));

// ⚠️  Acceptable — but class names change with UI refactors
driver.findElement(By.className("btn-primary"));

// ❌ Avoid — absolute XPath breaks on any DOM change
driver.findElement(By.xpath("/html/body/div/form/button"));

// ✅ If XPath needed, use relative with attributes
driver.findElement(By.xpath("//button[@data-testid='submit']"));`}
            />
          </Sub>

          <Sub
            id="test-structure"
            title="Test structure"
            description="Follow the Arrange-Act-Assert pattern and keep tests independent."
          >
            <CodeBlock
              tag="Java"
              title="AAA test pattern"
              lang="java"
              code={`@Test
public void testSuccessfulCheckout() {
    // Arrange — set up preconditions
    driver.get("https://example.com");
    LoginPage loginPage = new LoginPage(driver);
    loginPage.login("user@test.com", "password");

    // Act — perform the action being tested
    CartPage cartPage = new CartPage(driver);
    cartPage.addItemToCart("Laptop");
    cartPage.proceedToCheckout();

    // Assert — verify the outcome
    Assert.assertEquals(driver.getTitle(), "Order Confirmed");
    Assert.assertTrue(cartPage.getConfirmationMessage()
                               .contains("Thank you"));
}`}
            />
          </Sub>

          <Sub
            id="avoid-thread-sleep"
            title="Avoid Thread.sleep"
            description="Thread.sleep is a hard-coded delay that makes tests slow and unreliable. Replace it with explicit waits."
          >
            <CodeBlock
              tag="Java"
              title="Replace Thread.sleep with explicit waits"
              lang="java"
              code={`// ❌ Never do this
Thread.sleep(3000); // Always waits 3 seconds even if element appears in 100ms

// ✅ Do this instead — waits up to 10s, continues as soon as condition is met
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("result")));`}
            />
          </Sub>

          <Sub
            id="reusable-methods"
            title="Reusable methods"
            description="Extract common interactions into utility methods to keep tests DRY and easy to maintain."
          >
            <CodeBlock
              tag="Java"
              title="WebDriverUtils helper class"
              lang="java"
              code={`public class WebDriverUtils {

    private WebDriver driver;
    private WebDriverWait wait;

    public WebDriverUtils(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(15));
    }

    public void clickWhenReady(By locator) {
        wait.until(ExpectedConditions.elementToBeClickable(locator)).click();
    }

    public void typeWhenReady(By locator, String text) {
        WebElement el = wait.until(
            ExpectedConditions.visibilityOfElementLocated(locator)
        );
        el.clear();
        el.sendKeys(text);
    }

    public String getTextWhenVisible(By locator) {
        return wait.until(
            ExpectedConditions.visibilityOfElementLocated(locator)
        ).getText();
    }

    public void scrollToElement(By locator) {
        WebElement el = driver.findElement(locator);
        ((JavascriptExecutor) driver)
            .executeScript("arguments[0].scrollIntoView(true);", el);
    }
}`}
            />
          </Sub>

          <Note title="Golden rules">
            Keep each test independent — no test should rely on another test's side effects. Clean up test data after each run. Use{" "}
            <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
              data-testid
            </code>{" "}
            attributes (added by your dev team) as the most stable locator strategy.
          </Note>
        </Section>

      </div>
    </main>
  );
}