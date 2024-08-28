import { useContext, useState, useEffect } from 'react';
import { Box, styled} from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    height:41vh;
`;

const Result = () => {
    const [ src, setSrc ] = useState('');
    const { html, css, js } = useContext(DataContext);

    useEffect(() => {       
        const timeout = setTimeout(() => {
            const srcCode = `
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `;
            setSrc(srcCode);
        }, 1000); // Increased to 5000 milliseconds (5 seconds)

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <Container>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox='allow-scripts'
                frameBorder={0}
                width="100%"
                height="100%"
            />
        </Container>
    );
};

export default Result;
