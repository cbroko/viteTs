import "./style.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://www.bouvet.no/" target="_blank">
      <img src="/bouvet.png" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="/typescript.svg" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Bouvet + Online = TypeScript ❤️</h1>
  </div>
`;
