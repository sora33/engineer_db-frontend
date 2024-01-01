export function formatContent(content: string) {
  if (!content) return null;
  return content.split("\n").map((line, index) => <p key={index}>{line}</p>);
}

export const componentDecorator = (href: string, text: string, key: number) => (
  <a href={href} key={key} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);
