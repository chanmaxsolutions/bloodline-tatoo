export interface PageSeoInput {
  title: string;
  description: string;
  canonicalPath: string;
  /** Optional social preview image path; defaults to regional logo. */
  ogImagePath?: string;
}
