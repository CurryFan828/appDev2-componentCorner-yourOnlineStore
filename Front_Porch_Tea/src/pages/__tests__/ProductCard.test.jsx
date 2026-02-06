// src/components/__tests__/ProductCard.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import ProductCard from "../../components/ProductCard";

describe("ProductCard Component", () => {
  // Mock product data
  const mockProduct = {
    id: 1,
    name: "Sweet Tea",
    price: 4.99,
    image: "test-image.jpg",
    description: "Classic southern sweet tea",
  };

  // Mock addToCart function
  const mockAddToCart = vi.fn();

  // Helper to DRY up test renders
  const renderProductCard = () => {
    render(
      <MemoryRouter>
        <ProductCard
          id={mockProduct.id}
          name={mockProduct.name}
          price={mockProduct.price}
          image={mockProduct.image}
          description={mockProduct.description}
          addToCart={mockAddToCart}
        />
      </MemoryRouter>
    );
  };

  test("renders without crashing", () => {
    renderProductCard();
  });

  test("displays product information from props", () => {
    renderProductCard();

    expect(screen.getByText("Sweet Tea")).toBeInTheDocument();
    expect(screen.getByText("$4.99")).toBeInTheDocument();
    expect(screen.getByText("Classic southern sweet tea")).toBeInTheDocument();
  });

  test("contains an Add to Cart button", () => {
    renderProductCard();

    const button = screen.getByRole("button", { name: /add to cart/i });
    expect(button).toBeInTheDocument();
  });
});
