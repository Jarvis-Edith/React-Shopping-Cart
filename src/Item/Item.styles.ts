import styled from 'styled-components';

export const Wrapper = styled.div`

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 10px;
    height:100%;

    button{
        font-family: 'Product Sans';
        font-weight: 600;
        font-size: 13px;
        width: 120px;
        background-color: skyblue;
        border-radius: 5px;
        margin: 0 auto;
        margin-bottom: 15px;
    }

    img{
        margin: 10px;
        height: 250px;
        object-fit: cover;
        border-radius: 15px 15px 0 0; 
    }

    div{
        font-family: 'Product Sans';
        padding: 1rem;
        height: 100%;
        text-align: justify;
    }

    h3{
        text-align: center;
        height: 60px;
    }

    h2{
        font-family: 'Product Sans';
        font-size: 18px;
        text-align: center;
    }
`;