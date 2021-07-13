import styled from 'styled-components';
import Box from '../Box';

export const ProfileRelationsBoxWrapper = styled(Box)`

    ul {
        display: grid;
        grid-gap: 8px;grid-template-columns: 1fr 1fr 1fr;
        max-height: 220px;
        list-style: none;
    }
    img {
        objetct-fit: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        position: relative;
    }
    ul li a {
        display: inline-block;
        height: 102px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
    }
`
