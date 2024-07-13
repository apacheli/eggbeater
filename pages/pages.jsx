export const title = "My Pages";
export const description = "Hello, World!";

export default ({ pages }) => (
  <>
    <img src="/assets/icon.png" alt="The eggbeater logo." />
    <h1>My Pages</h1>
    <ul>
      {pages.map((page) => (
        <li>
          <a href={page.path.slice(0, -5)}>{page.mod.title}</a>
        </li>
      ))}
    </ul>
  </>
);