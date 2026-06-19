# Playwright E2E Testing with GitHub Actions CI/CD

E2E automation test suite built with Playwright and TypeScript, featuring Page Object Model architecture and automated CI/CD pipeline using GitHub Actions.

---

## 🛠️ Tech Stack

- **Framework:** Playwright
- **Language:** TypeScript
- **Architecture:** Page Object Model (POM)
- **CI/CD:** GitHub Actions
- **Browsers:** Chromium, Firefox

---

## 📁 Project Structure
playwright-ts-demo/

├── .github/workflows/
│   └── ci.yml
├── pages/
│   ├── LoginPage.ts
│   └── HomePage.ts
├── tests/
│   ├── login.spec.ts
│   └── home.spec.ts
├── utils/
├── playwright.config.ts
├── package.json
└── tsconfig.json
---

## ✅ Test Scenarios

### Login page
- Successful login with valid credentials
- Failed login with invalid password

### Home page
- Page title is correct
- Main heading is visible

---

## ▶️ How to Run

**Install dependencies:**
```bash
npm install
```

**Install browsers:**
```bash
npx playwright install
```

**Run all tests:**
```bash
npx playwright test
```

**Run in headed mode:**
```bash
npx playwright test --headed
```

**Run on Chromium only:**
```bash
npx playwright test --project=chromium
```

**View HTML report:**
```bash
npx playwright show-report
```

---

## ⚙️ CI/CD Pipeline

Every push to the `main` branch automatically triggers the GitHub Actions pipeline which:

1. Sets up Node.js environment
2. Installs dependencies
3. Installs Playwright browsers
4. Runs all tests across Chromium and Firefox
5. Uploads the HTML test report as a downloadable artifact

---

## 🌐 Application Under Test

**The Internet** — https://the-internet.herokuapp.com  
A free, stable practice web application maintained by Sauce Labs, designed specifically for automation testing practice.
