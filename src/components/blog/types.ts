/**
 * Local structural mirror of the frozen blog contract.
 * The canonical types live in `src/types/blog.ts` (owned by the data lane);
 * these interfaces must stay field-for-field identical so the two remain
 * structurally compatible no matter which side is imported.
 */
export interface BlogPostSummary {
  slug: string;
  title: string;
  description: string;
  publishDate: Date;
  category: string;
  tags: string[];
  readingTime: number;
  cover?: string;
}

export interface BlogPostDetail extends BlogPostSummary {
  author: string;
  updatedDate?: Date;
  keywords: string[];
}
