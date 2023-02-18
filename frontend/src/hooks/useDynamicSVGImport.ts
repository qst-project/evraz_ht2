import React, {
    useEffect, useRef, useState,
} from 'react';

function useDynamicSVGImport(name: string) {
    const ImportedIconRef = useRef<React.FC>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (
                    await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../assets/images/${name}.svg`)
                ).ReactComponent;
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name]);

    return { error, loading, SvgIcon: ImportedIconRef.current };
}

export default useDynamicSVGImport;
