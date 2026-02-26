import { useEffect } from 'react';

const MetaSEO = ({ title, description, schema }) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
        if (description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = 'description';
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = description;
        }
        if (schema) {
            let scriptTag = document.querySelector('script[data-seo="schema"]');
            if (!scriptTag) {
                scriptTag = document.createElement('script');
                scriptTag.type = 'application/ld+json';
                scriptTag.setAttribute('data-seo', 'schema');
                document.head.appendChild(scriptTag);
            }
            scriptTag.textContent = JSON.stringify(schema);
        }
    }, [title, description, schema]);

    return null;
};

export default MetaSEO;
