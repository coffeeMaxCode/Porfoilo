// Eagerly bundle every image under src/assets/imgs so Vite emits hashed,
// base-prefixed URLs that work in both dev and the GitHub Pages build.
const images = import.meta.glob('../assets/imgs/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export function asset(path: string): string {
  // Map data paths like 'src/assets/imgs/projects/x.jpg' to glob keys
  // relative to this file ('../assets/imgs/projects/x.jpg').
  const key = path.replace(/^\/?src\//, '../')
  return images[key] ?? path
}
