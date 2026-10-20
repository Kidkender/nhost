export interface TextMatch {
  from: number;
  to: number;
}

/**
 * Finds every occurrence of `term` in `text`, case-insensitively. Matches do
 * not overlap: the search continues after the end of the previous match.
 */
export default function findTextMatches(
  text: string,
  term: string,
): TextMatch[] {
  if (!term) {
    return [];
  }

  const haystack = text.toLowerCase();
  const needle = term.toLowerCase();
  const matches: TextMatch[] = [];

  for (
    let from = haystack.indexOf(needle);
    from !== -1;
    from = haystack.indexOf(needle, from + needle.length)
  ) {
    matches.push({ from, to: from + needle.length });
  }

  return matches;
}
