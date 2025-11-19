export function matchPath(path, patterns) {
  return patterns.some((p) => {
    if (p.endsWith("/*")) {
      return path.startsWith(p.replace("/*", ""));
    }
    return path === p;
  });
}
