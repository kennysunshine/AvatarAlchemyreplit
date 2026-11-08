/**
 * Renders schema.org data as a plain <script type="application/ld+json"> tag in the server HTML,
 * so crawlers that don't run JavaScript (most AI crawlers) can read it.
 */
export function JsonLd({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
    );
}
