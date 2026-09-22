# Portfolio RAG and AI Workflow

## Goal
Update the public "Buscador con IA" case study with verified current capabilities and add a bilingual section explaining a human-owned, AI-assisted engineering workflow.

## Evidence sources
- `/Users/diegofernandolibreros/Desktop/diego-work/search/README.md`
- Search project OpenSpec/ODD artifacts and Engram observations
- Existing bilingual portfolio model in `lib/i18n/`

## Scope
- Update the existing RAG project copy without exposing private implementation details or unsupported claims.
- Add a new responsive section covering Pi, gentle-pi, Engram, CodeGraph, and OpenSpec as parts of a controlled engineering workflow.
- Preserve Spanish/English parity and static export compatibility.

## Tasks
- [x] Define verified bilingual RAG and AI-workflow content.
- [x] Build the AI-assisted engineering section.
- [x] Integrate navigation and homepage placement.
- [x] Run focused diagnostics and production verification.
- [x] Design a portfolio-friendly POST chat flow diagram from the current endpoint documentation.
- [x] Replace `public/search-ia.png` and keep an editable SVG source.
- [x] Validate the generated image.
- [x] Rebuild the portfolio after the image refresh.

## Allowed edit surfaces
- `lib/i18n/content.ts`
- `lib/i18n/translations.ts`
- `components/sections/AiAssistedWork.tsx`
- `components/layout/Navbar.tsx`
- `app/page.tsx`
- `odd/tasks/portfolio-rag-ai-workflow.md`
- `public/search-ia.svg`
- `public/search-ia.png`

## Constraints
- Do not modify unrelated existing changes in `.gitignore` or `.codegraph/`.
- Do not publish confidential company details.
- Do not retain the unsupported HuggingFace claim unless repository evidence confirms it.
- No commit or push without explicit user authorization.

## Verification
- Type/LSP diagnostics on changed TypeScript files.
- Production build.

## Evidence log
- Verified the RAG copy against `/Users/diegofernandolibreros/Desktop/diego-work/search/README.md`: NestJS 11, Azure Cognitive Search, embeddings, supported ingestion formats, query expansion, TOON context, selectable Groq/OpenAI providers, SSE, scoped chat, and bounded MCP tools.
- Removed unsupported HuggingFace and ~40% token-consumption claims from the RAG project and Axonier experience copy.
- Added typed bilingual workflow content, the responsive `AiAssistedWork` section, homepage placement, and localized navigation.
- `npx tsc --noEmit` passed.
- `npm run build` passed: compilation, lint/type checks, static generation, and static export completed successfully. Only pre-existing Sass `@import` deprecation warnings were reported.
- LSP diagnostics found no blocking issue; the only warning is the repository-wide extensionless relative-import rule on `lib/i18n/content.ts`.
- Created `public/search-ia.svg` as a self-contained, editable 1600×1000 architecture diagram from `chat-post-endpoints-flow.md`; it covers authenticated POST entry, guards and stateless history, SITE/GLOBAL retrieval, original-chunk TOON context, AI generation, and manual SSE.
- Rendered the SVG with the installed `sharp` package to `public/search-ia.png` (1600×1000, 272143 bytes). Read the PNG back for visual sanity.
- `npm run build` passed after the image refresh: lint/type checks, static generation, and export completed without image errors.
