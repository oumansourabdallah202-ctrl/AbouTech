export const setMetaTags = (title: string, description: string, keywords: string) => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');

    if (metaDescription) {
        metaDescription.setAttribute('content', description);
    } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = description;
        document.head.appendChild(newMetaDescription);
    }

    if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
    } else {
        const newMetaKeywords = document.createElement('meta');
        newMetaKeywords.name = 'keywords';
        newMetaKeywords.content = keywords;
        document.head.appendChild(newMetaKeywords);
    }
};

export const setCanonicalLink = (url: string) => {
    let link = document.querySelector('link[rel="canonical"]');
    if (link) {
        link.setAttribute('href', url);
    } else {
        link = document.createElement('link');
        link.rel = 'canonical';
        link.href = url;
        document.head.appendChild(link);
    }
};