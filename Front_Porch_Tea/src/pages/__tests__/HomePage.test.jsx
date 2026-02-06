// src/pages/__tests__/HomePage.test.jsx
import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('HomePage Component', () => {
  const mockProducts = [
    {
      id: 1,
      name: 'Sweet Tea',
      price: 4.99,
      image: 'test-image.jpg',
      description: 'Classic southern sweet tea',
    },
  ];

  const mockAddToCart = vi.fn();

  // Helper function to DRY up tests
  const renderHomePage = () =>
    render(
      <MemoryRouter>
        <HomePage products={mockProducts} addToCart={mockAddToCart} />
      </MemoryRouter>
    );

  test('renders without crashing', () => {
    renderHomePage();
  });

  test('renders hero content', () => {
    renderHomePage();
    expect(screen.getByText('Welcome to Front Porch Tea')).toBeInTheDocument();
    expect(
      screen.getByText('Discover the finest teas for every mood')
    ).toBeInTheDocument();
  });

  test('renders section title', () => {
    renderHomePage();
    expect(screen.getByText('Our Fan Favorite Teas')).toBeInTheDocument();
  });

  test('renders product cards from props', () => {
    renderHomePage();
    expect(screen.getByText('Sweet Tea')).toBeInTheDocument();
    expect(screen.getByText(/4.99/)).toBeInTheDocument();
  });
});
