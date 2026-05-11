export interface DescriptionEmphasisSegment {
  text: string;
  emphasis: boolean;
}

/**
 * Splits copy on `**like this**` markers into plain / emphasized runs.
 * Markers must not contain `*` inside the highlighted phrase.
 */
function splitDescriptionEmphasis(input: string): DescriptionEmphasisSegment[] {
  const segments: DescriptionEmphasisSegment[] = [];
  const re = /\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(input)) !== null) {
    if (m.index > last) {
      segments.push({ text: input.slice(last, m.index), emphasis: false });
    }
    segments.push({ text: m[1], emphasis: true });
    last = m.index + m[0].length;
  }
  if (last < input.length) {
    segments.push({ text: input.slice(last), emphasis: false });
  }
  return segments;
}

export { splitDescriptionEmphasis };
