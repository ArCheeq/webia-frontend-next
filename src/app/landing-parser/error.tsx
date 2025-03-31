'use client';

import { useEffect } from 'react';

import styled from "styled-components";

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <Container>
            <Heading>Something went wrong!</Heading>
            <Message>{error.message}</Message>
            <RetryButton onClick={reset}>Try again</RetryButton>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #0f0f0f;
    color: #fff;
    text-align: center;
    padding: 20px;
`;

const Heading = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Message = styled.p`
    font-size: 18px;
    opacity: 0.8;
    margin-bottom: 20px;
    font-weight: 700;
    border: 1px solid #f03e3e;
    padding: 10px 20px;
    border-radius: 5px;
    color: #f03e3e;
`;

const RetryButton = styled.button`
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;

    &:hover {
        background: #fff;
        color: #0f0f0f;
    }
`;